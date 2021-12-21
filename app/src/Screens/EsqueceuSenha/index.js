import React, { useState }  from 'react';
import { styles } from './style.js';
import { TouchableOpacity, TextInput,View,Text} from 'react-native';
import {Button } from 'react-native-elements';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import ImageBackground from '../../Componentes/Header';



export function EsqueceuSenha({navigation}) {

  //Calendario
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  //email
  const [email, setEmail] = useState(null)
  const [errorEmail, setErrorEmail] = useState(null)

  //picker
  const [value, setValue] = React.useState('first');


  const validar = () => {
    let error = false

  
    // Validando Email
    setErrorEmail(null)
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!regexEmail.test(String(email).toLowerCase())){
      setErrorEmail("Preencha seu e-mail corretamente")
      error = true
    }

    return !error
  }

  // var bcrypt = require('bcryptjs');
  // const car = bcrypt.getSalt(10)
  // const novaSenha = bcrypt.hash(senha, car)

  const dados = [
    {'Data de Nascimento': ''},
    {'Email': email},
    // {'Senha': novaSenha}
  ]

  const salvarDados = () => {
    if(validar()) {
      console.log(dados)
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
         <ImageBackground />
      <View>
        <Text style={styles.text}>Esqueci minha senha {"\n"}{"\n"}<Text>Insira seu e-mail e data de nascimento cadastrado e receberá um link para alterar sua senha</Text></Text>
        <Text />
        
      </View>

       <TextInput
            style={styles.textInput}
            placeholder="Digite seu Email"
            placeholderTextColor="black"
            onChangeText={value => {
                setEmail(value)
                setErrorEmail(null)
            }}
            
            errorMessage={errorEmail}        
        />


      
        <TouchableOpacity style={{padding:5, margin:5, backgroundColor:"#C4C4C4", borderRadius:10, width:180}} onPress={showDatePicker}>
        <Text style={{color:"black", textAlign:"center", fontWeight:"bold"}}> Data de Nascimento </Text>
    </TouchableOpacity>

      <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
      />
       
     

    <TouchableOpacity  style={styles.button} onPress={() => salvarDados()}>
        <Text style={{color:"#8B0000", fontWeight:"bold"}}> Enviar </Text>
    </TouchableOpacity>
    
    
    </View>
  );
}

