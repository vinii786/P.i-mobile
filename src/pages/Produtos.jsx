import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { Image } from "react-native-animatable";
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from "expo-status-bar";

export default function Produtos() {
    const { navigate }= useNavigation();
    const handleNavigateToHome = () => {
        navigate('Home'); 
    };

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor="#4B9B69"
                barStyle={false}
            />
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <View style={styles.backButton}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={handleNavigateToHome}>
                            <Image
                                source={require('../assets/img/back.png')}
                                style={styles.buttonImg}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.text}>
                        PRODUTOS
                    </Text>
                    <View style={styles.headerIcons}>
                        <Image
                            source={require('../assets/img/notificacao.png')}
                            resizeMode="contain"
                            style={styles.imageNotificacao}
                        />
                    </View>
                </View>

                <View style={styles.buscaContainer}>
                    <View style={styles.buscaButton}>
                        <Image
                            source={require('../assets/img/lupaBlack.png')}
                            resizeMode="contain"
                            style={{ marginRight: 10 }} 
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Buscar produtos"
                            placeholderTextColor="#757575"
                            textAlign="left"
                        />
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 0,
        alignItems: 'center'
    },
    header: {
        width: '100%',
        backgroundColor: '#4B9B69',
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerContent: {
        width: '90%',
        paddingTop: 55,
        paddingBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    imageNotificacao: {
        width: 30,
        height: 30
    },
    text: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 15,
        color: 'white',
    },
    headerIcons: {
        flexDirection: 'row',
    },
    button: {
        backgroundColor: 'white',
        width: 45.78,
        height: 35,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
        shadowColor: '#000',
    },
    buttonImg: {
        width: '40%'
    },
    buscaButton: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 10, 
        height: 40,
        backgroundColor: '#86C49D',
        width: '90%',
    },
    input: {
        flex: 1,
        color: '#000', 
    },
    buscaContainer: {
        paddingBottom: 15
    }
});
