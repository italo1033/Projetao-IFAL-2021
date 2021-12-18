import React, { useState }  from 'react';
import { styles } from './style.js';
import { TouchableOpacity, TextInput,View,Text, FlatList} from 'react-native';
import {Button } from 'react-native-elements';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Ionicons } from '@expo/vector-icons';
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Ovo",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Carne",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Farinha de trigo",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d73",
    title: "Pão",
  },
  {
    id: "58694a0-3dwa1-471f-bd96-145571e29d73",
    title: "Coca",
  },
];

  
const Item = ({ item, onPress, backgroundColor, textColor }) => (
      <BouncyCheckbox
        size={25}
        fillColor="blue"
        unfillColor="#FFFFFF"
        text={item.title}
        iconStyle={{borderColor: "green" }}
        textStyle={{ fontFamily: "JosefinSans-Regular" }}
        onPress={onPress} 
        style={styles.item} />
);



export function Dispensa({navigation}) {

const [selectedId, setSelectedId] = useState(null);
const [addItem, setAddItem] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';
//return da função renderItem
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

const functionAddNewItem = ()=>{
    console.log(addItem)
    console.log(setAddItem)
      DATA.push({
      id:"aha",
      title:addItem
    })
    console.log(DATA)
  }
//return da interface
  return (
    <View style={styles.isBackgroundGeneral}>

    <View style={{flexDirection:"row"}}>
      <TextInput 
      style={styles.textInput} 
      keyboardType="default" 
      placeholder="Digite seu Nome"
      onChangeText={value => setAddItem(value)} />
      <TouchableOpacity onPress={functionAddNewItem}><Ionicons name='add-circle-outline' color="green" size={35}/></TouchableOpacity>
      <TouchableOpacity><Ionicons name="remove-circle-outline" color="red" size={35}/></TouchableOpacity>
    </View>


    <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    

    </View>
  );
}


