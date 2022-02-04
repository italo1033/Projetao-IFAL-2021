import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({

  //Containeres responsáveis pelo conteúdo principal
  isBackgroundGeneral:{
    flex:1,
  }, 

  subContainer:{
    marginTop:50,
    alignItems:"center"
  },

  //Campos de texto
  textInput:{
    margin:5,
    width:180,
    hint:"#000",
    justifyContent:"center" ,
    textAlign:"center",
    borderRadius:10, //arredondando o botão
    backgroundColor:'#C4C4C4',
    padding:5,
    fontFamily: 'Roboto',
    fontSize: 16  
  },

  //Botão Cadastrar
  button:{
    width:180,
    alignItems:"center",
    borderRadius:10, //arredondando o botão
    backgroundColor:'#FFFF00',
    padding:5,
    margin:5,
  },
  
});