import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [loaded] = useFonts({
    SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (

      <Stack initialRouteName='index'>
        <Stack.Screen name="index" options={{headerShown:false}}/>
        <Stack.Screen name="Register"
                      options={{
                      title: 'Salir', 
                      headerStyle:{backgroundColor: '#a04dda'}, 
                      headerTintColor: 'white',
                      // headerShadowVisible: false
                      }}/>
        <Stack.Screen name="Login"
                      options={{
                      title: 'Salir', 
                      headerStyle:{backgroundColor: '#a04dda'}, 
                      headerTintColor: 'white',
                      // headerShadowVisible: false
                      }}/>
        <Stack.Screen name="Tasks"/>
        <Stack.Screen name='ViewTask'/>
        <Stack.Screen name='AddTask'/>
      </Stack>

  );
}