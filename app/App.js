import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import {Cadastro} from "./src/Screens/Cadastro/index";
import {Login} from "./src/Screens/Login/index";
import {Home} from './src/Screens/Home/index';
import {SplashScreenInitial} from './src/SplashScreen/TelaInicial/index';
import {EsqueceuSenha} from './src/Screens/EsqueceuSenha/index';
import {Dispensa} from './src/Screens/Dispensa/index';
import {Ingredientes} from './src/Screens/Ingredientes';
import {Perfil} from './src/Screens/Perfil/index';
import {Criar} from './src/Screens/Criar/index';
import {AlterarSenha} from './src/Screens/AlterarSenha/index';
import {LoginFacebookGoogle} from './src/Screens/LoginFacebookGoogle/index';
import {Receitas} from './src/Screens/Receitas/index';
import {Receita} from './src/Screens/Receita/index';


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Perfil">
        <Stack.Screen
            name="SplashScreenInitial" 
            component={SplashScreenInitial} 
            options={{ headerShown: false}}/>
         <Stack.Screen
            name="Receita" 
            component={Receita} 
            options={{ headerShown: false}}/>
          <Stack.Screen
            name="Receitas" 
            component={Receitas} 
            options={{ headerShown: false}}/>
        <Stack.Screen  
            name="Home" 
            component={Home} 
            options={{ headerShown: false }}/>
        <Stack.Screen 
            name="Cadastro" 
            component={Cadastro} 
            options={{ headerShown: false }}/>
         <Stack.Screen 
            name="Login" 
            component={Login} 
            options={{ headerShown: false }}/>
        <Stack.Screen 
            name="LoginFacebookGoogle" 
            component={LoginFacebookGoogle} 
            options={{ headerShown: false }}/>
        <Stack.Screen 
            name="EsqueceuSenha" 
            component={EsqueceuSenha} 
            options={{ headerShown: false }}/>
        <Stack.Screen 
            name="Dispensa" 
            component={Dispensa} 
            options={{ headerShown: false }}/>
        <Stack.Screen 
            name="Ingredientes" 
            component={Ingredientes} 
            options={{ headerShown: false }}/>
        <Stack.Screen
            name="Perfil" 
            component={Perfil} 
            options={{ headerShown: false}}/>
          <Stack.Screen
            name="Criar" 
            component={Criar} 
            options={{ headerShown: false}}/>
        <Stack.Screen
            name="AlterarSenha" 
            component={AlterarSenha} 
            options={{ headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;