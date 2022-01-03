import React from 'react'
import { View, Text, StatusBar, Image, StyleSheet } from 'react-native'
import { Colors, Images, Fonts } from '../contants'
import { Display } from '../utils'


const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar 
            barStyle="light-content"
            backgroundColor={Colors.DEFAULT_GREEN}
            translucent
            />
            <Image
            source={Images.PLATE}
            style={styles.image}
            />
            <Text style={styles.titletext}>Zimbado</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.DEFAULT_GREEN
    },
    image:{
        height: Display.setHeight(30),
        width: Display.setWidth(65)
    },
    titletext:{
        color:Colors.DEFAULT_WHITE,
        fontSize:32,
        fontFamily:Fonts.POPPINS_LIGHT
    }
})

export default SplashScreen;