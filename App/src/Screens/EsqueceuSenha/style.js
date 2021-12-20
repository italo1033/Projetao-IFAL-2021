import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({

  isBackgroundGeneral:{
    flex:1,

    alignItems:"center", //alinhando itens no centro
  },
  centro:{
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
  },  
  button:{
    width:180,
    alignItems:"center",
    borderRadius:10, //arredondando o botão
    backgroundColor:'#FFFF00',
    padding:5,
    margin:5,
  },

    textInput:{
    margin:5,
    width:180,
    justifyContent:"center" ,
    textAlign:"center",
    borderRadius:10, //arredondando o botão
    backgroundColor:'#C4C4C4',
    padding:5,
    marginTop: 35,
    fontWeight: "bold",
    color: "black",
  },

  text:{
    marginTop: 50,
    textAlign: "left",
    fontSize: 15,
    marginLeft: 20,
    marginRight: 20,
    fontWeight: "bold",
    opacity: 60,
  },

  
  


});