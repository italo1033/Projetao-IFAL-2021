import React, { useState } from 'react';
import { styles } from './style.js';
import { View, Text, TouchableOpacity, Button, TextInput, Image } from 'react-native';

import Icon from 'react-native-vector-icons/Fontisto';
import ImageBackground from '../../Componentes/Header';

import * as Facebook from "expo-facebook";
import * as Google from 'expo-google-app-auth';

export function LoginFacebookGoogle({route, navigation}) {
  const [user, setUser] = useState(null);

  const isSignInGoogle = async() => {
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

  const isSignUpFacebook = async () => {
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
      <ImageBackground />
    
        {user ? (
          <TouchableOpacity  style={styles.button} onPress={()=>navigation.navigate('Home')}>
            <Text style={{color:"#fff"}}> Home </Text>
          </TouchableOpacity>
            ) : (
          <TouchableOpacity style={styles.buttonFacebook} onPress={isSignUpFacebook}>
          <Icon name="facebook" style={{ color: '#fff', marginLeft: 5 }} size={20}/><Text style={{ color: '#fff', marginLeft: 10 }}>Entrar com o facebook</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity style={styles.buttonGmail} onPress={isSignInGoogle}> 
          <Image style={{ width: 20, height: 20 }} source={require('../../Img/Icon/google.ico')}/><Text style={{ marginLeft: 10 }}>Entrar com o Gmail</Text>
        </TouchableOpacity>  

        <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate('Login')}>
              <Text style={{ color: '#800000' }}>Fazer Login</Text>
        </TouchableOpacity>  

      <TouchableOpacity>
        <Text style={{ marginTop: 50 }}>Entrar como visitante</Text> 
      </TouchableOpacity>
     
      </View>     
  );
}

