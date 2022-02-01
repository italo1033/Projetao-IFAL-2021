import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({

  isBackgroundGeneral:{
    flex:1,
  },  
  
   headerContainer: {
    justifyContent: 'center',
    alignItems: 'start',
    backgroundColor: '#ffff00',
    marginBottom: 20,
    width: '100%',
    paddingVertical: 15,
    display: 'flex',
    flexDirection: 'row'
  },

  buttonMoreLess: {
    flexDirection: 'row',
    marginLeft: 145,
    width: 65,
    height: 22,
    
  },
  buttonMore:{
    borderWidth:1, 
    borderTopLeftRadius:10, 
    borderBottomLeftRadius:10, 
    paddingLeft:10
  },
  buttonLess:{
    borderWidth:1, 
    borderTopRightRadius:10, 
    borderBottomRightRadius:10, 
    paddingRight:10
  },

  favorite: {
    width: 30, 
    height: 30,
    position: 'absolute',
    marginLeft: 270,
    marginTop: 10, 
    backgroundColor: '#FFFAFA', 
    borderRadius: 30
  },
  //ingredientes
  ingredientes: { 
    color: '#000', 
    fontSize: 10 
  },

  //modo de prepararo
  containerMododePreparo: { 
    color: '#000',
    marginLeft:17,
    marginBottom:10,
    marginTop:10, 
    fontSize: 18, 
    fontWeight:"bold" 
  },
  mododePreparo:{
    color: '#000', 
    fontSize: 10,
    marginLeft:17 ,
    marginBottom:10
  },


  
  //Tempo e dificuldade
  tempoEdificuldade: {
    color: '#000', 
    fontSize: 14, 
    fontWeight:"bold"
  }

});