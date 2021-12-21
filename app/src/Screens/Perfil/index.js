import React, { useState } from 'react';
import { styles } from './style.js';
import { View, Text, TouchableOpacity, Button, TextInput, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import ImageBackground from '../../Componentes/Header';
import { Ionicons } from '@expo/vector-icons';


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
      <View>
        
        <Ionicons style={{marginTop: 10}} name='person' size={100}/>
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          
          placeholder="Nome"
          placeholderTextColor="black"
                 
      />
      <Text style={{color: '#FF0000', fontSize: 10, textAlign: 'center'}}></Text>

        <View style={styles.container}>
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            placeholderTextColor= 'black'
           
            returnKeyType="done"    
          />
        
          
        </View>

        

        <TouchableOpacity style={styles.buttonLogin} onPress={() => isLogIn()}>
              <Text style={{ 
                              fontSize: 15,
                              color:'#8B0000',
                              fontWeight:"bold",
                              }}>Alterar senha</Text>
        </TouchableOpacity>

            
      </View>     
    </View>
  );
}
