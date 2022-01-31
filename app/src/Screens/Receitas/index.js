import * as React from 'react';
import { styles } from './style.js';
import { View, Text , TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Header as HeaderRNE, HeaderProps, Icon } from 'react-native-elements';

import Category from '../../Componentes/Category';

export function Receitas({navigation}) {
  
  return (
    <View style={styles.isBackgroundGeneral}>
      
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
