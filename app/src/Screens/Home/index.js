import * as React from 'react';
import { styles } from './style.js';
import { View, Text , TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Header as HeaderRNE, HeaderProps, Icon } from 'react-native-elements';

import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';

import {Receitas} from '../Receitas/index';
import {Criar} from '../Criar/index';
import {Dispensa} from '../Dispensa/index';
import {Perfil} from '../Perfil/index';

export function Home({navigation}) {

  const drawer = createDrawerNavigator({
    Receitas,
    Criar,
    Dispensa,
    Perfil
  })

  return (
    <View style={styless.isBackgroundGeneral}>
      
      <View style={styless.headerContainer}>
        <TouchableOpacity style = {{marginLeft: 15}} onPress={() => drawer()}>
          <Icon name= "menu" color= "#8b0000" />
        </TouchableOpacity>

        <TouchableOpacity style ={{marginLeft: 220}}>
          <Icon name="search" color="#8b0000" />
        </TouchableOpacity>

        <TouchableOpacity
          style={{ marginLeft: 10 }}
        >
          <Icon type="antdesign" name="heart" color="red" />
        </TouchableOpacity>
    </View>
    
    <Text style={{ color: '#000', fontSize: 20, marginLeft: 15 }}>Receita do Dia</Text>

    <View style={styles.frameRecipeDay}>
      <Image style={{ width: 313, height: 150, borderRadius: 20}} source={require('../../Img/receita.png')}/>
    
    </View>
    <Text style={{ color: '#000', fontSize: 15, marginLeft: 17 }}>Panqueca de Frango</Text>
      

        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Login')}>
            <Text style={{color:"#fff"}}> Tela Login </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Dispensa')}>
            <Text style={{color:"#fff"}}> Tela Dispensa </Text>
        </TouchableOpacity>

        
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
    height: 150,
    borderRadius: 20,
    marginTop: 20,
    marginLeft: 10,
    backgroundColor: '#D3D3D3'
  }
});
