import React, { useState } from 'react';
import { styles } from './style.js';
import { View, Text, TouchableOpacity, Button, TextInput, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import ImageBackground from '../../Componentes/Header';
import { Ionicons } from '@expo/vector-icons';
import DateTimePickerModal from "react-native-modal-datetime-picker";



export function Perfil({route, navigation}) {
  

  return (
    <View style={styles.isBackgroundGeneral}>
      
      {/* O trecho de código entre as linhas 21 e 32 tem como objetivo apresentar o header
      da tela, por meio das tags View, TouchableOpacity, Icon e Text. A tag 
      TouchableOpacity juntamente com a tag Icon irá apresentar um botão para que o usuário
      possa acessasr o menu, já a tag Text irá apresentar um texto. */}
      <View style={styles.headerContainer}>
            <TouchableOpacity style = {{marginLeft: 15}}>
                <Icon name= "menu" color= "#8b0000" />
              </TouchableOpacity>
                <Text style={{
                            fontFamily: 'Salsa_400Regular',
                            fontSize: 25,
                            color:'#8B0000',
                            fontWeight:"bold",
                            textAlign: "center"
                }}> Perfil </Text>
      </View>

      {/* O trecho de código entre as linhas 38 e 47 tem como objetivo apresentar um espaço 
      onde o usuário possa carregar uma foto para seu perfil, essa foto também será 
      apresentada nesse mesmo local, foram utilizadas as tags View e Ioniicons da 
      biblioteca vector-icons. */}
      <View style={{
        width: 150,
        height: 150,
        borderRadius: 150,
        backgroundColor: '#D3D3D3',
        padding: 1,
        alignItems: 'center'}}
      >
        <Ionicons style={{marginTop: 10}} name='person' size={100}/>
      </View>
      
      {/* O trecho de código na linha 51 tem como objetivo apresentar um espaço através da 
      tag View com a estilização de largura e altura com Width e Height. */}
      <View style={{width: 10, height: 30,}} />

      {/* O trecho de código entre as linhas 57 e 65 tem como objetivo apresentar um espaço 
      onde o usuário possa digitar seu Nome, através das tags View, TouchableOpacity, Image 
      e TextInput. A partir da tag TextInput é gerado um espaço para que o usuário possa 
      digitar. */}
      <View style={styles.container}>
        <View style={styles.icon}>
          <TouchableOpacity  style={styles.buttonInput}><Image source={require('../../Img/Icon/lapis.png')}/></TouchableOpacity>
          <TextInput
            style={styles.textInput}
            placeholder="Nome"
            placeholderTextColor="black"       
        />
        </View>
      
       
      {/* O trecho de código entre as linhas 71 e 79 tem como objetivo apresentar um campo
      de texto por meio da tag TextInput, juntamente com um icone através das tags Image e
      TouchableOpacity, para que o usuário ossa digitar seu respecitivo e-mail.*/}
      <View style={styles.icon}>
        <TouchableOpacity  style={styles.buttonInput}><Image source={require('../../Img/Icon/lapis.png')}/></TouchableOpacity>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          placeholderTextColor= 'black'
          returnKeyType="done"    
        />
      </View>

      {/* O trecho de código entre as linhas 84 e 93 tem como objetivo apresentar um campo
      de texto por meio da tag TextInput, juntamente com um icone através das tags Image e
      TouchableOpacity, para que o usuário ossa digitar seu respecitivo CPF.*/}  
      <View style={styles.icon}>
        <TouchableOpacity  style={styles.buttonInput}><Image source={require('../../Img/Icon/lapis.png')}/></TouchableOpacity>
        <TextInput 
          style={styles.textInput}
          keyboardType="number-pad" 
          placeholder="CPF" 
          placeholderTextColor = 'black'
          returnKeyType="done" 
      />
      </View>
        
      {/* O trecho de código entre as linhas 98 e 104 tem como objetivo apresentar um botão
      por meio da tag TouchableOpacity, juntamente com a tag Text, que tem o objetivo de 
      apresentar um texto dentro do botão, para que o usuário possa acessasr a tela de 
      alterar senha. */}
      <TouchableOpacity style={styles.buttonLogin} onPress={()=> navigation.navigate('AlterarSenha')}>
            <Text style={{ 
                            fontSize: 15,
                            color:'#8B0000',
                            fontWeight:"bold"
                            }}>Alterar senha</Text>
      </TouchableOpacity>

      </View>  
    </View>
  );
}
