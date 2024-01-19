import { View, Text, StatusBar, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { AntDesign, Entypo } from '@expo/vector-icons';
import { FontAwesome, MaterialCommunityIcons, Foundation, FontAwesome5 } from '@expo/vector-icons';
export default function Profile({ navigation }) {
    return (
        <>
            <View style={styles.head}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <AntDesign name="left" size={24} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{ fontWeight: '500', color: '#fff' }}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Entypo name="dots-three-vertical" size={24} color="#fff" />
                </TouchableOpacity>

            </View>
            <View style={styles.profilepic}>
                <View style={styles.pic}>
                    <Image style={{ height: 150, width: 150, borderRadius: 75 }} source={require('../images/profile1.jpg')} />
                </View>
                <Text style={{ fontSize: 15, fontWeight: '500', color: '#fff', paddingTop: 10 }}>Raj Singh</Text>
                <Text style={{ fontSize: 14, color: '#fff' }}>Student</Text>
                <Text style={{ fontSize: 15, fontWeight: '500', color: '#fff' }}>Photography</Text>
                <TouchableOpacity style={styles.add}>
                    <Text style={{ marginRight: 20, color: '#6d60f8', fontWeight: '500', fontSize: 15 }}>Add Friend</Text>
                    <AntDesign name="pluscircle" size={30} color="#6d60f8" />
                </TouchableOpacity>

            </View>
            <View style={styles.num}>
                <View>
                    <Text style={styles.numtxt}>
                        2
                    </Text>
                    <Text style={styles.numtxt1}>Courses</Text>

                </View>
                <View>
                    <Text style={styles.numline}>|</Text>

                </View>
                <View >
                    <Text style={styles.numtxt}>1200</Text>
                    <Text style={styles.numtxt1}>Points</Text>

                </View>
                <View>
                    <Text style={styles.numline}>|</Text>

                </View>
                <View>
                    <Text style={styles.numtxt}>13</Text>
                    <Text style={styles.numtxt1}>Rank</Text>

                </View>


            </View>
            <View style={styles.bottom}>
                <TouchableOpacity style={styles.rect}>
                    <Text style={styles.btnicon}>   <FontAwesome name="user"
                        size={24} color="#6d60f8" /></Text>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: '500',
                        color: "#6d60f8"
                    }}>Profile</Text>
                    <AntDesign name="right" size={24} color="black" />


                </TouchableOpacity>
                <TouchableOpacity style={styles.rect}>
                    <Text style={styles.btnicon}>  <Foundation name="results" size={24} color="#6d60f8" /> </Text>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: '500',
                        color: "#6d60f8"
                    }}>Results</Text>
                    <AntDesign name="right" size={24} color="black" />


                </TouchableOpacity>
                <TouchableOpacity style={styles.rect}>
                    <Text style={{
                        height: 50,
                        width: 50,
                        borderRadius: 25,
                        backgroundColor: '#dcd8fc',
                        justifyContent: 'center',
                        paddingTop: 10,
                        textAlign: 'center'
                    }}><FontAwesome5 name="crown" size={20} color="#6d60f8" /></Text>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: '500',
                        color: "#6d60f8"
                    }}>Ranking</Text>
                    <AntDesign name="right" size={24} color="black" />


                </TouchableOpacity>


            </View>

            <StatusBar backgroundColor={'#6d60f8'}></StatusBar>
        </>
    )

}
const styles = StyleSheet.create({
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#6d60f8',
        flex: .1,
    },
    profilepic: {
        flex: .4,
        backgroundColor: '#6d60f8',
        alignItems: 'center',

    },
    pic: {
        height: 150,
        width: 150,
        borderRadius: 75,
    },
    add: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        elevation: 5,
        paddingHorizontal: 20,
        borderRadius: 30,

        height: 50,
        alignItems: 'center',
        marginTop: 25,

    },
    num: {
        flexDirection: 'row',
        flex: .1,
        backgroundColor: '#6d60f8',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 25,

    }
    ,
    numtxt: {
        fontSize: 14,
        textAlign: 'center',
        color: '#fff'
    },
    numtxt1: {
        fontSize: 16,
        fontWeight: '500',
        color: '#fff'

    },
    numline: {
        fontSize: 40,
        color: 'gray',
        fontWeight: '300'
    },
    bottom: {
        flex: .4,
        backgroundColor: '#6d60f8',
        paddingHorizontal: 30,
        paddingTop: 50


    },
    btnicon: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: '#dcd8fc',
        justifyContent: 'center',
        paddingTop: 8
    },
    rect: {

        borderRadius: 15,
        backgroundColor: '#fff',
        padding: 10,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'


    }

})