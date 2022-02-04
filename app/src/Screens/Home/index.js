import * as React from 'react';
import { styles } from './style.js';
import { View, Text , TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Header as HeaderRNE, HeaderProps, Icon } from 'react-native-elements';

import Category from '../../Componentes/Category';

export function Home({navigation}) {
  
  return (
    /*No trecho de código da linha 12 a 28 tem como objetivo mostrar o header da tela, que apresenta o botão menu, o de pesquisar e o de coração através da tag TouchableOpacity, para que o usuário tenha acesso a outras telas, pesquisar receitas e adicionar como favorita, respectivamente*/
    <View style={styles.isBackgroundGeneral}>
      
      <View style={styles.headerContainer}>
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

    {/*No trecho de código da linha 31 tem como objetivo mostrar o título principal através da tag Text.*/}
    <Text style={{ color: '#000', fontSize: 20, marginLeft: 15 }}>Receita do Dia</Text>

    {/*No trecho de código da linha 34 a 36 tem como objetivo mostrar a receita principal do dia através da tag Image, para que o usuário possa visualizar a receita do dia. */}
    <View style={styles.frameRecipeDay}>
      <Image style={{ width: 313, height: 150, borderRadius: 20}} source={require('../../Img/receita.png')}/>
    </View>
    
    {/* No trecho de código da linha 38 tem como objetivo mostrar o nome da receita principal através da tag Text.*/}
    <Text style={{ color: '#000', fontSize: 15, marginLeft: 17 }}>Panqueca de Frango</Text>
    
    {/*No trecho de código da linha 42 a 48 tem como objetivo mostrar as categorias do app através do componente Category, para que o usuário possa selecionar suas opções de receita. */}
    <View style={{ flexDirection: 'row' }}>
      <Category type="Doces" icon={require('../../Img/Icon/doces.png')}/>
      <Category type="Bolos" icon={require('../../Img/Icon/bolo.png')}/>
      <Category type="Massas" icon={require('../../Img/Icon/massas.png')}/>
      <Category type="Salgados" icon={require('../../Img/Icon/salgados.png')}/>
      <Category type="Bebidas" icon={require('../../Img/Icon/bebidas.png')}/>
    </View>

    {/*No trecho de código da linha 51 a 100 tem como objetivo mostrar as receitas para o usuário através das tags TouchableOpacity e Image.*/}
    <View style={{ flexDirection: 'row' }}> 
      <View>   
        <TouchableOpacity style={styles.frameRecipe}>
          <Image style={{ width: 150, height: 100, borderRadius: 20 }} source={require('../../Img/mousse.jpeg')}/>
          <View style={styles.favorite}>
            <TouchableOpacity>
              <Image style={{ width: 17, height: 17, marginTop: 8, marginLeft: 6}} source={require('../../Img/Icon/coracao.png')}/>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <Text style={{ fontSize: 15, marginLeft: 7}}>Mousse de Maracujá</Text>
      </View>

      <View>
        <TouchableOpacity style={styles.frameRecipe}>
          <Image style={{ width: 150, height: 100, borderRadius: 20 }} source={require('../../Img/nhoque.jpeg')}/>
          <View style={styles.favorite}>
            <TouchableOpacity>
              <Image style={{ width: 17, height: 17, marginTop: 8, marginLeft: 6}} source={require('../../Img/Icon/coracao.png')}/>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <Text style={{ fontSize: 15, marginLeft: 4 }}>Nhoque de Batata Doce</Text>
      </View>
    </View>
    
      <View style={{ flexDirection: 'row' }}>
        <View>
          <TouchableOpacity style={styles.frameRecipe}>
            <Image style={{ width: 150, height: 100, borderRadius: 20 }} source={require('../../Img/esfiha.jpeg')}/>
            <View style={styles.favorite}>
              <TouchableOpacity>
                <Image style={{ width: 17, height: 17, marginTop: 8, marginLeft: 6}} source={require('../../Img/Icon/coracao.png')}/>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          <Text style={{ fontSize: 15, marginLeft: 60 }}>Esfiha</Text>
        </View>
        
        <View>
          <TouchableOpacity style={styles.frameRecipe}>
            <Image style={{ width: 150, height: 100, borderRadius: 20 }} source={require('../../Img/coquitel.jpeg')}/>
            <View style={styles.favorite}>
              <TouchableOpacity>
                <Image style={{ width: 17, height: 17, marginTop: 8, marginLeft: 6}} source={require('../../Img/Icon/coracao.png')}/>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          <Text style={{ fontSize: 15, marginLeft: 20 }}>Coquitel de Abacaxi</Text>
        </View>
      </View>
    </View>
  );
}