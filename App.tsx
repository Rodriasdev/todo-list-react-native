import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./pages/Login";
import Index from "./pages/Index";
import Register from "./pages/Register";
import Tasks from "./pages/Tasks";

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
                // headerShadowVisible: false
              }}
                />
        <Stack.Screen name="Register" component={Register} 
        options={{
          title: 'Salir', 
          headerStyle:{backgroundColor: '#a04dda'}, 
          headerTintColor: 'white',
          // headerShadowVisible: false
                }}
        />
        <Stack.Screen name="Tasks" component={Tasks}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};