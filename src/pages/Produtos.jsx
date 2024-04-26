import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "react-native-animatable";
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from "expo-status-bar";

export default function Produtos() {
    useNavigation
    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor="#4B9B69"
                barStyle={false}
            />
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <View style={styles.backButton}>
                        <TouchableOpacity style={styles.button}>
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
    },
    headerContent: {
        paddingTop: 55,
        paddingBottom: 20,
        borderRadius: 35,
        gap: 70,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4B9B69',
        display: 'flex',
        flexDirection: 'row'
    },
    image: {
        width: 65,
        height: 65,
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
        display: 'flex',
        flexDirection: 'row',
    },
    backButton: {
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
});
