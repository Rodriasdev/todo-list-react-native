import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { findTasks } from "./tasks.dto";

export type RootStackParamList = {
    Login: undefined;
    Register: undefined;
    Tasks: undefined;
    ViewTask: { task: findTasks };
    AddTask: undefined;
    EditTask: {task: findTasks};
    Setting: undefined
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;