import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons, MaterialIcons, Entypo } from '@expo/vector-icons';
export default function Home({ navigation }) {
  return (
    <>
      <View style={styles.bars} >
        <View>
          <TouchableOpacity>
            <FontAwesome name="bars" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.search}>
          <TouchableOpacity>
            <FontAwesome style={{ paddingRight: 20 }}
              name="search" size={24} color="black" /></TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="notifications" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.scrol}>
        <Text style={styles.ctxt}>
          The World's Largest {`\n`}Selection Of Courses.
        </Text>
        <View style={styles.scrollbr}>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <TouchableOpacity style={styles.box}>
              <FontAwesome5 name="star-of-life" size={30} color="white" />
              <Text style={styles.boxtxt}>Graphics</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
              <MaterialCommunityIcons name="molecule" size={35} color="white" />
              <Text style={styles.boxtxt}>Artificial</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
              <FontAwesome name="star" size={30} color="white" />
              <Text style={styles.boxtxt}>Physics</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
              <Entypo name="network" size={30} color="white" />
              <Text style={styles.boxtxt}>Cyber</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
              <MaterialIcons name="computer" size={30} color="white" />
              <Text style={styles.boxtxt}>Computer</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
      <View style={styles.cardsc}>
        <View style={styles.trending}>
          <Text style={{ fontSize: 24, fontWeight: '600' }}>Trending
            Now</Text>
          <TouchableOpacity><Text style={{ paddingTop: 10, }}>See all</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <View style={styles.cardimg}>
              <Image style={{
                resizeMode: 'cover', height: 230, width: 180, borderRadius: 15,

              }} source={require('../images/img1.jpg')}></Image>
              <Text style={{ fontSize: 11, fontWeight: 600, paddingTop: 7 }}>Learn Photography Skills. </Text>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>$ 155</Text>
                <Text>⭐ 4.5</Text>
              </View>


            </View>
            <View style={styles.cardimg}>
              <Image style={{
                resizeMode: 'cover', height: 230, width: 180, borderRadius: 15,
              }} source={require('../images/img2.jpeg')}></Image>
              <Text style={{ fontSize: 11, fontWeight: 600, paddingTop: 7 }}>Learn UI Design. </Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>$ 195</Text>
                <Text>⭐ 5.00</Text>
              </View>
            </View>
            <View style={styles.cardimg}>
              <Image style={{
                resizeMode: 'cover', height: 230, width: 180, borderRadius: 15,
              }} source={require('../images/img1.jpg')}></Image>
              <Text style={{ fontSize: 11, fontWeight: 600, paddingTop: 7 }}>Learn Photography Skills. </Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>$ 155</Text>
                <Text>⭐ 4.7</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
      <View style={styles.st}>
        <Text style={{ fontSize: 18, fontWeight: '600' }}>Students are
          viewing</Text>

        <View style={styles.img1}>
          <Image style={{ height: 100, width: 100, borderRadius: 15 }} source={require('../images/img1.jpg')}></Image>

          <View>
            <Text style={{ fontSize: 17, fontWeight: '500' }}>
              Travell Writing Explore.....
            </Text>
            <Text style={{ fontSize: 13, fontWeight: '500', paddingTop: 5 }}>Total 36 Hours Video Class.</Text>
            <View style={{ flexDirection: 'row', paddingTop: 10 }}>
              <Text >$ 120.0</Text>
              <Text style={{ paddingLeft: 90 }}>⭐ 5.00</Text>
            </View>

          </View>

        </View>

      </View>
      <View style={styles.bottomnav}>
        <TouchableOpacity style={styles.bicon}>
          <Entypo name="home" size={24} color="black" />
          <Text style={styles.btxt}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Save')} style={styles.bicon}>
          <FontAwesome name="bookmark" size={24} color="black" />
          <Text style={styles.btxt}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bicon}>
          <Ionicons name="notifications" size={24} color="black" />
          <Text style={styles.btxt}>Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.bicon}>
          <FontAwesome name="user" size={24} color="black" />
          <Text style={styles.btxt}>Account</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  bars: {
    flex: .03,
    padding: 10,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
  ,
  search: {
    flexDirection: 'row',


  },
  scrol: {
    flex: .22,
    paddingLeft: 10
  },
  ctxt: {
    fontSize: 16,
    fontWeight: '600',

  },
  scrollbr: {
    marginTop: 20,
    flexDirection: 'row'

  },
  box: {
    height: 100,
    width: 100,
    borderRadius: 20,
    backgroundColor: '#6d60f8',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5
  },
  boxtxt: {
    color: '#FFF',
    paddingTop: 10
  },
  cardsc: {
    flex: .48,
  },
  card: {
    paddingTop: 20,
    paddingLeft: 5,
  }
  ,

  trending: {

    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 20,

  },
  cardimg: {
    height: 300,
    width: 200,
    backgroundColor: 'whitesmoke',
    borderRadius: 20,
    padding: 10,
    marginLeft: 10,
    marginBottom: 2,
    elevation: 3,
  },
  st: {
    flex: .2,
    paddingHorizontal: 10,
  },
  img1: {
    elevation: 3,
    backgroundColor: '#fff',
    height: 110,
    justifyContent: 'space-between',
    borderRadius: 20,
    paddingLeft: 5,
    marginTop: 10,
    flexDirection: 'row',
    padding: 5,


  }, bottomnav: {
    flex: .08,
    backgroundColor: '#fff',
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',

  },
  btxt: {
    textAlign: 'center'
  },
  bicon: {
    justifyContent: 'center',
    alignItems: 'center'
  }

})