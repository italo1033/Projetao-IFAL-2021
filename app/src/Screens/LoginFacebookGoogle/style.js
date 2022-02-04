import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  //Background geral
  isBackgroundGeneral: {
    flex:1,
    alignItems:"center",
  },

  //Botão de login 
  buttonLogin: {
    fontSize: 20,
    backgroundColor: '#FFFF00',
    borderRadius: 10,
    width: 180,
    alignItems:'center',
    padding: 5,
    margin: 5
  },

  //Botão de login via Google
  buttonGmail: {
    flexDirection: 'row',
    fontSize: 30,
    backgroundColor: '#C4C4C4',
    borderRadius: 10,
    width:180,
    alignItems: 'center',
    padding: 5,
    margin: 5
  },

  //Botão de login via facebook
  buttonFacebook: {
    flexDirection: 'row',
    fontSize: 20,
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#3b5998',
    borderRadius: 10,
    width: 180,
    margin: 5,
    marginTop: 25
  }
  
});