import React, { useState }  from 'react';
import { styles } from './style.js';
import { TouchableOpacity, TextInput,View,Text} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Header from "../../Componentes/Header";
import PassMeter from "react-native-passmeter";


{/*O trecho de código da linha 10 a 12 está relacionado a força da senha que é utilizado para medir a dificuldade da senha do usuário.*/}
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

  {/*Nome: validar.*/}
  {/*Parametros: Nenhum.*/}
  {/*Funcionalidade: A função validar retornar a validação das informações fornecidas pelo usuário.*/}
  const validar = () => {
    let error = false
  
    {/*O trecho de código da linha 47 a 52 representa a validação do email do usuário.*/}
    setErrorEmail(null)
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!regexEmail.test(String(email).toLowerCase())){
      setErrorEmail("Preencha seu e-mail corretamente")
      error = true
    }

    {/*Nome: cpfCalculo.*/}
    {/*Parametros: qtdNum, cpfNumber, increment.*/}
    {/*Funcionalidade: A função cpfCalculo retorna basicamente a multiplicação dos dígitos com os descrementos que está relacionado a validação do CPF.*/}
    function cpfCalculo(qtdNum, cpfNumber, increment) {
      var valor = cpfNumber.substr(0, qtdNum), soma2 = 0
      for(let i=0; i<valor.length; i++) {
        soma2 += parseInt(valor[i]) * increment
        increment--;
      }
      return soma2
    } 

    {/*Nome: somaDigitos.*/}
    {/*Parametros: soma*/}
    {/*Funcionalidade: A função somaDigitos retorna basicamente outra parte da validação do CPF do usuário.*/}
    function somaDigitos(soma) {
      var result = (soma * 10) % 11
      return String(result)
    }

    {/*O trecho de código da linha 75 a 105 representa toda a validação do CPF com a utilização das funções explicadas acima e, também faz algumas condições com o IF para saber se aquele CPF é válido ou inválido.*/}
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
    

    {/*O trecho de código da linha 103 a 108 representa a validação do nome do usuário.*/}
    setErrorNome(null)
    const regexNome= /[^a-zà-ú]/gi
    if (!regexNome.test(nome)) {
      setErrorNome("Por favor preencha todos os campos")
      error = true
    }

    {/*O trecho de código da linha 111 a 116 representa a validação da senha do usuário.*/}
    setErrorSenha(null)
    const regexSenha= /^[a-z0-9_-]/
    if (!regexSenha.test(senha)) {
      setErrorSenha("Por favor preencha todos os campos")
      error = true
    }

    return !error
  }

  {/*O trecho de código da linha 122 e 123 representa o hash da senha como uma forma de tornar mais seguro a senha do usuário.*/}
  const car = bcrypt.genSaltSync(10)
  const novaSenha = bcrypt.hashSync(senha, car)

  {/*O trecho de código da linha 126 a 132 é uma estrutura de dados com as informações do usuário.*/}
  const dados = [
   {'Nome': nome },
   {'CPF': cpf},
   {'Data de Nascimento': ''},
   {'Email': email},
   {'Senha': novaSenha}
  ]

  {/*Nome: salvarDados.*/}
  {/*Parametros: Nenhum.*/}
  {/*Funcionalidade: A função salvarDados retorna, caso todos os dados estejam validados, as informações do usuário e redireciona para a tela Login.*/}
  const salvarDados = () => {
    if(validar()) {
      console.log(dados)
      navigation.navigate('Login', {emailC: email, senha: novaSenha})
    }
  }

  {/*O trecho de código da linha 145 a 156 representa a data de nascimento do usuário.*/}
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

    {/*O trecho de código da linha 162 representa o header do app.*/}
    <Header />

    {/*O trecho de código da linha 165 a 248 tem como objetivo mostrar os campos de texto para o usuário digitar suas informações através da tag TextInput e embaixo de cada campo tem a sua respectiva validação através da tag Text. Além disso, na linha 224 a 230 é a força da senha que vai medir se a sequência que o usuário colocou, é seguro e logo no final tem o botão Cadastrar que tem o objetivo cadastrar os dados do usuário através da tag TouchableOpacity.*/}
    <View style={styles.subContainer}>


      <TextInput

          style={styles.textInput}
          keyboardType="default" 
          placeholder="Nome de usuário" 
          placeholderTextColor="#000" 
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
            placeholderTextColor="#000" 
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
          placeholderTextColor="#000" 
          onChangeText={value => {
            setCpf(value)
            setErrorCpf(null)
          }}
          returnKeyType="done" 
      />
      <Text style={{color: '#FF0000', fontSize: 10}}>{errorCpf}</Text>

      <TouchableOpacity style={{padding:5, margin:5, backgroundColor:"#C4C4C4", borderRadius:10, width:180}} onPress={showDatePicker}>
        <Text style={{color:"black", textAlign:"center", fontFamily: 'Roboto', fontSize: 16,  }}> Data de Nascimento </Text>
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
        placeholderTextColor="#000" 
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
            placeholderTextColor="#000" 
            
            
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

