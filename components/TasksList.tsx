import React from "react";
import { FlatList, View, Text } from "react-native";
import { findTasks } from "@/types/tasks.dto";

interface Props {
    tasks: findTasks[]
}

export const TaskList:React.FC<Props> = ({tasks}) => {
    return(
        <FlatList
            data={tasks}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => (
                <View>
                    <Text>{item.title}</Text>
                </View>
            )}
        />
    );
};