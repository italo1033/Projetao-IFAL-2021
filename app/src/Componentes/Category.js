import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity, Image } from 'react-native';

const Category = (props) => {
    return(
        <View style={styles.category}>

        {/* O trecho de código entre as linhas 9 e 14 tem como objetivo apresentar um botão          por meio da tag TouchableOpacity, para que o usuário possa acessar as categorias.           Dentro dessa tag temos as tags Text, View e Image que têm como objetivo,                    respectivamente, apresentar o texto, a estilização e o ícone do botão. */}
            <TouchableOpacity>
                <View style={styles.category2}>
                  <Image style={{ width: 50, height: 50}} source={props.icon}/>
                  </View>
                <Text style={{ textAlign: 'center', marginLeft: 4 }}>{props.type}</Text>
            </TouchableOpacity>
        </View>
    )
}

{/* O trecho de código entre as linhas 20 e 35 tem como objetivo incorporar a estilização das Views das linhas 6 e 10 por meio do StyleSheet. */}
const styles = StyleSheet.create({
    category: {
        padding: 5,
        marginTop: 20
      },
    
      category2: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#D3D3D3',
        
        borderWidth: 1,
        borderColor: '#000'
      }
})

export default Category;
