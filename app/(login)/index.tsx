import React from "react";
import {View, ImageBackground  } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { ButtonsIndex } from "../../components/ButtonsIndex";

const Index: React.FC = () => {


    return(
        <View style={style.container}>
            <ImageBackground style={style.backgroundImage} source={require('../../assets/images/wave-haikei.png')}>
                <ButtonsIndex/>
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
    }
})