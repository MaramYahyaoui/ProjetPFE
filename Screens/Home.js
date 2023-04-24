import { View, Text, SafeAreaView, SafeAreaViewBase, ScrollView } from 'react-native'
import React from 'react'
import HeaderCom from '../components/HeaderCom'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Announce from '../components/Announce'
//import ProductItems from '../components/ProductItems'
import { Divider } from 'react-native-elements'
import ButtomTab from '../components/ButtomTab'
import { StyleSheet } from 'react-native'
import Colors from '../coloe'
//import Ionicons from "react-native-vector-icons/Ionicons";


export default function Home(
  
) {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1, marginTop: 20 }}>
        <ScrollView  style={{paddingHorizontal:12}}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderCom />
        <Search />
        <View style={styles.box1}>
      

        <Text style={{fontSize:20, fontWeight:'bold'}}>
          Les plus consultés
        </Text>
        </View>
       

      </View>
      <Categories />
      <View>
        <Announce  />
      </View>
        
      </ScrollView>
      <Divider width={1} />
      <ButtomTab />
    </SafeAreaView>



  )
}
const styles = StyleSheet.create({
  box1: {
    marginTop: 10, 
    backgroundColor: Colors.pink,
     width: 360, 
     height: 60, 
     fontSize: 15, fontWeight: 'bold', 
     
     justifyContent: 'center',
     alignItems: 'center', 
     borderRadius: 20
  }
})