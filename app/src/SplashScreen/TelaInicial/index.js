import * as React from 'react';
import { View, Image } from 'react-native';

export function SplashScreenInitial({ navigation }) {
  
  {/* O trecho de código entre as linhas 7 e 9 tem como objetivo temporizar a apresentação     da tela através do método setTimeout, e depois direcionar o usuário para a próxima          tela. */}
  setTimeout(() => {
    navigation.navigate('LoginFacebookGoogle');
  }, 5000);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffff00',
      }}>
    {/* O trecho de código entre as linhas 12 e 18 tem como objetivo apresentar a                 estilização geral da tela através da tag View. */}

    {/* O trecho de código entre as linhas 22 e 27 tem como objetivo apresentar uma imagem       por meio da tag Image, juntamente com sua estilização através da tag View, para que o      usuário possa visualizar a tela de carregamento.*/}
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          style={{ height: 400, width: 300 }}
          source={require('../../Img/carregamento.png')}
        />
      </View>
    </View>
  );
}
