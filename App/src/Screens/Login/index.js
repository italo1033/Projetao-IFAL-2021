import * as React from 'react';
import { styles } from './style.js';
import { View, Text, TouchableOpacity } from 'react-native';

export function Login({navigation}) {
  return (
    <View style={styles.isBackgroundGeneral}>
    
    
    <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Cadastro')}>
        <Text style={{color:"#fff"}}> Tela Cadastro </Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Home')}>
        <Text style={{color:"#fff"}}> Tela Home </Text>
    </TouchableOpacity>

    </View>
  );
}

