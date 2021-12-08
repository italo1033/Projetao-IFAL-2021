import React, { useState }  from 'react';
import { styles } from './style.js';
import { TouchableOpacity, View } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';


export function Cadastro({navigation}) {


  //Contato
  const [ validationContato, setValidationContato ] = useState(null);
  const [ contato, setContato ] = useState(null);

  //email
  const [email, setEmail] = useState(null)
  const [errorEmail, setErrorEmail] = useState(null)

  //picler
  const [value, setValue] = React.useState('first');


  const validar = () => {
    let error = false
    setValidationContato(null)

    const regex = /^\(\d{2}\) \d{4,5}-\d{4}$/gi;
    if(!regex.test(contato)) {
      setValidationContato("Preencha seu contato")
      error = true
    }


    setErrorEmail(null)
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!re.test(String(email).toLowerCase())){
      setErrorEmail("Preencha seu e-mail corretamente")
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

      {/*Lara Fernanda*/}
      <Text>Contato:</Text>
      <Input 
      keyboardType="phone-pad" 
      placeholder="Contato" 
      onChangeText={value => {
        setContato(value)
        setValidationContato(null)
      }}
      returnKeyType="done" 
      errorMessage={validationContato}/>  
      
      {/*Lara Fernanda*/}
      <Text>Complemento:</Text>
      <Input 
      keyboardType="default" 
      placeholder="Complemento" 
      returnKeyType="done"/>

      {/*Kenysson*/}
      <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
        <View>
          <Text>Masculino</Text>
          <RadioButton value="first" />
        </View>
        <View>
          <Text>Feminino</Text>
          <RadioButton value="second" />
        </View>
      </RadioButton.Group>

      <Input
        placeholder="E-mail"
        onChangeText={value => {
            setEmail(value)
            setErrorEmail(null)
        }}
        keyboardType="email-address"
        errorMessage={errorEmail}        
        />


    <TouchableOpacity style={styles.button} onPress={() => salvarDados()}>
        <Text style={{color:"#fff"}}> Cadastrar </Text>
    </TouchableOpacity>
    
    </View>
  );
}

