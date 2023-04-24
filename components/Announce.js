import { View, Text, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'

export default function Announce({ navigation}) {
  return (
    <View style={{marginTop:20}}>
      <Venteflash/>
    </View>
  )
}
const Venteflash =()=>(
  <ScrollView>
    <Image
        source={require("../assets/1.png")}
        style={{ width:"100%",
                  height: 180,
                  borderRadius:20}}
                 
    />
    <Image
    source={require("../assets/flay.png")}
    style={{ width:"100%",
              height: 180,
              borderRadius:20}}
/>
  </ScrollView>

)