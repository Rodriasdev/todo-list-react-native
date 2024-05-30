import React from "react";
import { View,Text,TouchableOpacity } from "react-native";
import { StyledTextInput } from "./StyledTextInput";
import { ScaledSheet } from "react-native-size-matters";
import { Link } from "@react-navigation/native";

export const ButtonsLogin: React.FC = () => {
    return(
        <View style={styles.container}>
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
                    <Link to={'Register'} style={styles.text}>Iniciar sesión</Link>
            </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        marginTop: -90
    },
    containerInput: {
        marginHorizontal: 40,
    },
        buttonLogin:{
        backgroundColor: '#a04dda',
        width: '150@s',
        borderRadius: 20,
        height: '30@s'
    },
    ButtonLogin:{  
        backgroundColor: '#a04dda',
        width: '130@s',
        borderRadius: 20,
        marginLeft: 20,
        marginTop: 10,
        alignSelf: 'center'
    },
    text:{
        textAlign: 'center',
        fontSize: 19,
        color: 'white',
        padding: 10
    }
})