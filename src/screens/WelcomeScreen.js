import React from 'react'
import { StyleSheet, Text, View, StatusBar, FlatList } from 'react-native'
import { WelcomeCard } from '../components'
import { Colors, General } from '../contants'
import { Display } from '../utils'



//continuar pagination


const WelcomeScreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle='dark-content'
                backgroundColor={Colors.DEFAULT_WHITE}
                translucent
            />
            
            <View tyle={styles.WelcomeListContainer}>
                <FlatList
                    data={General.WELCOME_CONTENTS}
                    keyExtractor={item => item.title}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    overScrollMode='never'
                    renderItem={({ item }) => <WelcomeCard {...item} />}
                />
            </View>
           
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.DEFAULT_WHITE
    },
   
})

export default WelcomeScreen;