import { View, Text } from "react-native";
import Home from "./Screens/Home";
import Login from "./Screens/Login";
import Details from "./Screens/Details";
import Register from "./Screens/Register";
import ListProd from "./Screens/ListProd";
import RootNavigation from "./navigation";
/*import  {createStackNavigator} from "@react-navigation/stack";

import { NavigationContainer } from "@react-navigation/native";
const Stack= createStackNavigator();

function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}
export default function App() {
  return (
      <NavigationContainer>
        <MyStack/>
      </NavigationContainer>
  );
}*/
export default function App(){
  return(
    <RootNavigation/>
  )
}
