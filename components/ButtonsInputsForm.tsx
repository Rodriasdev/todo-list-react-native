import React from "react";
import { View,Text } from "react-native";
import { StyledTextInput } from "./StyledTextInput";
import { ScaledSheet } from "react-native-size-matters";
import { SubmitForm } from "./submits/SubmitForm";

interface Props {
    username: boolean
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        marginTop: -90
    },
    containerInput: {
        marginHorizontal: 40,
    }
})

export const ButtonsInputsForm: React.FC<Props> = ({username}) => {
    return(
        <View style={styles.container}>
            {
                username == false ? <View></View>:
                <View style={styles.containerInput}>
                    <Text>Nombre *</Text>
                    <StyledTextInput/>
                </View>
            }
            <View style={styles.containerInput}>
                <Text>Email *</Text>
                <StyledTextInput/>
            </View>
            <View style={styles.containerInput}>
                <Text>Contraseña *</Text>
                <StyledTextInput/>
            </View>
            <SubmitForm username={username}/>
        </View>
    );
};

