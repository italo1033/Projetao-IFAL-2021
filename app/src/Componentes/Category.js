import * as React from 'react';
import { StyleSheet, View, Text,TouchableOpacity } from 'react-native';

const Category = (props) => {
    return(
        <View style={styles.category}>
            <TouchableOpacity>
                <View style={styles.category2}></View>
                <Text style={{ textAlign: 'center', marginLeft: 10 }}>{props.type}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    category: {
        padding: 10,
        marginTop: 20
      },
    
      category2: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#D3D3D3',
        padding: 10,
        marginLeft: 10
      }
})

export default Category;
