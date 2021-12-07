import * as React from 'react';
import { styles } from './style.js';
import { TouchableOpacity, View, Text } from 'react-native';

export function Cadastro({navigation}) {
  return (
    <View style={styles.isBackgroundGeneral}>


    <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Login')}>
        <Text style={{color:"#fff"}}> Tela Login </Text>
    </TouchableOpacity>
    
    </View>
  );
}

