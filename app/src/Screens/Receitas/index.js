import * as React from 'react';
import { styles } from './style.js';
import { View, Text , TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Header as HeaderRNE, HeaderProps, Icon } from 'react-native-elements';


export function Receitas({navigation}) {
  
  return (
    <View style={styless.isBackgroundGeneral}>
      
      <View style={styless.headerContainer}>
        <TouchableOpacity style = {{marginLeft: 15}} >
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

    <View style={styless.frameRecipeDay}>
      <Image style={{ width: 313, height: 150, borderRadius: 20}} source={require('../../Img/receita.png')}/>
    
    </View>
    <Text style={{ color: '#000', fontSize: 15, marginLeft: 17 }}>Panqueca de Frango</Text>

    <View style={styless.category}>
        <View>
          <TouchableOpacity>
            <View style={styless.category2}></View>
            <Text style={{ textAlign: 'center', marginLeft: 10 }}>Doces</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity>
            <View style={styless.category2}></View>
            <Text style={{ textAlign: 'center', marginLeft: 10 }}>Bolos</Text>
          </TouchableOpacity>
        </View>
      
        <View>
          <TouchableOpacity>
            <View style={styless.category2}></View>
            <Text style={{ textAlign: 'center', marginLeft: 10 }}>Massas</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity>
            <View style={styless.category2}></View>
            <Text style={{ textAlign: 'center', marginLeft: 10 }}>Salgados</Text>
          </TouchableOpacity>
        </View>
      
        <View>
          <TouchableOpacity>
            <View style={styless.category2}></View>
            <Text style={{ textAlign: 'center', marginLeft: 10 }}>Bebidas</Text>
          </TouchableOpacity>
        </View>
    </View>
      

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

  frameRecipeDay: {
    width: 313,
    height: 150,
    borderRadius: 20,
    marginTop: 20,
    marginLeft: 10,
    backgroundColor: '#D3D3D3'
  },

  category: {
    flexDirection: 'row',
    padding: 10,
    marginTop: 20
  },

  category2: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#D3D3D3',
    padding: 10,
    marginLeft: 10
  }
});