import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  isBackgroundGeneral: {
    flex:1,
    alignItems:"center",
  },
  textEtapa: {
    marginTop: 10,
    backgroundColor: '#C4C4C4',
    borderRadius: 10,
    fontWeight: "bold",
    width: '95%',
    justifyContent: 'center',
    padding: 5,
    flexDirection: 'row',
    margin: 5,
    hint: '#000'
  },
  textInput: {
    marginLeft: 15,
    width: '80%',
    justifyContent: 'start',
    textAlign: 'start',
    padding: 5,
    flexDirection: 'row',
    margin: 5,
    hint: '#000',
    fontWeight: 'bold'
  },

  iconSenha: {
    flexDirection: 'row',
    width: 180,
    
  },

  iconEye: {
    width: 50,
    height: 25
  },

  buttonLogin: {
    fontSize: 20,
    backgroundColor: '#FFF',
    borderRadius: 15,
    width: 180,
    alignItems:'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 5,
    margin: 5,
    marginTop: 25
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
  
    alignItems: 'center',
    backgroundColor: "#f4f4f4",
    justifyContent: 'center',
    width: 180
  },
  
  fotoContainer: {},
  image: { width: 200, height: 200 },
  text: { fontSize: 18, textAlign: "center" },
  
  headerContainer: {
    backgroundColor: '#ffff00',
    marginBottom: 20,
    width: '100%',
    paddingVertical: 2,
    display: 'flex',
    flexDirection: "row",
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  
  
});