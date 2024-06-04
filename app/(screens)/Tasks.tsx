import React from "react";
import { View } from "react-native";
import { TaskList } from "@/components/TasksList";
import tasks from '../../data/tasks.json'


const Tasks: React.FC = () => {
    return (
        <View>
            <TaskList tasks={tasks}/>
        </View>
    );
};

export default Tasks;