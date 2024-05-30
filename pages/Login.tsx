import React from "react";
import { Image,View, ImageBackground,Text } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { ButtonsLogin } from "../components/ButtonsLogin";
import { SvgXml } from "react-native-svg";


const Login : React.FC = () => {
    return(
        <View style={styles.container}>
            <ImageBackground source={require('../assets/blob-scene-haikei.png')} style={styles.backgroundImage}>
                <View style={{flex: 1, marginTop: 90}}>  
                    <Text style={[styles.text, {fontSize: 30}]}>Hola</Text>
                    <Text style={[styles.text, {fontSize: 20}]}>Inicie sesión en su cuenta</Text>
                </View>
                <ButtonsLogin/>
                <View style={styles.containerImages}>
                    <Image style={styles.Image} source={require('../assets/logofb.png')}/>
                    <Image style={styles.Image} source={require('../assets/logoTwt.png')}/>
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
        textAlign: 'center'
    },
    Image: {
        width: '20@s',
        height: '20@s',
        marginHorizontal: 10
    },
    containerImages:{
        flex: 1,
        alignSelf: 'center',
        flexDirection: 'row'
    }
})