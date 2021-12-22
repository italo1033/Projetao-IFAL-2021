import * as React from 'react';
import { styles } from './style.js';
import { View, Text , TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Header as HeaderRNE, HeaderProps, Icon } from 'react-native-elements';

import Category from '../../Componentes/Category';

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

    <View style={{ flexDirection: 'row' }}>
      <Category type="Doces" icon={require('../../Img/Icon/doces.png')}/>
      <Category type="Bolos" icon={require('../../Img/Icon/bolo.png')}/>
      <Category type="Massas" icon={require('../../Img/Icon/massas.png')}/>
      <Category type="Salgados" icon={require('../../Img/Icon/salgados.png')}/>
      <Category type="Bebidas" icon={require('../../Img/Icon/bebidas.png')}/>
    </View>

    <View style={{ flexDirection: 'row' }}> 
      <View>   
        <View style={styless.frameRecipe}>
          <Image style={{ width: 150, height: 100, borderRadius: 20 }} source={require('../../Img/mousse.jpeg')}/>
          <View style={styless.favorite}>
            <TouchableOpacity>
              <Image style={{ width: 17, height: 17, marginTop: 8, marginLeft: 6}} source={require('../../Img/Icon/coracao.png')}/>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{ fontSize: 15, marginLeft: 7}}>Mousse de Maracujá</Text>
      </View>

      <View>
        <View style={styless.frameRecipe}>
          <Image style={{ width: 150, height: 100, borderRadius: 20 }} source={require('../../Img/nhoque.jpeg')}/>
          <View style={styless.favorite}>
            <TouchableOpacity>
              <Image style={{ width: 17, height: 17, marginTop: 8, marginLeft: 6}} source={require('../../Img/Icon/coracao.png')}/>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{ fontSize: 15, marginLeft: 4 }}>Nhoque de Batata Doce</Text>
      </View>
    </View>
      <View style={{ flexDirection: 'row' }}>
        <View>
          <View style={styless.frameRecipe}>
            <Image style={{ width: 150, height: 100, borderRadius: 20 }} source={require('../../Img/esfiha.jpeg')}/>
            <View style={styless.favorite}>
              <TouchableOpacity>
                <Image style={{ width: 17, height: 17, marginTop: 8, marginLeft: 6}} source={require('../../Img/Icon/coracao.png')}/>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={{ fontSize: 15, marginLeft: 60 }}>Esfiha</Text>
        </View>
        
        <View>
          <View style={styless.frameRecipe}>
            <Image style={{ width: 150, height: 100, borderRadius: 20 }} source={require('../../Img/coquitel.jpeg')}/>
            <View style={styless.favorite}>
              <TouchableOpacity>
                <Image style={{ width: 17, height: 17, marginTop: 8, marginLeft: 6}} source={require('../../Img/Icon/coracao.png')}/>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={{ fontSize: 15, marginLeft: 20 }}>Coquitel de Abacaxi</Text>
        </View>
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

  frameRecipeDay: {
    width: 313,
    height: 150,
    borderRadius: 20,
    marginTop: 20,
    marginLeft: 10,
    backgroundColor: '#D3D3D3'
  },

  frameRecipe: {
    width: 150,
    height: 100,
    borderRadius: 20,
    marginTop: 20,
    marginLeft: 5,
    backgroundColor: '#D3D3D3'
  },

  favorite: {
    width: 30, 
    height: 30,
    position: 'absolute',
    marginLeft: 110,
    marginTop: 10, 
    backgroundColor: '#FFFAFA', 
    borderRadius: 30
  }
});