import React, { useState }  from 'react';
import { styles } from './style.js';
import { TouchableOpacity, View, Button, Image, StyleSheet } from 'react-native';
import { Input, Text } from 'react-native-elements';
import * as Facebook from "expo-facebook";



export function Cadastro({navigation}) {

  const [user, setUser] = useState(null);

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

  //email
  const [email, setEmail] = useState(null)
  const [errorEmail, setErrorEmail] = useState(null)

  //picker
  const [value, setValue] = React.useState('first');

  //CPF
  const [cpf, setCpf] = useState(null)
  const [errorCpf, setErrorCpf] = useState(null)

  //Nome
  const [nome, setNome] = useState(null)
  const [errorNome, setErrorNome] = useState(null)

  //Senha
  const [senha, setSenha] = useState(null)
  const [errorSenha, setErrorSenha] = useState(null)

  const validar = () => {
    let error = false

   

    // Validando Email
    setErrorEmail(null)
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!regexEmail.test(String(email).toLowerCase())){
      setErrorEmail("Preencha seu e-mail corretamente")
      error = true
    }

  // Validando CPF
    setErrorCpf(null)
    const regexCPF =/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/
    if (!regexCPF.test(cpf)){
      setErrorCpf("Preencha seu CPF corretamente")
      error = true
    }
    

    // validando Nome
    setErrorNome(null)
    const regexNome= /[^a-zà-ú]/gi
    if (!regexNome.test(nome)) {
      setErrorNome("Por favor preencha todos os campos")
      error = true
    }

    // validando Senha
    setErrorSenha(null)
    const regexSenha= /^[a-z0-9_-]/
    if (!regexSenha.test(senha)) {
      setErrorSenha("Por favor preencha todos os campos")
      error = true
    }

    return !error
  }

  const salvarDados = () => {
    if(validar()) {
      console.log("Salvou")
    }
  }


  return (
    <View style={styles.isBackgroundGeneral}>

      {/* Italo */}
      <Text>Nome:</Text>
      <Input
          keyboardType="default" 
          placeholder="Maria dos Santos" 
          onChangeText={value => setNome(value)}
          returnKeyType="done" 
          errorMessage={errorNome}
      />

      {/* Italo */}
      <Text>CPF:</Text>
      <Input 
          keyboardType="number-pad" 
          placeholder="142.832.344-24" 
          onChangeText={value => setCpf(value)}
          returnKeyType="done" 
          errorMessage={errorCpf}
      />

      {/*Kenysson*/}
      <Text>Email:</Text>
      <Input
            placeholder="receitas12@gmail.com"
            onChangeText={value => {
                setEmail(value)
                setErrorEmail(null)
            }}
            
            errorMessage={errorEmail}        
        />

      <Text>Senha:</Text>
      <Input
            placeholder="Digite sua senha"
            onChangeText = {value => {
              setSenha(value)
            }}
            returnKeyType="done"
            errorMessage={errorSenha}      
        />

    <TouchableOpacity style={styles.button} onPress={() => salvarDados()}>
        <Text style={{color:"#fff"}}> Cadastrar </Text>
    </TouchableOpacity>

    <View style={styless.container}>
      {user ? (
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Home')}>
          <Text style={{color:"#fff"}}> Home </Text>
        </TouchableOpacity>
      ) : (
        <Button title="Login com facebook" onPress={signUpFacebook} />
      )}
    </View>

    
    
    </View>
  );
}

const styless = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    alignItems: "center",
    justifyContent: "center",
  },
  fotoContainer: {},
  image: { width: 200, height: 200 },
  text: { fontSize: 18, textAlign: "center" },
});

