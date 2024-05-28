import React from "react";
import {View, ImageBackground, TouchableOpacity, Text } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

const Index: React.FC = () => {
    return(
        <View style={style.container}>
            <ImageBackground style={style.backgroundImage} source={require('../assets/wave-haikei.png')}>
                <View style={style.containerButtons}>
                    <TouchableOpacity style={style.buttonLogin}>
                        <Text style={style.text}>Iniciar Sesión</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.buttonRegister}>
                        <Text style={style.text}>Registrarse</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

export default Index;

const style = ScaledSheet.create({
    container:{
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    buttonRegister:{
        backgroundColor: '#a04dda',
        width: '130@s',
        borderRadius: 20,
        height: '30@s',
        marginLeft: 20
    },
    buttonLogin:{
        backgroundColor: '#a04dda',
        width: '150@s',
        borderRadius: 20,
        height: '30@s'
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        marginTop: 5
    },
    containerButtons:{  
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: '300@s'
    }
})