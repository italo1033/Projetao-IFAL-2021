import * as React from 'react';
import { styles } from './style.js';
import { View, Text , TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Icon } from 'react-native-elements';
import Category from '../../Componentes/Category';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Perfil} from '../Perfil/index';
import {Criar} from '../Criar/index';



const Tab = createBottomTabNavigator();

export function Assinatura({navigation}) {
  

  return(
    <View>

{/*O trecho de código da linha 16 a 24 está relacionado ao títula da página "CRIAR RECEITAS".*/}
    <View style={styles.headerContainer}>
                  <Text style={{
                              fontFamily: 'Salsa_400Regular',
                              fontSize: 20,
                              color:'#8B0000',
                              fontWeight:"bold",
                              textAlign: "center"
                  }}> Assinatura </Text>
    </View>

    <View>
      <Text style={{
                    fontFamily: 'Salsa_400Regular',
                    fontSize: 15,
                    fontWeight:"bold",
                    textAlign: "center",
                    
                }}> Aproveite ao máximo o Receitas de Geladeira com assinatura Premium </Text>
    </View>


{/*O trecho de código da linha 26 a 30 está relacionado ao ícone usado para adicionar uma imagem na receita.*/}
      <View style={styless.frameRecipeDay}>
        <Text style={{textAlign: 'start', justifyContent: 'start', alignItems: 'center', fontWeight: "bold", fontSize: 15, marginLeft: 15, marginTop: 15 }}> Visitantes </Text>
        <Text style={{textAlign: 'center', justifyContent: 'center', alignItems: 'center', fontSize: 14, marginLeft: 15, marginTop: 15 }}> Anúncios entre as receitas - Despensa, Criar Receitas e Favoritos limitados a 10 itens </Text>
        <View style={{alignItems: 'center',}}>
          <TouchableOpacity style={styles.buttonLogin}>
                  <Text style={{ 
                                  fontSize: 15,
                                  fontWeight:"bold",
                                  }}>CADASTRE-SE</Text>
            </TouchableOpacity>
        </View>
      </View>

      <View style={styless.frameRecipeDay}>
        <Text style={{textAlign: 'start', justifyContent: 'start', alignItems: 'center', fontWeight: "bold", fontSize: 15, marginLeft: 15, marginTop: 15 }}> Usuários Cadastrados </Text>
        <Text style={{textAlign: 'center', justifyContent: 'center', alignItems: 'center', fontSize: 14, marginLeft: 15, marginTop: 15 }}> Anúncios entre as receitas - Despensa, Criar Receitas e Favoritos limitados a 50 itens </Text>
        <View style={{alignItems: 'center',}}>
          <TouchableOpacity style={styles.buttonLogin}>
                  <Text style={{ 
                                  fontSize: 15,
                                  fontWeight:"bold",
                                  }}>SEJA PREMIUM</Text>
            </TouchableOpacity>
        </View>
      </View>

      <View style={styless.frameRecipeDay}>
        <Text style={{textAlign: 'start', justifyContent: 'start', alignItems: 'center', fontWeight: "bold", fontSize: 15, marginLeft: 15, marginTop: 15 }}> Premium - A partir de R$50,00 mensais </Text>
        <Text style={{textAlign: 'center', justifyContent: 'center', alignItems: 'center', fontSize: 14, marginLeft: 15, marginTop: 15 }}> Receitas de Geladeira sem anúncios - Acesso ilimitado a Despensa, Criar Receitas e Favoritos - Cancele quando quiser </Text>
        <View style={{alignItems: 'center',}}>
          <TouchableOpacity style={styles.buttonLogin}>
                  <Text style={{ 
                                  fontSize: 15,
                                  fontWeight:"bold",
                                  }}>SEJA PREMIUM</Text>
            </TouchableOpacity>
        </View>
      </View>

      

    

    </View>
  );
  
//{/*O trecho de código da linha 91 a 129 está relacionado as estilizações das tags usadas na página.*/}
}
  const styless = StyleSheet.create({

  frameRecipeDay: {
    width: '95%',
    height: 170,
    borderRadius: 15,
    marginLeft: 10,
    backgroundColor: '#FFFFA1',
    
    marginTop: 15
  },
});
