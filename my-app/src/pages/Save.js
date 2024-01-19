import { View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function Save({ navigation }) {
    return (
        <>
            <View style={styles.container}>
                <ImageBackground style={{ resizeMode: 'contain', height: 500 }} source={require('../images/img3.jpg')}>
                    <View style={styles.icons}>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.box}>
                            <AntDesign style={{ textAlign: 'center', paddingTop: 5 }} name="arrowleft" size={30} color="white" />

                        </TouchableOpacity>
                        <TouchableOpacity style={styles.box}>
                            <FontAwesome style={{ textAlign: 'center', paddingTop: 5 }} name="bookmark-o" size={30} color="white" />
                        </TouchableOpacity>
                    </View>

                </ImageBackground>



            </View>

            <View style={styles.border}>
                <View style={styles.txt}>
                    <Text style={{ fontSize: 15, fontWeight: '700', color: 'gray' }}>Travel Hacking: How I Travel Twice {`\n`}As For
                        Nearly Nothing </Text>
                </View>
                <View style={styles.str}>
                    <Text style={{ fontSize: 18 }}>⭐⭐⭐⭐</Text>
                    <Text style={{ backgroundColor: '#6d60f8', paddingHorizontal: 30, paddingVertical: 5, color: '#fff' }}>4 Star</Text>
                </View>
                <View style={styles.pic}>
                    <View style={{ flexDirection: 'row', paddingTop: 15, }}>
                        <View style={styles.bximg}><Image style={styles.profile} source={require('../images/profile1.jpg')}></Image></View>
                        <View style={styles.bximg}><Image style={styles.profile} source={require('../images/profile2.jpg')}></Image></View>
                        <View style={styles.bximg}><Image style={styles.profile} source={require('../images/profile1.jpg')}></Image></View>
                        <View style={styles.bximg}><Image style={styles.profile} source={require('../images/profile2.jpg')}></Image></View>
                        <TouchableOpacity style={styles.bximg}><Entypo style={{ padding: 5 }} name="plus" size={30} color="white" /></TouchableOpacity>

                    </View>
                    <Text style={{ paddingTop: 20, fontSize: 18 }}>46 reviews</Text>

                </View>
                <View style={styles.des}>

                    <Text><Text style={{ fontWeight: '600' }}>Description :</Text> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente laborum, cupiditate natus a nulla culpa dicta soluta sint. Nulla, doloremque.
                    </Text>

                </View>
                <Text style={{ paddingTop: 20, fontSize: 16, fontWeight: '600' }}>This Course Includes</Text>
                <View style={styles.cart}>
                    <Text style={{ fontWeight: '500' }}>
                        $ 120.00

                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.btncrt}>
                            Add to Cart</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: .5,


    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 10,
    }
    ,
    box: {
        height: 40,
        width: 40,
        backgroundColor: '#808080a8',

    }
    ,
    border: {
        flex: .5,
        backgroundColor: '#fff',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        paddingHorizontal: 30,
    },
    txt: {

        paddingTop: 30,
    },
    str: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 30
    },
    pic: {
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    bximg: {
        height: 40,
        width: 40,
        backgroundColor: 'gray',
        borderRadius: 50,
        marginRight: -7
    },
    profile: {
        height: 40,
        width: 40,
        borderRadius: 50
    },
    des: {
        paddingTop: 15,

    },
    cart: {
        backgroundColor: '#fff',
        elevation: 5,
        borderRadius: 10,
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingRight: 10,
    },
    btncrt: {
        backgroundColor: '#6d60f8',
        color: 'white',
        textAlign: 'center',
        padding: 10, height: 50,

        width: 150,
        borderRadius: 10,
        fontWeight: '500'

    }
})