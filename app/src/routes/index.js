import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { Home } from '../Screens/Home/index';
import { Dispensa } from '../Screens/Dispensa/index';
import { Perfil } from '../Screens/Perfil/index';
import { Criar } from '../Screens/Criar/index';
import { Favoritos} from '../Screens/Favoritos/index'

import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator initialRouteName='Home'
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
          tabBarInactiveTintColor: 'black',
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

