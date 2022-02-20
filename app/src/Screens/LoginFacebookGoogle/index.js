import React, { useState } from 'react';
import { styles } from './style.js';
import { View, Text, TouchableOpacity, Button, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import ImageBackground from '../../Componentes/Header';
import * as Facebook from "expo-facebook";
import * as Google from 'expo-google-app-auth';

export function LoginFacebookGoogle({route, navigation}) {

  //Usuário
  const [user, setUser] = useState(null);

  {/* O trecho de código entre as linhas 15 e 27 tem como objetivo permitir que o              usuário possa realizar login na sua conta do google pelo aplicativo, permitindo com que     o app tenha acesso algumas informações, como nome de usuário. */}
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

  {/* O trecho de código entre as linhas 30 e 51 tem como objetivo permitir que o              usuário possa realizar login na sua conta do Facebook pelo aplicativo, permitindo com       que o app tenha acesso algumas informações, como nome de usuário, email e foto de           perfil. */}
  const isSignUpFacebook = async () => {
    try {
      await Facebook.initializeAsync("651857032664740");
      const { type, token } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile", "email"],
      });
      if (type === "success") {
        const response = await fetch(
          `https://graph.facebook.com/me?fields=id,name,picture.type(large),email&access_token=${token}`
        );
        const data = await response.json();
        setUser(data);
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  };


  return (
    <View style={styles.isBackgroundGeneral}>

      {/* O trecho de código na linha 54 tem como objetivo apresentar o componente                ImageBackground, que pertence ao cabeçalho. */}
      <ImageBackground />
    
        {/* O trecho de código entre as linhas 56 e 64 tem como objetivo apresentar um botão
        por meio da tag TouchableOpacity, a partir desse botão o usuário poderá realizar um         login via sua conta do facebook, onde ele poderá acessar o aplicativo informando            suas credenciais. Dentro dessa tag temos a tag Text, que tem como objetivo                  apresentar o texto dentro do botão, além da tag Icon, que tem o bojetivo apresentar         um icone. */}
        {user ? (
          <TouchableOpacity  style={styles.button} onPress={()=>navigation.navigate('Home')}>
            <Text style={{color:"#fff"}}> Home </Text>
          </TouchableOpacity>
            ) : (
          <TouchableOpacity style={styles.buttonFacebook} onPress={isSignUpFacebook}>
          <Icon name="facebook" style={{ color: '#fff', marginLeft: 5 }} size={20}/><Text style={{ color: '#fff', marginLeft: 10 }}>Entrar com o facebook</Text>
          </TouchableOpacity>
        )}







        {/* O trecho de código entre as linhas 66 e 68 tem como objetivo apresentar um botão
        por meio da tag TouchableOpacity, a partir desse botão o usuário poderá realizar um         login via sua conta do google, onde ele poderá acessar o aplicativo informando suas         credenciais. Dentro dessa tag temos a tag Text, que tem como objetivo                       apresentar o texto dentro do botão */}
        <TouchableOpacity style={styles.buttonGmail} onPress={isSignInGoogle}> 
          <Image style={{ width: 20, height: 20 }} source={require('../../Img/Icon/google.ico')}/><Text style={{ marginLeft: 10 }}>Entrar com o Gmail</Text>
        </TouchableOpacity>  






        {/* O trecho de código entre as linhas 70 e 72 tem como objetivo apresentar um botão
        por meio da tag TouchableOpacity, a partir desse botão o usuário poderá entrar na           tela de Login, onde ele poderá acessar o aplicativo informando suas credenciais.            Dentro dessa tag temos a tag Text, que tem como objetivo apresentar o texto                 dentro do botão */}
        <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate('Login')}>
              <Text style={{ color: '#800000' }}>Fazer Login</Text>
        </TouchableOpacity>  







      {/* O trecho de código entre as linhas 73 e 75 tem como objetivo apresentar um botão
      por meio da tag TouchableOpacity, a partir desse botão o usuário poderá entrar no           aplicativo como visitante. Dentro dessa tag temos a tag Text, que tem como objetivo         apresentar o texto dentro do botão */}
      <TouchableOpacity onPress={ ()=> navigation.navigate('Home')}>
        <Text style={{ marginTop: 50 }}>Entrar como visitante</Text> 
      </TouchableOpacity>
     
      </View>     
  );
}

