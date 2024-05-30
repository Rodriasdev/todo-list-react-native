import React from "react";
import { View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { ImageBackground } from "react-native";
import { ButtonsInputsForm } from "../components/ButtonsInputsForm";

const Register: React.FC = () => {
    return(
        <View style={styles.container}>
            <ImageBackground source={require('../assets/blob-scene-haikei2.png')} style={styles.backgroundImage}>
                <View style={styles.componentContainer}>
                    <ButtonsInputsForm name={true}/>
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
        marginTop: -150
    }
});