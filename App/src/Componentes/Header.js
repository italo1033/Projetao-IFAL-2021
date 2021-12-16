import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground} from 'react-native';
import {Salsa_400Regular } from '@expo-google-fonts/salsa';


function Header() {
  return (
   
         <ImageBackground
            style={{height:240, width:'100%'}}
              source={require('../Img/ImageHeade.png')} >

              <Text style={{ height:200,
                    fontFamily: 'Salsa_400Regular',
                    fontSize: 55,
                    color:'#8B0000',
                    fontWeight:"bold",
                    marginTop:50,
                    top: -10
                    }}> Receita de  </Text>


            <Text style={{ height:200,
                    fontFamily: 'Salsa_400Regular',
                    fontSize: 55,
                    marginTop:-100,
                    fontWeight:"bold",
                    color:'#8B0000',
                    top: -40
                    }}> Geladeira </Text>

      </ImageBackground>
    
  ); 
}
export default Header;
