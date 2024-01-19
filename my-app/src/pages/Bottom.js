import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'

export default function Bottom() {
  const [Pass, setPass] = useState('')
  const [Cnf_pass, setCnf_pass] = useState('')
  const [Sub, setSub] = useState()


  const submitData = () => {
    if (Pass === Cnf_pass) {


      alert('password mathched Successfully')

    } else {
      alert('Password not match')

    }

  }


  return (
    <>


      <View style={{
        flex: 1, justifyContent: 'center', paddingHorizontal: 20,
        marginBottom: 20
      }} >

        <View>
          <Text style={styles.txt}>Password:</Text>
          <TextInput placeholder='password' onChangeText={(e) => {
            setPass(e)
          }} style={styles.input}  ></TextInput>
        </View>
        <View>
          <Text style={styles.txt} > confirm Password:</Text>
          <TextInput placeholder='confirm password' onChangeText={(e) => {
            setCnf_pass(e)
          }} style={styles.input} ></TextInput>
        </View>
        <View>
          <Button onPress={submitData} title='Submit'></Button>
        </View>



      </View>
    </>
  )
}
const styles = StyleSheet.create({
  input: {
    borderWidth: 2, padding: 5, justifyContent: 'center', alignItems: 'center', marginBottom: 20,

  }, txt: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10
  }
})