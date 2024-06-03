import React from "react";
import { View, TouchableOpacity, Platform } from "react-native";
import { Link } from "@react-navigation/native";
import { ScaledSheet } from "react-native-size-matters";


export const ButtonsIndex: React.FC = () => {
    return (
        <View style={style.containerButtons}>
            <TouchableOpacity style={style.buttonLogin}>
                <Link to={'/Login'} style={style.text}>Iniciar sesión</Link>
            </TouchableOpacity>
            <TouchableOpacity style={style.buttonRegister}>
                <Link to={'/Register'} style={style.text}>Registrarse</Link>
            </TouchableOpacity>
        </View>
    )
};

const style = ScaledSheet.create({
    buttonRegister:{
        backgroundColor: '#a04dda',
        borderRadius: 20,
        height: '30@s',
        marginLeft: 20,
        justifyContent: 'center',
        marginRight: 20,
        ...Platform.select({
            android: {
                flex: 1,
            },
            web: {
                padding: 10,
            }
        })
    },
    buttonLogin:{
        backgroundColor: '#a04dda',
        borderRadius: 20,
        height: '30@s',
        justifyContent: 'center',
        marginLeft: 20,
        ...Platform.select({
            android: {
                flex: 1,
            },
            web: {
                padding: 10,
            }
        })
    },
    text: {
        textAlign: 'center',
        fontSize: '19@s',
        color: 'white'
    },
    containerButtons:{  
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: '300@s'
    }
})