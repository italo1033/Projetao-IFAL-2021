import * as React from 'react';
import { View, Image } from 'react-native';

export function SplashScreenInitial({ navigation }) {
  setTimeout(() => {
    navigation.navigate('Login');
  }, 3000);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffff00',
      }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          style={{ height: 400, width: 300 }}
          source={require('../../Img/carregamento.png')}
        />
      </View>
    </View>
  );
}
