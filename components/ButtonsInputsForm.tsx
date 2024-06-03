import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StyledTextInput } from "./StyledTextInput";
import { ScaledSheet } from "react-native-size-matters";
import { Formik } from "formik";
import users from "../data/users.json";
import { createUser, findUser } from "../types/user.dto";

interface Props {
    username: boolean
}

const initialState = {
    name: '',
    email: '',
    password: ''
}

const registerUser = (data:createUser) => {
    users.push(JSON.parse(JSON.stringify(data)));
};

const loginUser = (data:findUser) => {
    const user = users.find(user => user.email == data.email);
    console.log(user);
};

export const ButtonsInputsForm: React.FC<Props> = ({ username }) => {
    return (
        <Formik initialValues={initialState} onSubmit={values => username == true?registerUser(values):loginUser(values)}>
            {({ handleSubmit }) => (
                <View style={styles.container}>
                    {
                        username && (
                            <View style={styles.containerInput}>
                                <Text>Nombre *</Text>
                                <StyledTextInput name="name" />
                            </View>
                        )
                    }
                    <View style={styles.containerInput}>
                        <Text>Email *</Text>
                        <StyledTextInput name="email" />
                    </View>
                    <View style={styles.containerInput}>
                        <Text>Contraseña *</Text>
                        <StyledTextInput secureTextEntry={true} name="password" />
                    </View>
                    <View>
                        <TouchableOpacity style={styles.ButtonLogin} onPress={() => handleSubmit()}>
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
    ButtonLogin: {
        backgroundColor: '#a04dda',
        width: '150@s',
        borderRadius: '20@s',
        marginLeft: '20@s',
        alignSelf: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: '19@s',
        color: 'white',
        padding: 10,
        textAlignVertical: 'center'
    }
});
