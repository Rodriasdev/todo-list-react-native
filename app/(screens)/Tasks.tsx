import React from "react";
import { View,TouchableOpacity,Text, Platform } from "react-native";
import { TaskList } from "@/components/TasksList";
import tasks from '../../data/tasks.json'
import { ScaledSheet,scale } from "react-native-size-matters";
import { useNavigation } from "expo-router";
import { NavigationProp } from "@/types/navigate";

const Tasks: React.FC = () => {

    const navigate = useNavigation<NavigationProp>()

    return (
        <View>
            <TouchableOpacity onPress={()=> navigate.navigate("AddTask")} style={styles.addTask}>
                <Text style={styles.text}>Agregar tarea</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigate.navigate("Setting")} style={styles.addTask}>
                <Text style={styles.text}>Configuración</Text>
            </TouchableOpacity>
            <View>
                <TaskList tasks={tasks}/>
            </View>
        </View>
    );
};

export default Tasks;

const styles = ScaledSheet.create({
    addTask:{
        backgroundColor: '#a04dda',
        borderRadius: scale(20),
        alignSelf: 'center',
        marginTop: scale(15),
        paddingHorizontal: scale(10),
    },
    text: {
        textAlign: 'center',
        color: 'white',
        fontSize: Platform.OS === 'web' ? scale(10) : scale(15),
        paddingVertical: scale(10),
    }
});