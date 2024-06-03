import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StyledTextInput } from "./StyledTextInput";
import { ScaledSheet } from "react-native-size-matters";
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
                        <TouchableOpacity style={styles.Button} onPress={() => handleSubmit()}>
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
        marginTop: '-65@s'
    },
    containerInput: {
        marginHorizontal: '40@s',
    },
    Button: {
        backgroundColor: '#a04dda',
        width: '150@s',
        borderRadius: '20@s',
        marginLeft: '20@s',
        alignSelf: 'center',
        marginTop: '50@s'
    },
    text: {
        textAlign: 'center',
        fontSize: '19@s',
        color: 'white',
        padding: 10,
        textAlignVertical: 'center'
    }
});
