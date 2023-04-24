import { View, Text, Button,Image, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Colors from '../coloe';
import {  Input } from 'react-native-elements';
import { ScrollView } from 'react-native';



export default function Login() {
  return (
    <ScrollView style={{ paddingHorizontal: 25, paddingVertical: 50 }} >
            
    <View style={{
        width: 100,

        position: "relative",
        top: 50,
        px: 10,
        flex: 1,
        paddingLeft: 16,
        paddingBottom:40,
        justifyContent:'center',
        left:50,

    }}

    >


        <Image

            flex={1}
            alt="logo"
            w={'300'}
            source={require("../assets/logoshopinet1.png")} />
    </View>
      <View style={{
        w: '2/3',
        position: "relative",
        flex: 1,
        justifyContent: "center",
        marginLeft: 16,
        marginTop: 32
      }}






      >
        <Text style={styles.text}>
          email
        </Text>
        <Input
          InputLeftElement={<Entypo name="mail" size={24} color={Colors.green} />}
          type='text' placeholder='email' 


        />
        <Text style={styles.text}>
          mot de passe
        </Text>
        <View>
        <Input type='password' placeholder='mot de passe' />
        <Text style={{marginBottom:5}}>mot de passe oublier?</Text>
        </View>
       
        <Button title="Se connecter" style={styles.button} color={Colors.dark} >
          
        </Button>
        <Text style={styles.txt1}  > ou se connecter avec </Text>
        <View style={styles.icon}>
          <FontAwesome name="google" size={30} color={Colors.pink} />
          <MaterialIcons name="facebook" size={34} color={Colors.pink} />
        </View>
        <Text  style={{textAlign:'center', marginTop:20, textDecorationLine:'underline'}}
         >
          vous n’avez pas de compte?
        </Text>

      </View>
    </ScrollView>
  )
}; const styles = StyleSheet.create({

  button: {
    backgroundColor: Colors.dark,
    padding: 20,
    borderRadius: 10,
    marginTop: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputText: {

    borderRadius: 5,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 15,
  },
  txt1: {
    textAlign: 'center',
    fontSize: 15,
    marginTop: 30,
    fontWeight: 'bold',
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,

  },

});




