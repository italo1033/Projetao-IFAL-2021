import React, { useState } from 'react';
import { styles } from './style.js';
import { View, Text, TouchableOpacity, Button, TextInput, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import ImageBackground from '../../Componentes/Header';
import { Ionicons } from '@expo/vector-icons';
import DateTimePickerModal from "react-native-modal-datetime-picker";


export function AlterarSenha({route, navigation}) {
  

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
                  }}> Alterar Senha </Text>
        </View>
      
      <View style={{width: 10, height: 30,}}>

      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          
          placeholder="Senha Atual"
          placeholderTextColor="black"
                 
      />
      <Text style={{color: '#FF0000', fontSize: 10, textAlign: 'center'}}></Text>

        <View style={styles.container}>
          <TextInput
            style={styles.textInput}
            placeholder="Nova senha"
            placeholderTextColor= 'black'
           
            returnKeyType="done"    
          />
        
        <TextInput 
          style={styles.textInput}
          keyboardType="number-pad" 
          placeholder="Confirme sua senha" 
          placeholderTextColor = 'black'
          returnKeyType="done" 
          
      />
      
  
        </View>

        
        <TouchableOpacity style={styles.buttonLogin}>
              <Text style={{ 
                              fontSize: 15,
                              color:'#8B0000',
                              fontWeight:"bold",
                              }}>Salvar</Text>
        </TouchableOpacity>

            
      </View>     
    </View>
  );
}
