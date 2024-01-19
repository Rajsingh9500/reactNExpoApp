import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/Login';
import Signup from './src/pages/Signup';
import Home from './src/pages/Home';
import Save from './src/pages/Save';
import Profile from './src/pages/Profile';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false }} name="Login"
            component={Login} />
          <Stack.Screen options={{ headerShown: false }} name="Signup"
            component={Signup} />
          <Stack.Screen options={{ headerShown: false }} name="Home"
            component={Home} />
          <Stack.Screen options={{ headerShown: false }} name="Save"
            component={Save} />
          <Stack.Screen options={{ headerShown: false }} name="Profile"
            component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </>

  );
}


