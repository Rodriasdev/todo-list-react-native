import React from "react";
import { StyleSheet,View, ImageBackground,Text } from "react-native";

const Index: React.FC = () => {
    return(
        <View style={style.container}>
            <ImageBackground style={style.backgroundImage} source={require('../assets/wave-haikei.png')}/>
            <Text>Hola</Text>
        </View>
    );
};

export default Index;

const style = StyleSheet.create({
    container:{
        flex: 1
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
})