import { View, Text, StatusBar, TextInput, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useFonts } from 'expo-font';
import { FontAwesome } from '@expo/vector-icons';

import { Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

var myobj = {};
var arr = [];

async function get() {
  dataget = JSON.parse(await AsyncStorage.getItem('mydata'))
  console.log(dataget)

}
async function set() {
  arr = JSON.parse(await AsyncStorage.getItem('mydata'))
  arr.push(myobj)
  await AsyncStorage.setItem('mydata', JSON.stringify(arr))


}




const height = Dimensions.get('window').height

export default function Signup({ navigation }) {
  const [isViewVisible, setIsViewVisible] = useState(true);


  const toggleViewVisibility = () => {
    setIsViewVisible(!isViewVisible); // Toggle the visibility state
  }
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
      <View style={styles.container}>
        <View>
          <Text style={[styles.txt]}>Welcome {`\n`} Back</Text>
        </View>
        <View >
          <View style={styles.input} >
            <FontAwesome name="user" size={24} color="black" />
            <TextInput style={{ marginLeft: 10, overflow: 'hidden' }} placeholder=' Enter your email' placeholderTextColor={'black'}></TextInput>
          </View>
          <View style={styles.input}  >
            <FontAwesome name="lock" size={24} color="black" />
            <TextInput style={{ marginLeft: 10, overflow: 'hidden' }} placeholder='Password?' placeholderTextColor={'black'}></TextInput>
          </View>
          <TouchableOpacity>
            <Text style={{
              textAlign: 'center', marginBottom: 10,
            }}>
              Forgot Password ?
            </Text>

          </TouchableOpacity>
          <View style={styles.sub}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}><Text style={styles.btn}>Submit</Text></TouchableOpacity>
          </View>
          {/*           <View style={styles.sign}>
            <Text>
              New User?

            </Text>
            <TouchableOpacity onPress={toggleViewVisibility}>
              <Text style={{ borderBottomWidth: 1 }}>SignUp</Text>
            </TouchableOpacity>





          </View>
 */}
        </View>
      </View>

      <View style={styles.create}>


        <View style={{
          flex: 1, justifyContent: 'center', alignItems: 'center',
          borderRadius: 30,
          position: 'relative'
        }}>
          {isViewVisible ? (
            <TouchableOpacity style={{ position: 'relative', }} >

              <Text Text onPress=
                {toggleViewVisibility} style={{
                  backgroundColor: '#6d60f8', borderRadius: 30,
                  padding: 15,

                }}>Create new account</Text>

            </TouchableOpacity>

          ) : (


            <View style={{
              flex: 1, width: '90%',


              borderRadius: 30,
              position: 'absolute'
            }}>
              {<View >
                <View style={styles.sinput} >
                  <Text>Name:</Text>
                  <TextInput onChangeText={(e) => { myobj.name = e }} style={{ marginLeft: 10, overflow: 'hidden' }}
                    placeholder=' Enter your name' placeholderTextColor=
                    {'black'}></TextInput>
                </View>
                <View style={styles.sinput} >
                  <Text>Email:</Text>
                  <TextInput onChangeText={(e) => { myobj.email = e }} style={{ marginLeft: 10, overflow: 'hidden' }}
                    placeholder=' Enter your email' placeholderTextColor=
                    {'black'}></TextInput>
                </View>
                <View style={styles.sinput} >
                  <Text>pass:</Text>
                  <TextInput onChangeText={(e) => { myobj.pass = e }} style={{ marginLeft: 10, overflow: 'hidden' }}
                    placeholder=' Enter your pass' placeholderTextColor=
                    {'black'}></TextInput>
                </View>
                <View style={{

                  justifyContent: 'center',
                  width: height / 2.4,
                  flexDirection: 'row',
                  justifyContent: 'space-between',



                }} >
                  <TouchableOpacity onPress={() => { set() }}>
                    <Text style={{
                      backgroundColor: '#6d60f8', borderRadius: 30,
                      width: height / 6,
                      textAlign: 'center', color: 'whitesmoke',
                      padding: 15

                    }}>Submit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                  }}
                    onPress={() => { get() }} >

                    <Text style={{
                      backgroundColor: '#6d60f8', borderRadius: 30,
                      padding: 10,
                      textAlign: 'center',
                      width: height / 5,
                      color: 'whitesmoke',

                    }}>
                      get data
                    </Text>
                  </TouchableOpacity>


                </View>
                <TouchableOpacity style={{
                  justifyContent: 'flex-end',
                  /* alignItems: 'flex-end', */
                }}
                  onPress={toggleViewVisibility} >

                  <Text style={{
                    backgroundColor: '#6d60f8', borderRadius: 30,
                    padding: 10,
                    marginTop: 5,
                    textAlign: 'center',
                    width: height / 5,
                    color: 'whitesmoke',

                  }}>
                    Login Page
                  </Text>
                </TouchableOpacity>


              </View>}

            </View>


          )}
        </View>

      </View >


      <StatusBar backgroundColor={'#000'}></StatusBar>

    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: .69,
    alignItems: 'center',
    justifyContent: 'flex-end',



  },
  txt: {
    fontSize: 35,
    fontWeight: '600',

    textAlign: 'center',
    fontFamily: 'marhey3'
  },
  input: {
    borderWidth: 1,
    width: height / 3,
    padding: 5,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: 'row',
    paddingHorizontal: 10,

  },
  btn: {
    backgroundColor: '#6d60f8',
    textAlign: 'center',
    width: height / 6,
    padding: 10,
    fontSize: 16,
    fontWeight: '600',
    borderRadius: 50,
    color: 'whitesmoke'

  },
  sub: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  sign: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10
  },
  create: {

    flex: .35,
    width: 400,


    position: 'relative',
    width: height / 2,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,



  },
  sinput: {
    borderWidth: 1,
    width: '95%',
    padding: 5,
    paddingVertical: 5,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center'

  }

})