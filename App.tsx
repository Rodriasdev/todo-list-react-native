import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./pages/Login";
import Index from "./pages/Index";

const Stack = createNativeStackNavigator();


export default function App() {

  

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Index" component={Index} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login} 
        options={{
                title: 'Salir', 
                headerStyle:{backgroundColor: '#a04dda'}, 
                headerTintColor: 'white',
                headerTitleStyle: {
                  
                }}}
                />
      </Stack.Navigator>
    </NavigationContainer>
  );
};