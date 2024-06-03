import React, {useEffect, useState} from "react";
import { Image,View, ImageBackground,Text } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { ButtonsInputsForm } from "../../components/ButtonsInputsForm";
import { Link } from "@react-navigation/native";
import { Platform } from "react-native";

const Login : React.FC = () => {

    const [bgSource, setBgSource] = useState(require('../../assets/images/indexbg-mobile.png'));
    
    useEffect(() => {
        if (Platform.OS === "web") {
            setBgSource(require('../../assets/images/bglogin-web.png'));
        } else {
            setBgSource(require('../../assets/images/bglogin-mobile.png'));
        }
    }, []);

    return(
        <View style={styles.container}>
            <ImageBackground source={bgSource} 
            style={Platform.OS === "web" ? styles.webBackgroundImage : styles.backgroundImage}>
                <View style={{flex: 1, marginTop: 90}}>  
                    <Text style={[styles.text, {fontSize: 30}]}>Hola</Text>
                    <Text style={[styles.text, {fontSize: 20}]}>Inicie sesión en su cuenta</Text>
                </View>
                <ButtonsInputsForm username={false}/>
                <View style={styles.options}>
                    <Text style={[styles.text, {marginTop: 10}]}>Puedes utilizar tus redes sociales</Text>
                    <View style={styles.containerImages}>
                        <Image style={styles.Image} source={require('../../assets/images/logofb.png')}/>
                        <Image style={[styles.Image, {marginTop: 5}]} source={require('../../assets/images/logoTwt.png')}/>
                    </View>
                </View>
                <View style={{alignSelf: 'center', flexDirection: 'row'}}>
                    <Text>No tienes una cuenta?</Text>
                    <Link style={{marginStart: 1}} to='/Register'>Registrarse</Link>
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
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: 10
    },
    webBackgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    },
    options: {
        flex: 1,
        ...Platform.select({
            web: {
                marginTop: "80@s"
            },
            android: {
                marginTop: "50@s"
            }
        })
    }
});