import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import ColorList from '../components/ColorList';
import ButtomShop from '../components/ButtomShop';
import { Divider } from 'react-native-elements';

import { ScrollView } from 'react-native';
//import SizeList from '../components/SizeList';
import ProdDetailCard from '../components/ProdDetailCard';
export default function Details() {
    return (
        <SafeAreaView style={{ flex: 1, paddingHorizontal: 12 }}>
            <ScrollView >
                <Image
                    resizeMode='cover'
                    source={require("../assets/image7.png")}
                    style={{ width: 420, height: 400, marginTop: 20 }}
                />

                <View style={{ width: 420, height: 80, backgroundColor: "beige", flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require("../assets/try1.png")} />
                    <Text style={{ marginLeft: 5, fontWeight: 'bold', fontSize: 20 }}> Essayer sur vous  </Text>
                    <AntDesign name="right" size={30} style={{ marginLeft: 100 }} />
                </View>
                <View style={{ marginLeft: 15, marginRight: 10 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                        {/*Marque*/} nike
                    </Text>
                    <Text style={{ fontWeight: '300', fontSize: 20, color: "gray", textTransform: 'capitalize' }}>
                        {/*nom article*/} blue hoodie
                    </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontWeight: '300', fontSize: 20, marginTop: 20, alignItems: 'center' }}>
                            {/*rating */} 4.56 <Entypo name='star' size={20} />
                        </Text>
                        <Text style={{ fontWeight: '300', fontSize: 20, marginTop: 20, alignItems: 'center' }}>
                            {/* nombre de favoris  favoris*/} <Entypo name='heart' size={20} /> 235 favoris
                        </Text>
                    </View>
                </View>
                <View style={{ width: 420, height: 80, backgroundColor: "beige", flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ marginLeft: 5, fontWeight: 'bold', fontSize: 20 }}>
                        Couleur :

                    </Text>
                    <View>
                        <ColorList />
                    </View>

                </View>

                <View style={{ width: 420, height: 80, backgroundColor: "beige", flexDirection: 'row', alignItems: 'center', marginTop:20 }}>
                    <Text style={{ marginLeft: 5, fontWeight: 'bold', fontSize: 20 }}>
                       Taille:

                    </Text >
                   

                </View>
                <Text style={{ marginTop: 25, fontWeight: 'bold', fontSize: 20 }}>
                    Article qui semble à ca :
                </Text>
                <View style={{flexDirection:'row', marginHorizontal:12}}>
                    <ProdDetailCard/>
                </View>
                <Text style={{ marginTop: 25, fontWeight: 'bold', fontSize: 20 }}>
                Dernier produit consultés :

                </Text>
                <View style={{flexDirection:'row', marginHorizontal:12}}>
                    <ProdDetailCard/>
                </View>
            </ScrollView>

            <Divider width={1} />
            <ButtomShop />
        </SafeAreaView>




    )
}