import { View, Text, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import InputAutoSuggest from 'react-native-autocomplete-search/src/InputAutoSuggest';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../coloe';

export default function Search() {
  return (
    <View style={{ marginTop: 15, flexDirection: 'row', justifyContent: 'space-between' ,}}>
      <View style={{flex: 1, marginRight: 100, justifyContent:'center'}}>
        <TextInput
          placeholder="Search"
          style={{
            backgroundColor: '#eee',
            borderRadius: 20,
            fontWeight: '700',
            paddingHorizontal: 10,
            height: 40,
            justifyContent: 'center',
          }}
        />
        <View style={{ position: 'absolute', left: 10 }}>
          <Ionicons name="search" size={20} style={{marginLeft:200, color:Colors.gray}} />
        </View>
      </View>
          
    </View>
  );
}
