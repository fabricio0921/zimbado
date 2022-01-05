import React from 'react'
import { View, Text, StyleSheet, StatusBar, TextInput } from 'react-native'
import { Separator } from '../components'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from "react-native-vector-icons/Feather"

const SigninScreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar />
            <Separator />
            <View>
                <Ionicons />
                <Text>Login</Text>
            </View>
            <Text>Bem-Vindo</Text>
            <Text>Entre com seu nome de usuário e senha e divirta-se pedindo comida</Text>
            <View>
                <View>
                    <Feather/>
                    <TextInput/>
                </View>
            </View>
            <Separator />
            <View>
                <View>
                    <Feather/>
                    <TextInput/>
                    <Feather/>
                </View>
            </View>
            <Text></Text>
            <View>
                <Text></Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    }
})

export default SigninScreen;
