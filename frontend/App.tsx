import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "./src/screens/Splash";
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import Signup from "./src/screens/Signup";



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="EnergyCacao">
        <Stack.Screen name="EnergyCacao" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


