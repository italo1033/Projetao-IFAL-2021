import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({

  //Header
  isBackgroundGeneral:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },  

   headerContainer: {
    backgroundColor: '#ffff00',
    marginBottom: 20,
    width: '100%',
    height: '12%',
    paddingVertical: 15,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 201,
  },

  search: {
    marginLeft: 50,
    marginTop: -25,
    width: '84%',
  },

  //Receita do dia
  frameRecipeDay: {
    width: 313,
    height: 150,
    borderRadius: 20,
    marginTop: 20,
    marginLeft: 10,
    backgroundColor: '#D3D3D3'
  },


  //Receitas
  frameRecipe: {
    width: 150,
    height: 100,
    borderRadius: 20,
    marginTop: 20,
    marginLeft: 5,
    backgroundColor: '#D3D3D3'
  },

  //Botão adicionar aos favoritos
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