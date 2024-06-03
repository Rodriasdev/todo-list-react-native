import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
    Login: undefined;
    Register: undefined;
    tasks: undefined;
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;