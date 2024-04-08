import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Image } from "react-native-animatable";

export default function Login(){

    const { navigate }= useNavigation();
    const handleNavigateToHome = () => {
        navigate('Home'); 
      };
    return(
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <StatusBar
                backgroundColor="#fff"
                barStyle={false}
            />

            <ScrollView>
                <View style={styles.backButton}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigate('Welcome')}
                    >
                        <Image
                            source={require('../assets/img/back.png')}
                            style={styles.buttonImg}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.img}>
                    <Image
                        source={require('../assets/img/image.png')}
                        style={styles.image}
                        resizeMode="contain"
                    />
                    <Text style={styles.text}>
                        Bem vindo de volta!
                    </Text>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputText}>
                        E-mail
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Seu e-mail"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputText}>
                        Senha
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite sua senha"
                    />
                </View>

            <View style={styles.cont3}>
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={ handleNavigateToHome }
                >
                    <Text style={styles.inputBotton}>
                        Entrar
                    </Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    image: {
        width: 176,
        height: 176,
    },
    text: {
        fontFamily: 'Poppins_700Bold',
        textAlign:'center',
        fontWeight: 'bold',
        fontSize: 25,
        paddingBottom: 50
    },
    button: {
        backgroundColor: '#4B9B69',
        width: 45.78,
        height: 35,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
        shadowColor: '#000',
    },
    img: {
        alignItems: 'center',
        paddingTop: 40
    },
    backButton: {
        alignItems: 'flex-start',
        padding: 10
    },
    buttonImg:{
        width: '40%'
    },
    input: {
        borderBottomWidth: 1,
        width: 338,
        height: 40
    },
    inputContainer: {
        padding: 8,
        color: 'white'
    },
    cont3:{
        flex: 3,
        alignItems: 'center',
        paddingTop: 100
    },
    submitButton:{ 
        backgroundColor: '#4B9B69',
        borderRadius: 20,
        height: 70,
        width: 240,
        justifyContent: 'center'
    },
    inputBotton: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Poppins_400Regular'
    }
})
