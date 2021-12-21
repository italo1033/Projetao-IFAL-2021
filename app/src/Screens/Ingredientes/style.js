import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({

  isBackgroundGeneral:{
    flex:1,
    justifyContent:"start",
    alignItems:"center"
  },  
  button:{
    width:125,
    alignItems:"center",
    borderRadius:5, //arredondando o butão
    backgroundColor:'green',
    padding:5,
  },
   headerContainer: {
    backgroundColor: '#ffff00',
    marginBottom: 20,
    width: '100%',
    paddingVertical: 15,
    display: 'flex',
    flexDirection: "row",
    marginTop: 5,
    
  },
  itens:{
    borderRadius: 7,
      borderWidth: 2,
      borderColor: '#g6ffff',
      marginLeft: 10,
      marginTop: 10
  }
  
});