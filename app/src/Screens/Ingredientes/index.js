import * as React from 'react';
import { useState } from 'react';
import { styles } from './style.js';
import { View, Text , TouchableOpacity, StyleSheet } from 'react-native';
import { Header as HeaderRNE, HeaderProps,Card, Button, Icon } from 'react-native-elements';
import {Salsa_400Regular } from '@expo-google-fonts/salsa';
import SearchBar from '../../Componentes/SearchBar';
import DownOutlined from '@ant-design/icons';
import { Ionicons } from '@expo/vector-icons';
const itemJson=require("../../DataBase/Categorias.json")

export function Ingredientes({navigation}) {

  const [shouldShow, setShouldShow] = useState(true);


  

  return (
    <View>
      <View style={styles.headerContainer}>
              <TouchableOpacity style = {{marginLeft: 15}}>
                  <Icon name= "menu" color= "#8b0000" />
                </TouchableOpacity>
                  <Text style={{
                              fontFamily: 'Salsa_400Regular',
                              fontSize: 25,
                              color:'#8B0000',
                              fontWeight:"bold",
                              textAlign: "center"
                  }}> Despensa </Text>
                </View>
                <View style={{alignItems: 'center'}}>
                  <SearchBar />
                </View>
      <View>


      <View>
             <Card >
             <Card.Title> Laticinios e ovos
             
             <TouchableOpacity style={{marginLeft:109}} onPress={() => setShouldShow(!shouldShow)}><Ionicons name='arrow-down-circle' color="red" size={25}/></TouchableOpacity>
             </Card.Title>
             
            {itemJson.Laticinios_e_ovos.map((index) => {
              return (
                  <Text>{index.title}</Text>
              );
            })}
          </Card>
      </View>

      <View>
             <Card >
             <Card.Title> Hortalica e Verduras
             
             <TouchableOpacity style={{marginLeft:90}} onPress={() => setShouldShow(!shouldShow)}><Ionicons name='arrow-down-circle' color="red" size={25}/></TouchableOpacity>
             </Card.Title>
             
            {itemJson.Hortalica_e_Verduras.map((index) => {
              return (
                  <Text>{index.title}</Text>
              );
            })}
          </Card>
      </View>

      <View>
             <Card >
             <Card.Title> Frutas
             
             <TouchableOpacity style={{marginLeft:183}} onPress={() => setShouldShow(!shouldShow)}><Ionicons name='arrow-down-circle' color="red" size={25}/></TouchableOpacity>
             </Card.Title>
             
            {itemJson.Frutas.map((index) => {
              return (
                  <Text>{index.title}</Text>
              );
            })}
          </Card>
      </View>


      <View>
             <Card >
             <Card.Title> Farinha Fermento Laveduras
             
             <TouchableOpacity style={{marginLeft:43}} onPress={() => setShouldShow(!shouldShow)}><Ionicons name='arrow-down-circle' color="red" size={25}/></TouchableOpacity>
             </Card.Title>
             
            {itemJson.farinha_Fermento_Laveduras.map((index) => {
              return (
                  <Text>{index.title}</Text>
              );
            })}
          </Card>
      </View>


















      
{/*       
          <Text> Laticinios <Button
          title="Mostrar/Ocultar"
          onPress={() => setShouldShow(!shouldShow)}
        /></Text>
        {shouldShow ?
        (
          <View style={{display: 'flex',
    flexDirection: 'row'}}>
          <TouchableOpacity style={{borderRadius: 1,
      borderWidth: 2,
      borderColor: '#g6ffff',
      width: '12%',
      marginLeft: 10,
      marginTop: 10}}> 
            Ovos
          </TouchableOpacity>

          <TouchableOpacity style={{borderRadius: 1,
      borderWidth: 2,
      borderColor: '#g6ffff',
      width: '20%',
      marginLeft: 10,
      marginTop: 10}}> 
            Manteiga
          </TouchableOpacity>
        </View>
        ): null}
        </View>

        */} 
        
      </View>
        
    </View>
  );
}




