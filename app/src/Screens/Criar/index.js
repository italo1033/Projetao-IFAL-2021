import * as React from 'react';
import { styles } from './style.js';
import { View, Text , TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Icon } from 'react-native-elements';
import Category from '../../Componentes/Category';

export function Criar({navigation}) {
  

  return(
    <View>

{/*O trecho de código da linha 16 a 24 está relacionado ao títula da página "CRIAR RECEITAS".*/}
    <View style={styles.headerContainer}>
                  <Text style={{
                              fontFamily: 'Salsa_400Regular',
                              fontSize: 25,
                              color:'#8B0000',
                              fontWeight:"bold",
                              textAlign: "center"
                  }}> Criar Receitas </Text>
        </View>
{/*O trecho de código da linha 26 a 30 está relacionado ao ícone usado para adicionar uma imagem na receita.*/}
      <View style={styless.frameRecipeDay}>
        <Ionicons name='camera' size={100}/>
        <Text style={{textAlign: 'center', justifyContent: 'center', alignItems: 'center', fontWeight: "bold", fontSize: 15 }}> Adicionar foto </Text>
        
      </View>

{/*O trecho de código da linha 33 a 42 está relacionado a caixa de texto onde o usuário poderá adicionar o
nome da nova receita, por meio da tag TextInput*/}
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

{/*O trecho de código da linha 47 a 54 está relacionado a caixa de texto onde o usuário poderá adicionar os 
ingredientes da receita. Por meio da tag TextInput*/}
      <View style={{ flexDirection: 'row' }}>
        <TextInput
            style={styles.textInput}
            placeholder="Ingredientes"
            placeholderTextColor= 'black'
            returnKeyType="done"
        >
        </TextInput>

{/*O trecho de código da linha 57 a 59 está relacionado ao botão para adicionar mais ingredientes.Por meio da tag TouchableOpacity*/}
        <TouchableOpacity>
          <Ionicons style={{marginTop: 6}} name='add-circle-outline' size={30}/>
        </TouchableOpacity>

{/*O trecho de código da linha 63 a 75 está relacionado a caixa de texto onde o usuário poderá adicionar o
as etapas da receita.*/}
      </View>
      <View style={{marginTop: 30}}>
        <Text
            style={styles.textInput}
        >Modo de preparo</Text>

        <TextInput
            style={styles.textEtapa}
            placeholder="Adicionar etapa"
            placeholderTextColor= 'black'
            returnKeyType="done"    
          />
      </View>

{/*O trecho de código da linha 78 a 87 está relacionado ao botão usado pelo usuário para salvar a nova receita criado pelo mesmo.*/}
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
  
//{/*O trecho de código da linha 91 a 129 está relacionado as estilizações das tags usadas na página.*/}
}
  const styless = StyleSheet.create({
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
