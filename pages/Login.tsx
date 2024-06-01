import React from "react";
import { Image,View, ImageBackground,Text } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { ButtonsInputsForm } from "../components/ButtonsInputsForm";
import { Link } from "@react-navigation/native";

const Login : React.FC = () => {
    return(
        <View style={styles.container}>
            <ImageBackground source={require('../assets/blob-scene-haikei2.png')} style={styles.backgroundImage}>
                <View style={{flex: 1, marginTop: 90}}>  
                    <Text style={[styles.text, {fontSize: 30}]}>Hola</Text>
                    <Text style={[styles.text, {fontSize: 20}]}>Inicie sesión en su cuenta</Text>
                </View>
                <ButtonsInputsForm username={false}/>
                <View style={{flex: 1, marginTop: 50}}>
                    <Text style={[styles.text, {marginTop: 10}]}>Puedes utilizar tus redes sociales</Text>
                    <View style={styles.containerImages}>
                        <Image style={styles.Image} source={require('../assets/logofb.png')}/>
                        <Image style={styles.Image} source={require('../assets/logoTwt.png')}/>
                    </View>
                </View>
                <View style={{alignSelf: 'center', flexDirection: 'row'}}>
                    <Text>No tienes una cuenta?</Text>
                    <Link style={{marginStart: 5}} to='/Register'>Registrarse</Link>
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
        flexDirection: 'row',
        marginTop: 10
    }
})