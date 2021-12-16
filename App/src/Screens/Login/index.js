import React, { useState } from 'react';
import { styles } from './style.js';
import { View, Text, TouchableOpacity, Button, TextInput, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Icon from 'react-native-vector-icons/Fontisto';
import ImageBackground from '../../Componentes/Header';
import bcrypt from 'bcryptjs';

import * as Facebook from "expo-facebook";
import * as Google from 'expo-google-app-auth';

export function Login({route, navigation}) {
  const [user, setUser] = useState(null);

  const [emailLogin, setEmailLogin] = useState('');
  const [errorEmailLogin, setErrorEmailLogin] = useState(null);

  const [senhaLogin, setSenhaLogin] = useState('');
  const [errorSenhaLogin, setErrorSenhaLogin] = useState(null);

  const [hideText, setHideText] = useState(true);

  const validar = () => {
    let error = false;

    setErrorEmailLogin(null)
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!regexEmail.test(String(emailLogin).toLowerCase())){
      setErrorEmailLogin("Preencha seu e-mail corretamente")
      error = true
    }

    setErrorSenhaLogin(null)
    const regexSenha= /^[a-z0-9_-]/
    if(!regexSenha.test(senhaLogin)) {
      setErrorSenhaLogin("Preencha sua senha corretamente")
      error = true
    }
    
    return !error
  }

  async function comparePasswordsEmail() {
    var hashSenhaCadastro = route.params.senha
    var emailCadastro = route.params.emailC
    var com = await bcrypt.compare(senhaLogin, hashSenhaCadastro)
    if(com == true && emailCadastro === emailLogin) {
      navigation.navigate('Home')
    } else {
      console.error('Email/senha incorreto')
    }
  }

  const isLogIn = () => {
    if(validar()) {
      comparePasswordsEmail()
    }
  }

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
      
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Digite seu Email"
          placeholderTextColor="black"
          onChangeText={value => {
            setEmailLogin(value)
            setErrorEmailLogin(null)
        }}
                
          errorMessage={errorEmailLogin}        
        />
        <View style={styles.iconSenha}>
          <TextInput
            style={styles.textInput}
            secureTextEntry={hideText}
            placeholder="Digite sua senha"
            placeholderTextColor= 'black'
            onChangeText = {value => {
              setSenhaLogin(value)
            }}
            returnKeyType="done"
            errorMessage={errorSenhaLogin}      
          />

          <TouchableOpacity style={styles.iconEye} onPress={() => setHideText(!hideText)}>
            { hideText ? 
              <Ionicons name="eye" color="#000" size={25}/>
              :
              <Ionicons name="eye-off" color="#000" size={25}/>
            }
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.buttonLogin} onPress={() => isLogIn()}>
              <Text style={{ color: '#800000' }}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.textSenha} onPress={()=>navigation.navigate('EsqueceuSenha')}>
          <Text style={{ textAlign: 'center' }}> Esqueceu sua senha? </Text>
        </TouchableOpacity>
    

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

        <TouchableOpacity onPress={()=> navigation.navigate('Cadastro')}>
          <Text style={{ textAlign: 'center' }}>Não tem uma conta? Faça seu cadastro.</Text>
        </TouchableOpacity>      
      </View>     
    </View>
  );
}

