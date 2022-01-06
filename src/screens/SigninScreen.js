import React from 'react'
import { View, Text, StyleSheet, StatusBar, TextInput, Image } from 'react-native'
import { Separator } from '../components'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from "react-native-vector-icons/Feather"
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Colors, Fonts, Images } from '../contants'
import { Display } from '../utils'



const SigninScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle='dark-content'
                backgroundColor={Colors.DEFAULT_WHITE}
                translucent
            />
            <Separator height={StatusBar.currentHeight} />
            <View style={styles.headerContainer}>
                <Ionicons name="chevron-back-outline" size={30} onPress={() => navigation.goBack()} />
                <Text style={styles.headerTitle}>Login</Text>
            </View>
            <Text style={styles.title}>Bem-Vindo</Text>
            <Text style={styles.content}>Entre com seu nome de usuário e senha e divirta-se pedindo comida</Text>
            <View style={styles.inputContainer}>
                <View style={styles.inputSubContainer}>
                    <Feather name='user' size={22} color={Colors.DEFAULT_GREY} style={{ marginRight: 10 }} />
                    <TextInput
                        placeholder='Nome de Usuário'
                        placeholderTextColor={Colors.DEFAULT_GREY}
                        selectionColor={Colors.DEFAULT_GREY}
                        style={styles.inputText}
                    />
                </View>
            </View>
            <Separator height={15} />
            <View style={styles.inputContainer}>
                <View style={styles.inputSubContainer}>
                    <Feather name='lock' size={22} color={Colors.DEFAULT_GREY} style={{ marginRight: 10 }} />
                    <TextInput
                        secureTextEntry={true}
                        placeholder='Senha'
                        placeholderTextColor={Colors.DEFAULT_GREY}
                        selectionColor={Colors.DEFAULT_GREY}
                        style={styles.inputText}
                    />
                    <Feather name='eye' size={22} color={Colors.DEFAULT_GREY} style={{ marginRight: 10 }} />
                </View>
            </View>
            <Text></Text>
            <View style={styles.forgotPasswordContainer}>
                <View>
                    <Text style={styles.remeberMeText}>
                        Lembre-me
                    </Text>
                </View>
                <Text style={styles.forgotPasswordText}>Esqueceu a Senha</Text>
            </View>
            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity >
            <View style={styles.logoutContainer}>
                <Text style={styles.accountText}>Não possui uma conta?</Text>
                <Text style={styles.signupText}>Cadastrar</Text>
            </View>
            <Text style={styles.orText}>OU</Text>
            <TouchableOpacity style={styles.facebookButton} >
                <View style={styles.socialButtonContanier}>
                    <View style={styles.signinButtonLogoContainer}>
                        <Image source={Images.FACEBOOK} style={styles.signinButtonLogo} />
                    </View>
                    <Text style={styles.socialSigninButtonText}>Conecte com Facebook</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.googleButton}>
                <View style={styles.socialButtonContanier}>
                    <View style={styles.signinButtonLogoContainer}>
                        <Image source={Images.GOOGLE} style={styles.signinButtonLogo} />
                    </View>
                    <Text style={styles.socialSigninButtonText}>Conecte com Google</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.DEFAULT_WHITE

    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    headerTitle: {
        fontSize: 20,
        fontFamily: Fonts.POPPINS_MEDIUM,
        lineHeight: 20 * 1.4,
        width: Display.setWidth(80),
        textAlign: 'center'
    },
    title: {
        fontSize: 20,
        fontFamily: Fonts.POPPINS_MEDIUM,
        lineHeight: 20 * 1.4,
        marginTop: 50,
        marginBottom: 10,
        marginHorizontal: 20

    },
    content: {
        fontSize: 20,
        fontFamily: Fonts.POPPINS_MEDIUM,
        marginTop: 10,
        marginBottom: 20,
        marginHorizontal: 20
    },
    inputContainer: {
        backgroundColor: Colors.LIGHT_GREY,
        paddingHorizontal: 10,
        marginHorizontal: 20,
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: Colors.LIGHT_GREY2,
        justifyContent: 'center'

    },
    inputSubContainer: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    inputText: {
        fontSize: 18,
        textAlignVertical: 'center',
        padding: 0,
        height: Display.setHeight(6),
        color: Colors.DEFAULT_BLACK,
        flex: 1
    },
    forgotPasswordContainer: {
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    remeberMeText: {
        marginLeft: 10,
        fontSize: 12,
        lineHeight: 12 * 1.4,
        color: Colors.DEFAULT_GREY,
        fontFamily: Fonts.POPPINS_MEDIUM
    },
    forgotPasswordText: {
        fontSize: 12,
        lineHeight: 12 * 1.4,
        color: Colors.DEFAULT_GREEN,
        fontFamily: Fonts.POPPINS_BOLD

    },
    loginButton: {
        backgroundColor: Colors.DEFAULT_GREEN,
        borderRadius: 8,
        marginHorizontal: 20,
        height: Display.setHeight(6),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    loginButtonText: {
        fontSize: 18,
        lineHeight: 18 * 1.4,
        color: Colors.DEFAULT_WHITE,
        fontFamily: Fonts.POPPINS_MEDIUM

    },
    logoutContainer: {
        marginHorizontal: 20,
        justifyContent: 'center',
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    accountText: {
        fontSize: 13,
        lineHeight: 13 * 1.4,
        color: Colors.DEFAULT_BLACK,
        fontFamily: Fonts.POPPINS_MEDIUM
    },
    signupText: {
        fontSize: 13,
        lineHeight: 13 * 1.4,
        color: Colors.DEFAULT_GREEN,
        fontFamily: Fonts.POPPINS_MEDIUM,
        marginLeft: 5
    },
    orText: {
        fontSize: 15,
        lineHeight: 15 * 1.4,
        color: Colors.DEFAULT_BLACK,
        fontFamily: Fonts.POPPINS_MEDIUM,
        marginLeft: 5,
        alignSelf: 'center'
    },
    facebookButton: {
        backgroundColor: Colors.FABEBOOK_BLUE,
        paddingVertical: 15,
        marginHorizontal: 20,
        borderRadius: 8,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    googleButton: {

        backgroundColor: Colors.GOOGLE_BLUE,
        paddingVertical: 15,
        marginHorizontal: 20,
        borderRadius: 8,

        justifyContent: 'center',
        alignItems: 'center'

    },
    signinButtonLogo: {
        height: 18,
        width: 18
    },
    signinButtonLogoContainer: {
        backgroundColor: Colors.DEFAULT_WHITE,
        padding: 2,
        borderRadius: 3,
        position:'absolute',
        left:25
    },
    socialButtonContanier:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:'100%'
    },
    socialSigninButtonText:{
        fontSize: 13,
        lineHeight: 13 * 1.4,
        color: Colors.DEFAULT_WHITE,
        fontFamily: Fonts.POPPINS_MEDIUM
    }
})

export default SigninScreen;
