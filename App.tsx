import React from "react";
import { StyleSheet, Text, View } from "react-native";
const App =()=>{
return(
  <View style={styles.container}>
    <View style = {styles.home}>
    <Text>  </Text>
      <View style = {styles.greenbox}></View>
      
    </View>
   
  </View>);
};
const styles=StyleSheet.create({
container:{

  flex:1,
  justifyContent : 'center',
  backgroundColor:'white',

  
},
home: {
  backgroundColor: 'silver',
  padding: 50,
  width: 400,
  height: 250,

},
greenbox: {
  justifyContent:'center',
  alignItems:'center',
  backgroundColor: 'green',
  width : 100,
  height : 100,

}


 
}
)
export default App;