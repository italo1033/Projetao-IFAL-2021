import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import {Cadastro} from "./src/Screens/Cadastro/index"
import {Login} from "./src/Screens/Login/index"
import {Home} from "./src/Screens/Home/index"
import {SplashScreenInitial} from './src/SplashScreen/TelaInicial/index';
import {EsqueceuSenha} from './src/Screens/EsqueceuSenha/index';

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreenInitial">
        <Stack.Screen
            name="SplashScreenInitial" 
            component={SplashScreenInitial} 
            options={{ headerShown: false}}/>
        <Stack.Screen 
            name="Login" 
            component={Login} 
            options={{ headerShown: false }}/>
        <Stack.Screen  
            name="Home" 
            component={Home} 
            options={{ headerShown: false }}/>
        <Stack.Screen 
            name="Cadastro" 
            component={Cadastro} 
            options={{ headerShown: false }}/>
        <Stack.Screen 
            name="EsqueceuSenha" 
            component={EsqueceuSenha} 
            options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;