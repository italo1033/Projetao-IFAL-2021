import React, { useState }  from 'react';
import { styles } from './style.js';
import { TouchableOpacity, TextInput,View, FlatList} from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';

import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Ionicons } from '@expo/vector-icons';
import SearchBar from '../../Componentes/SearchBar';

const itemJson=require("../../DataBase/item.json");
const categoryJson = require("../../DataBase/Categorias.json");
  
export function Dispensa({navigation}) {

const [selectedId, setSelectedId] = useState(null);
const [showL, setShowL] = useState(true);
const [showHV, setShowHV] = useState(true);
const [showF, setShowF] = useState(true);
  return (

    <View style={styles.isBackgroundGeneral}>
    <View style={styles.headerContainer}>
                  <Text style={{
                              fontFamily: 'Salsa_400Regular',
                              fontSize: 20,
                              color:'#8B0000',
                              fontWeight:"bold",
                              textAlign: "center"
                  }}> Minha Despensa </Text>
    </View>

    <View style={{alignItems: 'center'}}>
                  <SearchBar />
    </View>

    {/*esse card ele recebe os dados que tá no json e cria por meio dele a lista de ingredientes*/}
    <View style={styles.itemsCategory}>
      <View>
        <Text style={styles.category}>Laticíonios e Ovos</Text>
        <Text style={styles.ingredientes}>4 ingredientes</Text>
      </View>
      <TouchableOpacity onPress={() => setShowL(!showL)}>
        {showL ? 
       <Ionicons style={{marginLeft: 95}} name='chevron-up-outline' size={23}/> :
      <Ionicons style={{marginLeft: 95}} name='chevron-down-outline' size={23}/>
        }
      </TouchableOpacity>
    </View>
        <Card>
            {showL ? categoryJson.Laticinios_e_ovos.map((index) => {
              return (
                <View style={{flexDirection:"row", justifyContent:'space-between'}}>
                  <Text>{index.title}</Text>
                  <TouchableOpacity onPress={()=> alert(index.id) }><Ionicons name='trash' color="black" size={20}/></TouchableOpacity>
                </View>
              );
            }) : <View></View> }
        </Card>

        <View style={styles.itemsCategory}>
      <View>
        <Text style={styles.category}>Hortaliças e Verduras</Text>
        <Text style={styles.ingredientes}>4 ingredientes</Text>
      </View>
      <TouchableOpacity onPress={() => setShowHV(!showHV)}>
        {showHV ? 
       <Ionicons style={{marginLeft: 70}} name='chevron-up-outline' size={23}/> :
      <Ionicons style={{marginLeft: 70}} name='chevron-down-outline' size={23}/>
        }
      </TouchableOpacity>
    </View>
        <Card>
            {showHV ? categoryJson.Hortalica_e_Verduras.map((index) => {
              return (
                <View style={{flexDirection:"row", justifyContent:'space-between'}}>
                  <Text>{index.title}</Text>
                  <TouchableOpacity onPress={()=> alert(index.id) }><Ionicons name='trash' color="black" size={20}/></TouchableOpacity>
                </View>
              );
            }) : <View></View> }
        </Card>

        
        <View style={styles.itemsCategory}>
      <View>
        <Text style={styles.category}>Farinhas, Fermentos e Leveduras</Text>
        <Text style={styles.ingredientes}>4 ingredientes</Text>
      </View>
      <TouchableOpacity onPress={() => setShowF(!showF)}>
        {showF ? 
       <Ionicons style={{marginLeft: 60}} name='chevron-up-outline' size={23}/> :
      <Ionicons style={{marginLeft: 60}} name='chevron-down-outline' size={23}/>
        }
      </TouchableOpacity>
    </View>
        <Card>
            {showF ? categoryJson.farinha_Fermento_Laveduras.map((index) => {
              return (
                <View style={{flexDirection:"row", justifyContent:'space-between'}}>
                  <Text>{index.title}</Text>
                  <TouchableOpacity onPress={()=> alert(index.id) }><Ionicons name='trash' color="black" size={20}/></TouchableOpacity>
                </View>
              );
            }) : <View></View> }
        </Card>


      <View style={styles.buttons}>
          <TouchableOpacity style={styles.buttonDespensa}>
            <Text style={styles.text}>Adicionar mais</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonDespensa}>
            <Text style={styles.text}>Ver Receitas</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}


