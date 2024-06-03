import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
    Login: undefined;
    Register: undefined;
    Tasks: undefined;
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;