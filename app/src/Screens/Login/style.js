import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  isBackgroundGeneral: {
    flex:1,
    alignItems:"center",
  },
  
  textInput: {
    backgroundColor: '#C4C4C4',
    borderRadius: 10,
    width: 180,
    justifyContent: 'center',
    textAlign: 'center',
    padding: 5,
    flexDirection: 'row',
    margin: 5,
    hint: '#000'
  },

  iconSenha: {
    flexDirection: 'row',
  },

  iconEye: {
    width: 50,
    height: 25
  },

  buttonLogin: {
    fontSize: 20,
    backgroundColor: '#FFFF00',
    borderRadius: 10,
    width: 180,
    alignItems:'center',
    padding: 5,
    margin: 5
  },

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

  },

  icon: {
    padding: 10,
  },

  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    justifyContent: 'center',
    width: 180
  },
  
  fotoContainer: {},
  image: { width: 200, height: 200 },
  text: { fontSize: 18, textAlign: "center" },
  
});