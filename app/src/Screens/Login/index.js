import React, { useState } from 'react';
import { styles } from './style.js';
import { View, Text, TouchableOpacity, Button, TextInput, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Icon from 'react-native-vector-icons/Fontisto';
import ImageBackground from '../../Componentes/Header';
import bcrypt from 'bcryptjs';

export function Login({route, navigation}) {

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
      />
      <Text style={{color: '#FF0000', fontSize: 10, textAlign: 'center'}}>{errorEmailLogin}</Text>

        <View style={styles.iconSenha}>
          <TextInput
            style={styles.textInput}
            secureTextEntry={hideText}
            placeholder="Digite sua senha"
            placeholderTextColor= 'black'
            onChangeText = {value => {
              setSenhaLogin(value)
              setErrorSenhaLogin(null)
            }}
            returnKeyType="done"    
          />
        
          <TouchableOpacity style={styles.iconEye} onPress={() => setHideText(!hideText)}>
            { hideText ? 
              <Ionicons name="eye" color="#000" size={25}/>
              :
              <Ionicons name="eye-off" color="#000" size={25}/>
            }
          </TouchableOpacity>
        </View>

        <Text style={{color: '#FF0000', fontSize: 10, textAlign: 'center'}}>{errorSenhaLogin}</Text>

        <TouchableOpacity style={styles.buttonLogin} onPress={() => isLogIn()}>
              <Text style={{ color: '#800000' }}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.textSenha} onPress={()=>navigation.navigate('EsqueceuSenha')}>
          <Text style={{ textAlign: 'center' }}> Esqueceu sua senha? </Text>
        </TouchableOpacity>
  
        <TouchableOpacity onPress={()=> navigation.navigate('Cadastro')}>
          <Text style={{ textAlign: 'center', marginTop: 40 }}>Não tem uma conta? Faça seu cadastro.</Text>
        </TouchableOpacity>      
      </View>     
    </View>
  );
}

