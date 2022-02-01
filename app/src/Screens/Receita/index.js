import * as React from 'react';
import { styles } from './style.js';
import { View, Text , TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Header as HeaderRNE, HeaderProps, Icon } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

import Category from '../../Componentes/Category';

export function Receita({navigation}) {
  
  return (
    <View style={styles.isBackgroundGeneral}>

         <View style={styles.headerContainer}>
                  <Text style={{
                              fontFamily: 'Salsa_400Regular',
                              fontSize: 25,
                              color:'#8B0000',
                              fontWeight:"bold",
                              textAlign: "center"
                  }}> Receita </Text>
                </View>
                <View style={{alignItems: 'center'}}>
  
    </View>
      
      
    <View style={{alignItems:"center"}}>
      <View style={styles.frameRecipe}>
          <Image style={{ width: 313, height: 150, borderRadius: 20}} source={require('../../Img/mousse.jpeg')}/>
          <View style={styles.favorite}>
            <TouchableOpacity style={{alignItems:'center',justifyContent:"center", marginTop:3}}>
             <Ionicons name="heart" color="red" size={24}/>
            </TouchableOpacity>
          </View>
        </View>
    </View>

    <Text style={{ color: '#000', fontSize: 15, marginLeft: 17, fontWeight:"bold", marginTop: 5  }}>Mousse de Maracujá</Text>

    <View style={{marginLeft:8,flexDirection:"row", alignItems:"flex-end", borderBottomWidth: 1}}>
      <TouchableOpacity style={{marginLeft:10, flexDirection: 'row'}}>
                <Ionicons name="star-outline" color="#000" size={18}/>
      </TouchableOpacity>
      <TouchableOpacity style={{marginLeft:10, flexDirection: 'row'}}>
                <Ionicons name="star-outline" color="#000" size={18}/>
      </TouchableOpacity>
      <TouchableOpacity style={{marginLeft:10, flexDirection: 'row'}}>
                <Ionicons name="star-outline" color="#000" size={18}/>
      </TouchableOpacity>
      <TouchableOpacity style={{marginLeft:10, flexDirection: 'row'}}>
                <Ionicons name="star-outline" color="#000" size={18}/>
      </TouchableOpacity>
      <TouchableOpacity style={{marginLeft:10, flexDirection: 'row'}}>
                <Ionicons name="star-outline" color="#000" size={18}/>
      </TouchableOpacity>
      
    </View>

    <View>
    <Text style={{ color: '#000', fontSize: 18,marginLeft:17,marginTop:10, fontWeight:"bold" }}>Ingredientes</Text>

    <View style={{ flexDirection: 'row' }}>
     <Text style={{ color: '#000', fontSize: 14,marginLeft:17,marginBottom:5,marginTop:5, }}>6 Porções</Text>

     
     {/*Botões de MAIS e MENOS*/}
     
     <View style={styles.buttonMoreLess}>
        <View>
          <TouchableOpacity style={styles.buttonMore}>
              <Ionicons name="add" color="#000" size={18}/>
            </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity style={styles.buttonLess}>
            <Ionicons name="remove" color="#000" size={18}/>
          </TouchableOpacity>
        </View>
     </View>
     
    </View>
    </View>



  <View style={{borderBottomWidth:1}}>
      <View style={{marginLeft:17,marginBottom:10}}>
          <Text style={styles.ingredientes}>1 lata de leite condensado</Text>
          <Text style={styles.ingredientes}>1 lata de suco de Maracujá</Text>
          <Text style={styles.ingredientes}>1 lata de creme de leite</Text>
      </View>
  </View>

    
    
    
    <View style={{borderBottomWidth:1}}>
        <Text style={styles.containerMododePreparo}>Modo de Preparo</Text>
        <Text style={styles.mododePreparo}>
            -Em um liquidificador, bata o Leite MOÇA, o NESTLÉ
            Creme de Leite, o suco de maracujá e a gelatina. 
            Coloque em taças
            individuais. Leve à geladeira até ficar 
            firme, por cerca de 2 horas. Sirva.
        </Text>
    </View>


    {/*Tempo e dificuldade*/}
    <View style={{alignItems:"center",marginTop:10}}>
        <View style={{flexDirection:"row"}}>
          <Text style={styles.tempoEdificuldade}>Tempo - </Text>
          <Text style={styles.tempoEdificuldade}>Dificuldade</Text>
        </View>
        <View style={{flexDirection:"row"}}>
          <Text style={styles.tempoEdificuldade}>5min    -    </Text>
          <Text style={styles.tempoEdificuldade}>Fácil</Text>
        </View>
    </View>
    </View>
  );
}
