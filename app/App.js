import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Cadastro } from './src/Screens/Cadastro/index';
import { Login } from './src/Screens/Login/index';
import { Home } from './src/Screens/Home/index';
import { SplashScreenInitial } from './src/SplashScreen/TelaInicial/index';
import { EsqueceuSenha } from './src/Screens/EsqueceuSenha/index';
import { Dispensa } from './src/Screens/Dispensa/index';
import { Ingredientes } from './src/Screens/Ingredientes';
import { Perfil } from './src/Screens/Perfil/index';
import { Criar } from './src/Screens/Criar/index';
import { AlterarSenha } from './src/Screens/AlterarSenha/index';
import { LoginFacebookGoogle } from './src/Screens/LoginFacebookGoogle/index';
import { Receitas } from './src/Screens/Receitas/index';
import { Receita } from './src/Screens/Receita/index';
import { Assinatura } from './src/Screens/Assinatura/index';
import { Favoritos} from './src/Screens/Favoritos/index'

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
function routes(){
return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreenInitial"
          component={SplashScreenInitial}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Receita"
          component={Receita}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Receitas"
          component={Receitas}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginFacebookGoogle"
          component={LoginFacebookGoogle}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EsqueceuSenha"
          component={EsqueceuSenha}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dispensa"
          component={Dispensa}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Ingredientes"
          component={Ingredientes}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Perfil"
          component={Perfil}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Criar"
          component={Criar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AlterarSenha"
          component={AlterarSenha}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Assinatura"
          component={Assinatura}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home"
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home-outline'
                : 'home-outline';
            } else if (route.name === 'Favoritos') {
              iconName = focused 
              ? 'heart-outline' 
              : 'heart-outline';
            } else if (route.name === 'Criar') {
              iconName = focused 
              ? 'add-circle-outline' 
              : 'add-circle-outline';
            } else if (route.name === 'Dispensa') {
              iconName = focused 
              ? 'clipboard-outline' 
              : 'clipboard-outline';
            
            } else if (route.name === 'Perfil') {
              iconName = focused 
              ? 'person-circle-outline' 
              : 'person-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
              backgroundColor: '#ffff00',
          },
        })}         
        >
      <Tab.Screen
          name="Criar"
          component={Criar}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Dispensa"
          component={Dispensa}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
         <Tab.Screen
          name="Favoritos"
          component={Favoritos}
          options={{ headerShown: false }}
        />
         <Tab.Screen
          name="Perfil"
          component={Perfil}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
