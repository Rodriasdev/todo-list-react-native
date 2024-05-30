import React from "react";
import { View,Text,TouchableOpacity } from "react-native";
import { StyledTextInput } from "./StyledTextInput";
import { ScaledSheet } from "react-native-size-matters";
import { Link } from "@react-navigation/native";

interface Props {
    username: boolean
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        marginTop: -90
    },
    containerInput: {
        marginHorizontal: 40,
    },
    ButtonLogin:{
        backgroundColor: '#a04dda',
        width: '130@s',
        borderRadius: 20,
        marginLeft: 20,
        marginTop: 10,
        alignSelf: 'center',
        height: '40@s'
    },
    text:{
        textAlign: 'center',
        fontSize: 19,
        color: 'white',
        padding: 10,
        textAlignVertical: 'center'
    }
})

export const ButtonsInputsForm: React.FC<Props> = ({username}) => {
    return(
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
            <View style={{flex: 1, height: 20}}>
                <TouchableOpacity style={styles.ButtonLogin}>
                        <Text style={styles.text}>Iniciar sesión</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

