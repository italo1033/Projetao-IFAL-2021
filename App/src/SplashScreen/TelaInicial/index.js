import * as React from 'react';
import {
View,
Image } from "react-native";



export function SplashScreenInitial({navigation}) {
    setTimeout(() => {
    navigation.navigate('Home');
    },2000);
    return (
        <View colors={['#fff','#00BFFF']} style={{flex:1, justifyContent:'center', alignItems:"center"}}>
            <View style={{flex:1, justifyContent:'center', alignItems:"center"}}>
                    <Image
                    style={{height:700, width:450}}
                    source={require('../../Img/oii.jpg')} />
            </View>
        </View>
    );
}
