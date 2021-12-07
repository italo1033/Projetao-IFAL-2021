import * as React from 'react';
import { styles } from './style.js';
import { View, Text , TouchableOpacity } from 'react-native';

export function Home({navigation}) {
  return (
    <View style={styles.isBackgroundGeneral}>


        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Login')}>
            <Text style={{color:"#fff"}}> Tela Login </Text>
        </TouchableOpacity>

        
    </View>
  );
}

