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
      <View style={{width: 10, height: 30,}}>

      </View>
      <View style={styles.container}>

        <View style={styles.icon}>
          <TouchableOpacity  style={styles.buttonInput}><Image source={require('../../Img/Icon/lapis.png')}/></TouchableOpacity>
          <TextInput
            style={styles.textInput}
            placeholder="Nome"
            placeholderTextColor="black"       
        />
        </View>
      
        <View style={styles.icon}>
          <TouchableOpacity  style={styles.buttonInput}><Image source={require('../../Img/Icon/lapis.png')}/></TouchableOpacity>
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            placeholderTextColor= 'black'
            
            returnKeyType="done"    
          />

        </View>
        
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
