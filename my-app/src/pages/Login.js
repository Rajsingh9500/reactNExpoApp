import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';



export default function Login({ navigation }) {
  const [isLoaded] = useFonts({
    "marhey": require("../fonts/Marhey-Bold.ttf"),
    "marhey1": require("../fonts/Marhey-Light.ttf"),
    "marhey2": require("../fonts/Marhey-Medium.ttf"),
    "marhey3": require("../fonts/Marhey-SemiBold.ttf"),
    "marhey4": require("../fonts/Marhey-Regular.ttf"),
  })
  if (!isLoaded) {
    return null;
  }

  return (

    <>
      <View style={styles.contianer}>
        <View style={styles.main}>
          <Text style={styles.text}>
            Welcome {`\n`}To
            {`\n`}Learning
          </Text>
          <View style={styles.log}>
            <Text style={styles.txt}>Login</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}><AntDesign style={{ marginVertical: 8 }} name="rightcircle" size={34} color="#6d60f8" /></TouchableOpacity>

          </View>
        </View>

      </View>
      <StatusBar backgroundColor={'#6d60f8'}> </StatusBar>
    </>
  )
}

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#6d60f8'

  },
  main: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  log: {
    backgroundColor: '#ffffff',
    padding: 2,

    borderRadius: 30,
    elevation: 5,
    flexDirection: 'row',
    paddingHorizontal: 20,





  },
  txt: {
    fontSize: 24,
    color: '#000',
    paddingRight: 10,






  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 50,
    fontFamily: 'marhey'

  }
})