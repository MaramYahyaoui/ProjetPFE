import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign";
import { SafeAreaView } from 'react-native';
import Colors from '../coloe';
import ProdDetailCard from '../components/ProdDetailCard';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Image } from 'react-native';
import ListProd1 from '../components/ListProd1';
import ButtomTab from '../components/ButtomTab'
import { Divider } from 'react-native-elements'

export default function ListProd({root}) {
    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1, marginTop: 40 }}>
            <ScrollView style={{ paddingHorizontal: 30 }}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <AntDesign name="left" size={30} />
                    <Text>id annonce </Text>
                </View>
                <View style={{borderWidth:1,borderColor:Colors.green, borderRadius:20,marginTop:20, flexDirection:'row' , justifyContent:'space-around',alignContent:'center',alignItems:'center'}}>
                   <View style={{flexDirection:'row', justifyContent:'center',marginLeft:25}}>
                    <Image 
                        source={(require("../assets/filter.png"))}
                    />

                    <Text style= {{fontSize:18}}>Filtrer</Text>  
                   </View>
                    <Text style={{color:Colors.green,height:30}}>|</Text>  
                    <View style={{flexDirection:'row', justifyContent:'center',alignItems:'center',marginRight:25 }}>
                    <Image 
                        source={(require("../assets/tri.png"))}
                       
                    />

                    <Text style= {{fontSize:18, marginLeft:5}}>Trier</Text>  
                   </View>
                     
                </View>
                <View style={{paddingHorizontal:15, paddingVertical:15}}>
                    <ListProd1  root={root} />
                </View>
                <View style={{paddingHorizontal:15, paddingVertical:15}}>
                    <ListProd1  root={root} />
                </View>
            </ScrollView>
            <Divider width={1}/>
              <ButtomTab/>
        </SafeAreaView>

    )
}