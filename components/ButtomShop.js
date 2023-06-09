import { View, Text, Button } from 'react-native'
import React from 'react'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Colors from '../coloe';
import AntDesign from "react-native-vector-icons/AntDesign";

export default function ButtomShop() {
  return (
    <View>
      <View
      style={{
        flexDirection: "row",
        margin: 10,
        marginHorizontal: 30,
        justifyContent: "space-between",
      }}
    >
        <Text style={{fontSize:25,fontWeight:'bold', color:Colors.orange,marginRight:30}}>
            80TND
        </Text>
      <FontAwesome5 name="home" text="Acceuil" color={Colors.orange} size={30}/>
      <Button title='Ajouter au panier' color={Colors.orange}  >
      <AntDesign name="shoppingcart"   size={30}  />
    </Button>
   
    </View>
    </View>
  )
}