import React, { useState, useEffect } from "react";
import { View, ImageBackground, Platform } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { ButtonsIndex } from "../../components/ButtonsIndex";

const Index: React.FC = () => {
    const [bgSource, setBgSource] = useState(require('../../assets/images/indexbg-mobile.png'));

    useEffect(() => {
        if (Platform.OS === "web") {
            setBgSource(require('../../assets/images/indexbg-web.png'));
        } else {
            setBgSource(require('../../assets/images/indexbg-mobile.png'));
        }
    }, []);

    return (
        <View style={styles.container}>
            <ImageBackground
                style={Platform.OS === "web" ? styles.webBackgroundImage : styles.backgroundImage}
                source={bgSource}
            >
                <ButtonsIndex />
            </ImageBackground>
        </View>
    );
};

export default Index;

const styles = ScaledSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
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
