import * as React from 'react';
import { styles } from './style.js';
import { View, Text , TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Header as HeaderRNE, HeaderProps, Icon } from 'react-native-elements';

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
      <Image style={{ width: 300, height: 180, borderRadius: 20}} source={require('../../Img/mousse.jpeg')}/>
    </View>
    <Text style={{ color: '#000', fontSize: 15, marginLeft: 17, fontWeight:"bold"  }}>Mousse de Maracujá</Text>
    <View style={{flexDirection:"row", alignItems:"flex-end", borderBottomWidth:1}}>
    <TouchableOpacity style={{marginLeft:10}}>
              <Image style={{ width: 17, height: 18, marginTop: 8, marginLeft: 6}} source={require('../../Img/Icon/coracao.png')}/>
    </TouchableOpacity>
    <Text style={{ color: '#000', fontSize: 14 }}>123</Text>
    </View>

    <View >
    <Text style={{ color: '#000', fontSize: 18,marginLeft:17,marginTop:10, fontWeight:"bold" }}>Ingredientes</Text>
    <Text style={{ color: '#000', fontSize: 14,marginLeft:17,marginBottom:5,marginTop:5, }}>6 Porções</Text>
    </View>

    <View style={{borderBottomWidth:1}}>
     <View style={{marginLeft:17,marginBottom:10}}>
    <Text style={{ color: '#000', fontSize: 10 }}>1 lata de leite condensado</Text>
    <Text style={{ color: '#000', fontSize: 10 }}>1 lata de suco de Maracujá</Text>
    <Text style={{ color: '#000', fontSize: 10 }}>1 lata de creme de leite</Text>
    </View>
    </View>

    <View style={{borderBottomWidth:1,
    }}>
    <Text style={{ color: '#000',marginLeft:17,marginBottom:10,marginTop:10, fontSize: 18, fontWeight:"bold" }}>Modo de Preparo</Text>
    <Text style={{ color: '#000', fontSize: 10,marginLeft:17 ,marginBottom:10}}>-Em um liquidificador, bata o Leite MOÇA, o NESTLÉ Creme de Leite, o suco de maracujá e a gelatina. Coloque em taças individuais.</Text>

 <Text style={{ color: '#000', fontSize: 10 ,marginLeft:17,marginBottom:10}}>-Leve à geladeira até ficar firme, por cerca de 2 horas. Sirva.</Text>
    </View>

    <View style={{alignItems:"center",marginTop:10}}>
    <View style={{flexDirection:"row"}}>
    <Text style={{ color: '#000', fontSize: 14, fontWeight:"bold" }}>Tempo - </Text>
    <Text style={{ color: '#000', fontSize: 14 , fontWeight:"bold"}}>Dificuldade</Text>
    </View>
    

        <View style={{flexDirection:"row"}}>
    <Text style={{ color: '#000', fontSize: 14, fontWeight:"bold" }}>5min    -    </Text>
    <Text style={{ color: '#000', fontSize: 14, fontWeight:"bold" }}>Fácil</Text>
    </View>
    </View>
    </View>
  );
}
