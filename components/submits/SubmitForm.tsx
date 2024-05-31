import React from "react"
import { View, TouchableOpacity,Text } from "react-native"
import { ScaledSheet } from "react-native-size-matters"
import { Formik } from "formik"

interface Props{
    username: boolean
}


const initialState = {
    name: '',
    email: '',
    password:''  
}


export const SubmitForm : React.FC<Props> = ({username}) => {
    return(
        <Formik
            initialValues={initialState}
            onSubmit={(values) => console.log(values)}
        >
            {({handleSubmit}) => (
                <View style={{flex: 1, height: 20}}>
                    <TouchableOpacity style={styles.ButtonLogin} onPress={() => handleSubmit}>
                            <Text style={styles.text}>
                                {username == false ? 'Iniciar sesión':'Registrarse'} 
                            </Text>
                    </TouchableOpacity>
                </View>
                )
            }
        </Formik>
    );
};

const styles = ScaledSheet.create({
        ButtonLogin:{
            backgroundColor: '#a04dda',
            width: '130@s',
            borderRadius: 20,
            marginLeft: 20,
            marginTop: 10,
            alignSelf: 'center',
        },
        text:{
            textAlign: 'center',
            fontSize: '19@s',
            color: 'white',
            padding: 10,
            textAlignVertical: 'center'
        }
})