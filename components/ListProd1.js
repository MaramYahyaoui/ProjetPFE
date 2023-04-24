import { View, Text,Image } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { ScrollView } from 'react-native'
import ColorList from './ColorList'
import Colors from '../coloe'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import ButtomTab from './ButtomTab'
import { Divider } from 'react-native-elements'
import { SafeAreaView } from 'react-native'

export default function ListProd1() {
  const items=[
    {
        image: require("../assets/accessoire.png"),
        text : "Bracelet ",
        description:"fashing game",
        rating: 3.25,
    },
    {
        image: require("../assets/hoodie2.png"),
        text : "Green leen",
        description:"let's ....",

        rating: 3.25,
    },
 
   
  
]
let count =0;
  return (
    <SafeAreaView>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>

    <View style={{flexDirection:'row',justifyContent:'flex-start'}} >
      {items.map((item, index) => {count++;
      return(
          
        <View key={index} style={count % 3 === 0 ? styles.cardWrap : styles.box }  >
          <View style={{flexDirection:'row'}}>
            <Image 
            style={{width:50,height:40 , marginTop:3, marginLeft:5}}
            source={require("../assets/try2.png")}/>
          
          <View style={{start:80,marginTop:2}}>
          <FontAwesome5 name="cart-plus" size={15}   />
          <FontAwesome5 name="heart" size={16} style={{marginTop:5}}/>
          </View>
          </View>
          <Image
            source={item.image}
            style={{
              width: 160,
              height: 140,
              resizeMode:'center'
              
              
            }}
          />
          <View >
          <ColorList  /></View>
          <View style={{flexDirection:'row' , justifyContent:'space-between', marginTop:5, paddingHorizontal:4}}> 
          <Text style={{ fontSize: 13, fontWeight: "900" }}>{item.text}</Text>
          <Text style={{ fontSize: 13, fontWeight: "900" }}>{item.rating}</Text>
            </View>
            <Text style={{ fontSize: 13, fontWeight: "900", color:Colors.gray,paddingHorizontal:4 }}>{item.description}</Text>
            <Text style={{marginTop:10, backgroundColor:Colors.gray1, width:158, height:35,fontSize:15, fontWeight:'bold',color:Colors.orange,justifyContent:'center', textAlign:'center', borderRadius:5}}>
            90TND
      </Text>
        </View>
      )})}
    </View>
   
    </ScrollView>
 
 
    
     </SafeAreaView>
  )
}

const styles= StyleSheet.create({
box:{
    position: 'relative',
    width:160,
    height:290,
    marginTop:10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor:'gray',
    marginRight:3,
    flexWrap: 'wrap',
 
}
})