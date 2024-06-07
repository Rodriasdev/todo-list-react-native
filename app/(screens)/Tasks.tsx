import React from "react";
import { View } from "react-native";
import { TaskList } from "@/components/TasksList";
import tasks from '../../data/tasks.json'
import { ScaledSheet } from "react-native-size-matters";

const Tasks: React.FC = () => {
    return (
        <View>
            <View>
                <TaskList tasks={tasks}/>
            </View>
            
        </View>
    );
};

export default Tasks;

const styles = ScaledSheet.create({
    
});