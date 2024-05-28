import React from "react";
import { View, ImageBackground,Text } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

const Login : React.FC = () => {
    return(
        <View style={styles.container}>
            <ImageBackground source={require('../assets/blob-scene-haikei.png')} style={styles.backgroundImage}>
                <View style={{flex: 1, marginTop: 20}}>  
                    <Text style={styles.text}>Hola</Text>
                    <Text style={styles.text}>Inicie sesión en su cuenta</Text>
                </View>
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
    },
    text:{
        textAlign: 'center',
        fontSize: 19
    }
})