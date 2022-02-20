import * as React from 'react';
import { styles } from './style.js';
import { View, Text , TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Header as HeaderRNE, HeaderProps, Icon } from 'react-native-elements';

import Category from '../../Componentes/Category';

{/* Nome: Receitas*/}
{/* Parametros: navigation*/}
{/* Funcionalidade: Exibe todas as receitas na tela, juntamente com
imagem, nome e ícone para favoritá-la*/}

export function Favoritos({navigation}) {
  
  return (
    <View style={styles.isBackgroundGeneral}>

      {/* O trecho do código entre as linhas 23 e 34 tem como objetivo
personalizar o texto do cabeçalho com estilos definidos pela tag style,
para que o texto fique centralizado e tenha as caracteristicas do
estilo escolhido*/}

  <View style={styles.headerContainer}>
                  <Text style={{
                              fontFamily: 'Salsa_400Regular',
                              fontSize: 25,
                              color:'#8B0000',
                              fontWeight:"bold",
                              textAlign: "center"
                  }}> Receitas </Text>
                </View>
                <View style={{alignItems: 'center'}}>
  
    </View>

    {/* O trecho do código entre as linhas 42 e 53 tem como objetivo
mostrar a imagem da receita, nome e a opção de favoritá-la. Para isso
são usadas as tags Image, TouchableOpacity e Text, juntamente com um
icone atraves das tag Image e TouchableOpacity para favoritar as
receitas*/}

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

      {/* O trecho do código entre as linhas 61 e 72 tem como objetivo
mostrar a imagem da receita, nome e a opção de favoritá-la.
Para isso são usadas as tags Image, TouchableOpacity e Text, juntamente
com um icone atraves das tag Image e TouchableOpacity para
favoritar as receitas*/}

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
    
    {/* O trecho do código entre as linhas 80 e 91 tem como objetivo
mostrar a imagem da receita, nome e a opção de favoritá-la. Para isso
são usadas as tags Image, TouchableOpacity e Text, juntamente com um
icone atraves das tag Image e TouchableOpacity para favoritar as
receitas*/}

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
        
        {/* O trecho do código entre as linhas 99 e 109 tem como
objetivo mostrar a imagem da receita, nome e a opção de favoritá-la.
Para isso são usadas as tags Image, TouchableOpacity e Text, juntamente
com um icone atraves das tag Image e TouchableOpacity para favoritar as
receitas*/}

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
