import React, { useState }  from 'react';
import { styles } from './style.js';
import { TouchableOpacity, View } from 'react-native';
import { Input, Text, Button } from 'react-native-elements';
import DateTimePickerModal from "react-native-modal-datetime-picker";


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
    if (!regexCPF.test(cpf)){
      if(cpf != null) {
        var cpfNumber = cpf.replace(/\.|-/gm,'')
        var cpfNumeros = cpfCalculo(9, cpfNumber, 10)
        var cpfNumeros2 = cpfCalculo(10, cpfNumber, 11)
    
        var result1  = somaDigitos(cpfNumeros)
        var result2 = somaDigitos(cpfNumeros2)

        var result3 = result1 + result2
        const cpfF = cpfNumber.substr(9, 2)

        if(result3 != cpfF || !regexCPF.test(cpf)) {
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
            secureTextEntry={true}
            placeholder="Digite sua senha"
            onChangeText = {value => {
              setSenha(value)
            }}
            returnKeyType="done"
            errorMessage={errorSenha}      
      />

      <Button title="Show Date Picker" onPress={showDatePicker} />
      <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
      />

    <TouchableOpacity 
      style={styles.button} 
      onPress={() => salvarDados()}
      data-testid="form-btn"
    >
        <Text style={{color:"#fff"}}> Cadastrar </Text>
    </TouchableOpacity>
    
    </View>
  );
}