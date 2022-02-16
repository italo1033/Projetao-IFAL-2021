import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({

  isBackgroundGeneral:{
    flex:1,
    alignItems:"stretch",
    backgroundColor:"#fff",
  },

  itemsCategory: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,    
  },

  category: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  ingredientes: {
    fontSize: 14,
  },

  container: {
    flex: 1,
  },
  item: {
    borderWidth:1,
    fontSize:20,
  },
  title: {
    fontSize: 32,
  },

  headerContainer: {
    backgroundColor: '#ffff00',
    marginBottom: 20,
    width: '100%',
    height: '7%',
    display: 'flex',
    flexDirection: "row",
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  buttons: {
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-around'
  },

  text: {
    color: '#000',
  },

  buttonDespensa: {
    borderWidth: 1,
    padding: 10,
    textAlign: 'center',
    width: '45%',
    height: '100%',
    backgroundColor: '#DCDCDC',
    border: 0
  }

});