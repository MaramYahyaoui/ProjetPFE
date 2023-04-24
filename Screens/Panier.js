import React, { useState } from 'react';
import { Image } from 'react-native';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { BottomSheet } from 'react-native-elements/dist/bottomSheet/BottomSheet';
import AntDesign from "react-native-vector-icons/AntDesign";

const Panier = () => {
    const [items, setItems] = useState([
        { id: '1', image: require("../assets/accessoire.png"), name: 'accessoire', price: 10, quantity: 1 },
        { id: '2', image: require("../assets/hoodies.png"), name: 'capuche', price: 20, quantity: 1 },
        { id: '3', image: require("../assets/accessoire.png"), name: 'accessoire', price: 30, quantity: 1 },
    ]);

    const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Image
                source={item.image}
                style={styles.img} />
           
            
            <Text style={styles.itemName}>{item.name}</Text>
            <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => updateQuantity(item.id, item.quantity - 1)}>
                    <Text style={styles.quantityButton}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>{item.quantity}</Text>
                <TouchableOpacity onPress={() => updateQuantity(item.id, item.quantity + 1)}>
                    <Text style={styles.quantityButton}>+</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.itemPrice}>{item.price * item.quantity} TND</Text>
           
            
        </View>
    );

    const updateQuantity = (id, quantity) => {
        const newItems = [...items];
        const index = newItems.findIndex((item) => item.id === id);
        newItems[index].quantity = quantity;
        setItems(newItems);
    };

    return (
        <View style={styles.container}>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <AntDesign name="left" size={30} />
                <Text style={styles.title}>  Panier</Text>

            </View>
            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                style={styles.flat}
            />
            <View style={styles.total}>
                <Text style={styles.totalLabel}>Total:</Text>
                <Text style={styles.totalPrice}>{totalPrice} TND</Text>
            </View>
            <View>
                <BottomSheet
                  renderContent={this.renderInner}
                  renderHeader={this.renderHeader}
                  
               
                  
                 />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingHorizontal: 15,
        paddingTop: 50
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    itemName: {
        flex: 2,
        fontSize: 16,
        fontWeight: 'bold',
    },
    quantityContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginHorizontal: 5,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    quantityButton: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'orange',
    },
    quantity: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    itemPrice: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
        marginTop:15,
    },
    img: {
        width: 100,
        height: 100,
        marginLeft: 10,


    },
    total: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    totalLabel: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    totalPrice: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    flat: {
        paddingHorizontal: 13,
        paddingVertical: 12,
        marginTop: 15,
    }
});

export default Panier;
