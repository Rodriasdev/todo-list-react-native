import React from "react";
import { View,Text } from "react-native";
import { StyledTextInput } from "./StyledTextInput";
import { ScaledSheet } from "react-native-size-matters";

export const ButtonsLogin: React.FC = () => {
    return(
        <View style={styles.container}>
            <View style={styles.containerInput}>
                <Text>Email *</Text>
                <StyledTextInput/>
            </View>
            <View style={styles.containerInput}>
                <Text>Contraseña *</Text>
                <StyledTextInput/>
            </View>
        </View>
    );
};

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        marginTop: -250
    },
    containerInput: {
        marginHorizontal: 40,
    }
})