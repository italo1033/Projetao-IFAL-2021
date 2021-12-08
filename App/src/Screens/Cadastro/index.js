import React, { useState }  from 'react';
import { styles } from './style.js';
import { TouchableOpacity, View } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';


export function Cadastro({navigation}) {

  const [ validationContato, setValidationContato ] = useState(null);
  const [ contato, setContato ] = useState(null);

  const validar = () => {
    let error = false
    setValidationContato(null)

    const regex = /^\(\d{2}\) \d{4,5}-\d{4}$/gi;
    if(!regex.test(contato)) {
      setValidationContato("Preencha seu contato")
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

      <Button 
      title="Cadastrar"
      size={15}

      onPress={() => salvarDados()}
      />


    <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Login')}>
        <Text style={{color:"#fff"}}> Tela Login </Text>
    </TouchableOpacity>
    
    </View>
  );
}

