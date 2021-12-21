import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity, Image } from 'react-native';

const Category = (props) => {
    return(
        <View style={styles.category}>
            <TouchableOpacity>
                <View style={styles.category2}>
                  <Image style={{ width: 32, height: 33, marginLeft: 3 }} source={props.icon}/>
                </View>
                <Text style={{ textAlign: 'center', marginLeft: 4 }}>{props.type}</Text>
            </TouchableOpacity>
        </View>
    )
}

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
        padding: 5,
      }
})

export default Category;
