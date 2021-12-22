import React, { useState }  from 'react';
import { styles } from './style.js';
import { TouchableOpacity, TextInput,View,Text} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Header from "../../Componentes/Header";
import PassMeter from "react-native-passmeter";



const MAX_LEN = 15,
  MIN_LEN = 6,
  PASS_LABELS = ["Muito Fraca", "Fraca", "Razoável", "Forte", "Segura"];

import bcrypt from 'react-native-bcrypt';

export function Cadastro({navigation}) {

  //Calendario
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

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
  const [senha, setSenha] = useState('')
  const [errorSenha, setErrorSenha] = useState('')

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
    function cpfCalculo(qtdNum, cpfNumber, increment) {
      var valor = cpfNumber.substr(0, qtdNum), soma2 = 0
      for(let i=0; i<valor.length; i++) {
        soma2 += parseInt(valor[i]) * increment
        increment--;
      }
      return soma2
    } 

    function somaDigitos(soma) {
      var result = (soma * 10) % 11
      return String(result)
    }

    setErrorCpf(null)
    const regexCPF =/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/
    if(!regexCPF.test(cpf)) {
      setErrorCpf("Preencha seu CPF corretamente")
      error = true
    } else {
      if(regexCPF.test(cpf)){
        if(cpf != null) {
          var cpfNumber = cpf.replace(/\.|-/gm,'')
          var cpfNumeros = cpfCalculo(9, cpfNumber, 10)
          var cpfNumeros2 = cpfCalculo(10, cpfNumber, 11)
      
          var result1  = somaDigitos(cpfNumeros)
          var result2 = somaDigitos(cpfNumeros2)
  
          var result3 = result1 + result2
          const cpfF = cpfNumber.substr(9, 2)
  
          if(result3 != cpfF) {
            setErrorCpf("CPF Inválido")
            error = true
          } else {
            setErrorCpf(null)
          }
  
        } else {
          setErrorCpf("Preencha seu CPF")
          error = true
        }
      }
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

  const car = bcrypt.genSaltSync(10)
  const novaSenha = bcrypt.hashSync(senha, car)


  const dados = [
   {'Nome': nome },
   {'CPF': cpf},
   {'Data de Nascimento': ''},
   {'Email': email},
   {'Senha': novaSenha}
  ]

  const salvarDados = () => {
    if(validar()) {
      console.log(dados)
      navigation.navigate('Login', {emailC: email, senha: novaSenha})
    }
  }

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
      setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
      console.warn("A date has been picked: ", date);
      hideDatePicker();
  };

  return (
    <View style={styles.isBackgroundGeneral}>

    <Header />
    <View style={styles.subContainer}>


      <TextInput

          style={styles.textInput}
          keyboardType="default" 
          placeholder="Digite seu Nome" 
          onChangeText={value => {
            setNome(value)
            setErrorNome(null)
          }}
          returnKeyType="done" 
      />
      <Text style={{color: '#FF0000', fontSize: 10}}>{errorNome}</Text>

       <TextInput
            style={styles.textInput}
            placeholder="Digite seu Email"
            onChangeText={value => {
                setEmail(value)
                setErrorEmail(null)
            }}        
        />
        <Text style={{color: '#FF0000', fontSize: 10}}>{errorEmail}</Text>
      
      <TextInput 
          style={styles.textInput}
          keyboardType="number-pad" 
          placeholder="Digite seu CPF" 
          onChangeText={value => {
            setCpf(value)
            setErrorCpf(null)
          }}
          returnKeyType="done" 
      />
      <Text style={{color: '#FF0000', fontSize: 10}}>{errorCpf}</Text>

      <TouchableOpacity style={{padding:5, margin:5, backgroundColor:"#C4C4C4", borderRadius:10, width:180}} onPress={showDatePicker}>
        <Text style={{color:"gray", textAlign:"center"}}> Data de Nascimento </Text>
      </TouchableOpacity>

      <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
      />
      <TextInput
        style={styles.textInput}
        placeholder = "Digite sua senha"
        maxLength={10}
        secureTextEntry
        onChangeText={senha => setSenha(senha)}
      />
      <PassMeter
        showLabels
        password={senha}
        maxLength={MAX_LEN}
        minLength={MIN_LEN}
        labels={PASS_LABELS}
      />
      <Text style={{color: '#FF0000', fontSize: 10}}>{errorSenha}</Text>

      <TextInput
            style={styles.textInput}
            
            placeholder="Confirme sua Senha"
            
            
            returnKeyType="done"    
      />
      
      <Text style={{color: '#FF0000', fontSize: 10}}>{errorSenha}</Text>

          <TouchableOpacity  style={styles.button} onPress={() => salvarDados()}>
          <Text style={{color:"#8B0000", fontWeight:"bold"}}> Cadastrar </Text>
      </TouchableOpacity>
    </View>
  </View>
  );
}

