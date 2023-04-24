import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import Colors from '../coloe';

export default function ProdDetailCard() {
  return (
    <View style={styles.box}>
      <Image
      style={{width:130,height:180, marginTop:5}}
       source={require("../assets/hoodies.png")} 
      />
      <Text style={{fontSize:15, fontWeight:'bold',color:Colors.gray}}> 
        Light shirt
      </Text>
      <Text style={{marginTop:10, backgroundColor:Colors.green, width:148, height:33,fontSize:15, fontWeight:'bold',color:Colors.orange,justifyContent:'center', textAlign:'center', borderRadius:5}}>
            90TND
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    position: 'relative',
    width:150,
    height:250,
    marginTop:10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor:'gray',
    alignItems:'center'
  },
});
