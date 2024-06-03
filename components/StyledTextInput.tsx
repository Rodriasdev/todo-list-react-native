import React from "react";
import { TextInput, StyleSheet,Text,View } from "react-native";
import { useField } from "formik";

const styles = StyleSheet.create({
    textInput: {
        borderBottomWidth: 1,
        borderColor: 'grey',
        paddingVertical: 10,
        marginBottom: 10,
        height: 40
    }
});

interface Props {
    style?: object,
    name: string,
    secureTextEntry?: boolean
}

export const StyledTextInput: React.FC<Props> = ({ style = {}, name, ...props }) => {
    const [field, meta] = useField(name);


    const inputStyle = [
        styles.textInput,
        style
    ];


    return (
        <View >
            <TextInput
            style={inputStyle}
            onChangeText={field.onChange(name)}
            onBlur={field.onBlur(name)}
            value={field.value}
            {...props}
            />
            {meta.error && <Text style={{color: 'red'}}>{meta.error}</Text>}
        </View>
    );
};
