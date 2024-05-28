import React from "react";
import { TextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    textInput: {
        borderBottomWidth: 1,
        borderColor: 'grey',
        paddingVertical: 10,
        marginBottom: 10
    }
});

interface Props {
    style? : object
}

export const StyledTextInput: React.FC<Props> = ({style = {}, ...props}) => {

    const inputStyle = [
        styles.textInput,
        style
    ]

    return (
        <TextInput style={inputStyle} {...props}/>
    )
}