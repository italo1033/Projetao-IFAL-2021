import * as React from 'react';
import { styles } from './style.js';
import { View, Text , TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Icon } from 'react-native-elements';
import Category from '../../Componentes/Category';

export function Criar({navigation}) {
  

  return(
    <View>
    <View style={styles.headerContainer}>
                  <Text style={{
                              fontFamily: 'Salsa_400Regular',
                              fontSize: 25,
                              color:'#8B0000',
                              fontWeight:"bold",
                              textAlign: "center"
                  }}> Criar Receitas </Text>
        </View>
      <View style={styless.frameRecipeDay}>
        <Ionicons name='camera' size={100}/>
        <Text style={{textAlign: 'center', justifyContent: 'center', alignItems: 'center', fontWeight: "bold", fontSize: 15 }}> Adicionar foto </Text>
        
      </View>
      <View>
        <TextInput
            style={styles.textInput}
            placeholder="Nome da receita"
            placeholderTextColor= 'black'
            returnKeyType="done"
        >
          
        </TextInput>
        
      </View>
      <View style={styless.linha} />

      <View style={{ flexDirection: 'row' }}>
        <TextInput
            style={styles.textInput}
            placeholder="Ingredientes"
            placeholderTextColor= 'black'
            returnKeyType="done"
        >
        </TextInput>
        <TouchableOpacity>
          <Ionicons style={{marginTop: 6}} name='add-circle-outline' size={30}/>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 30}}>
        <Text
            style={styles.textInput}
        >
          Modo de preparo
        </Text>
        <TextInput
            style={styles.textEtapa}
            
            placeholder="Adicionar etapa"
            placeholderTextColor= 'black'
            
            returnKeyType="done"    
          />
      </View>
      <View style={{alignItems: 'center',}}>
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
  const styless = StyleSheet.create({
  headerContainer: {
    justifyContent: 'start',
    alignItems: 'start',
    backgroundColor: '#ffff00',
    marginBottom: 20,
    width: '100%',
    paddingVertical: 15,
    display: 'flex',
    flexDirection: 'row'
  },

  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },

  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
  },

  frameRecipeDay: {
    width: 313,
    height: 200,
    borderRadius: 7,
    marginLeft: 10,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },

  linha: {
    borderWidth: 1
  }
});
