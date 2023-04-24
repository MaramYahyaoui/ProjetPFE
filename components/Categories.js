import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import Colors from '../coloe'

export default function Categories() {

    const items=[
        {
            image: require("../assets/new.png"),
            text : "Nouveauté",
        },
        {
            image: require("../assets/try.png"),
            text : "Essayer",
        },
        {
            image: require("../assets/pull.png"),
            text : "Vétements",
        },
        {
            image: require("../assets/bracelet.png"),
            text : "Accessoire",
        },
      
    ]

  return (
    <View
    style={{
     
      backgroundColor: "#fff",
      paddingVertical: 10,
      paddingLeft: 20,
    }}
  >
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {items.map((item, index) => (
        <View key={index}
             style={{ alignItems: "center",
             marginRight: 20 , 
             padding:7,
             backgroundColor:Colors.pink,
             justifyContent:'center',
             borderRadius:5}}>
          <Image
            source={item.image}
            style={{
              width: 50,
              height: 40,
              resizeMode: "contain",
              
            }}
          />
          <Text style={{ fontSize: 13, fontWeight: "900" }}>{item.text}</Text>
        </View>
      ))}
    </ScrollView>
  </View>
  )
}