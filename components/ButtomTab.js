import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function BottomTabs() {
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        marginHorizontal: 30,
        justifyContent: "space-between",
      }}
    >
      <Icon icon="home" text="Acceuil"  />
      <Icon icon="search" text="Recherche" />
      <Icon icon="shopping-bag" text="Panier" />
      <Icon icon="heart" text="Favoris" />
      <Icon icon="user" text="Profile"  />
    </View>
  );
}

const Icon = (props) => (
  <TouchableOpacity>
    <View>
      <FontAwesome5
        name={props.icon}
        size={25}
        style={{
          marginBottom: 3,
          alignSelf: "center",
          
        }}
      />
      <Text>{props.text}</Text>
    </View>
  </TouchableOpacity>
);