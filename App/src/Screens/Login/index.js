import React, { useState } from 'react';
import { styles } from './style.js';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

import * as Facebook from "expo-facebook";

import * as Google from 'expo-google-app-auth';

export function Login({navigation}) {
  const [user, setUser] = useState(null);

  const signInGoogle = async() => {
    try {
      const { type, user } = await Google.logInAsync({
        androidClientId: `153675377851-fh50uhfel6np8031hhj2of0g8bs7o71f.apps.googleusercontent.com`
      });

      if(type === 'success') {
        navigation.navigate("Home", { user });
      }
    } catch(error) {
      console.error('Verifique o erro e tente novamente', error);
    }
  };

  const signUpFacebook = async () => {
    try {
      await Facebook.initializeAsync("651857032664740");
      const { type, token } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile", "email"],
      });
      if (type === "success") {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          //`https://graph.facebook.com/me?access_token=${token}`
          `https://graph.facebook.com/me?fields=id,name,picture.type(large),email&access_token=${token}`
        );
        // console.log((await response.json()).name);
        const data = await response.json();
        setUser(data);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  };


  return (
    <View style={styles.isBackgroundGeneral}>
    

    <TouchableOpacity style={styles.buttonGmail} onPress={signInGoogle}> 
    <Text> <Icon name="google" size={25} /> Entrar com o Gmail</Text>
    </TouchableOpacity>

    <View style={styles.container}>
      {user ? (
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Home')}>
          <Text style={{color:"#fff"}}> Home </Text>
        </TouchableOpacity>
      ) : (
        <Button title="Login com facebook" onPress={signUpFacebook} />
      )}
    </View>

    <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Cadastro')}>
        <Text style={{color:"#fff"}}> Tela Cadastro </Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Home')}>
        <Text style={{color:"#fff"}}> Tela Home </Text>
    </TouchableOpacity>

    </View>
  );
}

