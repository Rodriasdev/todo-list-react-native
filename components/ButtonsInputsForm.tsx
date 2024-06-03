import React from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import { StyledTextInput } from "./StyledTextInput";
import { ScaledSheet, scale } from "react-native-size-matters";
import { Formik } from "formik";
import users from "../data/users.json";
import { createUser, findUser } from "../types/user.dto";
import { loginValidationSchema, registerValidationSchema } from "../validatorSchemas/user";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "../types/navigate";

interface Props {
    username: boolean
}

export const ButtonsInputsForm: React.FC<Props> = ({ username }) => {

    const navigate = useNavigation<NavigationProp>()

    const registerUser = (data: createUser) => {
        users.push(JSON.parse(JSON.stringify(data)));
        return navigate.navigate("Tasks");
    };
    
    const loginUser = (data: findUser) => {
        const user = users.find(user => user.email === data.email);
        if (!user) return

        return navigate.navigate("Tasks");
    };

    const initialState = {
        name: '',
        email: '',
        password: ''
    }
    
    return (
        <Formik
            validationSchema={username ? registerValidationSchema : loginValidationSchema}
            initialValues={initialState}
            onSubmit={values => username ? registerUser(values) : loginUser(values)}
        >
            {({ handleSubmit }) => (
                <View style={styles.container}>
                    {username && (
                        <View style={styles.containerInput}>
                            <Text>Nombre *</Text>
                            <StyledTextInput name="name" />
                        </View>
                    )}
                    <View style={styles.containerInput}>
                        <Text>Email *</Text>
                        <StyledTextInput name="email" />
                    </View>
                    <View style={styles.containerInput}>
                        <Text>Contraseña *</Text>
                        <StyledTextInput secureTextEntry={true} name="password" />
                    </View>
                    <View>
                        <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
                            <Text style={styles.text}>
                                {username ? 'Registrarse' : 'Iniciar sesión'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </Formik>
    );
};

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: scale(10),
        marginTop: Platform.OS === 'web' ? scale(80) : scale(50),
    },
    containerInput: {
        marginVertical: scale(10),
        marginHorizontal: Platform.OS === 'web' ? '30%' : scale(40),
    },
    button: {
        backgroundColor: '#a04dda',
        borderRadius: scale(20),
        alignSelf: 'center',
        marginTop: scale(15),
        paddingHorizontal: scale(10),
    },
    text: {
        textAlign: 'center',
        color: 'white',
        fontSize: Platform.OS === 'web' ? scale(10) : scale(20),
        paddingVertical: scale(10),
    },
});
