import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  isBackgroundGeneral:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  button:{
    marginTop:5,
    width:125,
    alignItems:"center",
    borderRadius:5, //arredondando o butão
    backgroundColor:'green',
    padding:5,
  },

  buttonGmail: {
    fontSize: 20,
    backgroundColor: '#F8F8FF',
    borderRadius: 12,
    width:200,
    height: 32,
    alignItems: 'center',
    justifyContent:'center',
  },

  icon: {
    padding: 10,
  },

  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    alignItems: "center",
    justifyContent: "center",
  },
  
  fotoContainer: {},
  image: { width: 200, height: 200 },
  text: { fontSize: 18, textAlign: "center" },
  
});