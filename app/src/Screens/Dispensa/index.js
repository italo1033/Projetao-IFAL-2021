import React, { useState }  from 'react';
import { styles } from './style.js';
import { TouchableOpacity, TextInput,View, FlatList} from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';

import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Ionicons } from '@expo/vector-icons';

const itemJson=require("../../DataBase/item.json")
  



export function Dispensa({navigation}) {

const [selectedId, setSelectedId] = useState(null);
  return (
    <View style={styles.isBackgroundGeneral}>
    
       <Card >
            {itemJson.DATE.map((index) => {
              return (
                <View   style={{flexDirection:"row", justifyContent:'space-between'}}>
                  <Text>{index.title}</Text>
                  <TouchableOpacity onPress={()=> alert(index.id) }><Ionicons name='trash' color="red" size={25}/></TouchableOpacity>
                </View>
              );
            })}
          </Card>
      <View style={{alignItems:"center"}}>
      <TouchableOpacity style={styles.buttonLogin}>
      <Text>Ver Receitas</Text>
      </TouchableOpacity>
      </View>




          
    

    </View>
  );
}


