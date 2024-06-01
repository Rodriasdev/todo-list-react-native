import React from "react";
import { View,Text, TouchableOpacity } from "react-native";
import { StyledTextInput } from "./StyledTextInput";
import { ScaledSheet } from "react-native-size-matters";
import { Formik } from "formik";

interface Props {
    username: boolean
}

const initialState ={
    name: '',
    email: '',
    password: ''
}

export const ButtonsInputsForm: React.FC<Props> = ({username}) => {
    return(
        <Formik initialValues={initialState} onSubmit={values => console.log(values)}>
           { ({handleSubmit}) => (
                <View style={styles.container}>
                        {
                            username == false ? <View></View>:
                            <View style={styles.containerInput}>
                                <Text>Nombre *</Text>
                                <StyledTextInput/>
                            </View>
                        }
                        <View style={styles.containerInput}>
                            <Text>Email *</Text>
                            <StyledTextInput/>
                        </View>
                        <View style={styles.containerInput}>
                            <Text>Contraseña *</Text>
                            <StyledTextInput/>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.ButtonLogin} onPress={() => handleSubmit}>
                                <Text style={styles.text}>
                                    {username == false ? 'Iniciar sesión':'Registrarse'} 
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                )
            }
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
    ButtonLogin:{
        backgroundColor: '#a04dda',
        width: '150@s',
        borderRadius: '20@s',
        marginLeft: '20@s',
        alignSelf: 'center',
    },
    text:{
        textAlign: 'center',
        fontSize: '19@s',
        color: 'white',
        padding: 10,
        textAlignVertical: 'center'
    }
})

