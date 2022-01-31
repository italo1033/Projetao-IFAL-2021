import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({

  isBackgroundGeneral:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },  
   headerContainer: {
    justifyContent: 'start',
    alignItems: 'start',
    backgroundColor: '#ffff00',
    marginBottom: 20,
    width: '100%',
    paddingVertical: 15,
    display: 'flex',
    flexDirection: 'row'
  },

  frameRecipeDay: {
    width: 313,
    height: 150,
    borderRadius: 20,
    marginTop: 20,
    marginLeft: 10,
    backgroundColor: '#D3D3D3'
  },

  frameRecipe: {
    width: 150,
    height: 100,
    borderRadius: 20,
    marginTop: 20,
    marginLeft: 5,
    backgroundColor: '#D3D3D3'
  },

  favorite: {
    width: 30, 
    height: 30,
    position: 'absolute',
    marginLeft: 110,
    marginTop: 10, 
    backgroundColor: '#FFFAFA', 
    borderRadius: 30
  }
});