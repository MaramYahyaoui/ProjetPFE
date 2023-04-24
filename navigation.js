import { createStackNavigator } from "@react-navigation/stack";
import ListProd from "./Screens/ListProd";
import Details from "./Screens/Details";
import Home from "./Screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import Profile from "./Screens/Profile";
import EditProfile from "./Screens/EditProfile";
import Favoritelist from "./Screens/Favoritelist";

import Panier from "./Screens/Panier";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import Order from "./Screens/Order";




export default function RootNavigation() {
    const Stack = createStackNavigator();
  
    const screenOptions = {
      headerShown: false,
    };
  
    return (
 
        <NavigationContainer>
          <Stack.Navigator initialRouteName="EditProfile" screenOptions={screenOptions}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ListProd" component={ListProd} />
            <Stack.Screen name="Details" component={Details} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Favoritelist" component={Favoritelist} />
           <Stack.Screen name="Panier" component={Panier} /> 
           <Stack.Screen name="Login" component={Login} /> 
           <Stack.Screen name="Register" component={Register} /> 
           <Stack.Screen name="Order" component={Order} /> 
           <Stack.Screen name="EditProfile" component={EditProfile} />

          </Stack.Navigator>
        </NavigationContainer>
    );
  }
