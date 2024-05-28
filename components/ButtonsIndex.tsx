import { View, TouchableOpacity } from "react-native";
import { Link } from "@react-navigation/native";
import { ScaledSheet } from "react-native-size-matters";

export const ButtonsIndex = () => {
    return (
        <View style={style.containerButtons}>
            <TouchableOpacity style={style.buttonLogin}>
                <Link to={'/Login'} style={style.text}>Iniciar Sesión</Link>
            </TouchableOpacity>
            <TouchableOpacity style={style.buttonRegister}>
                <Link to={'Register'} style={style.text}>Registrarse</Link>
            </TouchableOpacity>
        </View>
    )
};

const style = ScaledSheet.create({
    buttonRegister:{
        backgroundColor: '#a04dda',
        width: '130@s',
        borderRadius: 20,
        height: '30@s',
        marginLeft: 20
    },
    buttonLogin:{
        backgroundColor: '#a04dda',
        width: '150@s',
        borderRadius: 20,
        height: '30@s'
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        marginTop: 5
    },
    containerButtons:{  
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: '300@s'
    }
})