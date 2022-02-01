import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  isBackgroundGeneral: {
    flex:1,
    alignItems:"center",
  },

  icon: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  
  textInput: {
    marginTop: 5,
    backgroundColor: '#DCDCDC',
    borderRadius: 10,
    fontWeight: "bold",
    width: 200,
    height: 40,
    justifyContent: 'center',
    textAlign: 'center',
    padding: 5,
    flexDirection: 'row',
    margin: 5,
    hint: '#000',
    borderWidth: 1
  },

  buttonInput: {
    marginLeft: 170,
    position: 'absolute'
  },

  buttonLogin: {
    fontSize: 20,
    backgroundColor: '#FFFF00',
    borderRadius: 10,
    width: 200,
    height: 40,
    alignItems:'center',
    padding: 10,
    margin: 5,
    marginTop: 30,
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
  
});