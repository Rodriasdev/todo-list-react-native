import React from "react";
import { View, ImageBackground } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

const Login : React.FC = () => {
    return(
        <View style={styles.container}>
            <ImageBackground source={require('../assets/blob-scene-haikei.png')} style={styles.backgroundImage}>

            </ImageBackground>
        </View>
    );
};

export default Login;

const styles = ScaledSheet.create({
    container:{
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    }
})