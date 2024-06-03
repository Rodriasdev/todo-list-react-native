import React, {useState,useEffect} from "react";
import { View, Text } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { ImageBackground } from "react-native";
import { ButtonsInputsForm } from "../../components/ButtonsInputsForm";
import { Link } from "@react-navigation/native";
import { Platform } from "react-native";


const Register: React.FC = () => {
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
                
                <Text style={styles.text}>Crear tu cuenta</Text>
                <View style={styles.componentContainer}>  
                        <ButtonsInputsForm username={true}/>
                </View>
                <View style={{alignSelf: 'center', flexDirection: 'row'}}>
                    <Text>Ya tienes una cuenta?</Text>
                    <Link style={{marginStart: 5}} to='/Login'>Iniciar sesión</Link>
                </View>
            </ImageBackground>
        </View>
    );
};

export default Register;

const styles = ScaledSheet.create({
    container: {
        flex: 1
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    componentContainer: {
        marginTop: -250,
        flex: 1
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
    },
    text: {
        flex: 1, 
        textAlign: 'center', 
        marginTop: 90,
        fontSize: 19
    },
    webBackgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
});