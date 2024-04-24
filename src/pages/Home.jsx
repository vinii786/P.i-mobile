import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import {
    View,
    Text,
    StyleSheet,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Image } from "react-native-animatable";

export default function Login(){
    return(
        <View style={styles.container}>
            <StatusBar
                backgroundColor="#4B9B69"
                barStyle={false}
            />
            <View style={styles.header}>
                <Image
                    source={require('../assets/img/image.png')}
                    resizeMode="contain"
                    style={styles.image}
                />
                <Text style={styles.text}>
                    SAFRA VISION
                </Text>

                <View style={styles.headerIcons}>
                    <Image
                        source={require('../assets/img/notificacao.png')}
                        resizeMode="contain"
                        style={styles.imageNotificacao}
                    />
                    <Image
                        source={require('../assets/img/profile.png')}
                        resizeMode="contain"
                        style={styles.imageNotificacao}
                    />
                </View>
            </View>

            <View style={styles.cardContainer}>
                <View style={styles.cardProdutos}>
                    <Image 
                    source={require('../assets/img/icon1.png')}
                    style={styles.iconsImg}
                    />
                    <Text style={styles.text}> Produtos </Text>
                </View>
                <View style={styles.cardProdutos}>
                    <Image 
                    source={require('../assets/img/icon2.png')}
                    style={styles.iconsImg}
                    />
                    <Text style={styles.text}> Clientes </Text>
                </View>
                <View style={styles.cardProdutos}>
                    <Image 
                    source={require('../assets/img/icon3.png')}
                    style={styles.iconsImg}
                    />
                    <Text style={styles.text}> Vendas </Text>
                </View>
            </View>
        </View>
    )
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
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 30,
        backgroundColor: '#4B9B69',
        paddingTop: 38,
        paddingBottom: 20,
        borderRadius: 35
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
        fontSize: 20,
        color: 'white',
    },
    headerIcons: {
        display: 'flex',
        flexDirection: 'row',
    },
    input: {
        textAlignVertical: 'center',
        flex: 1,
        paddingHorizontal: 20,
        color: 'white',
    },
    inputBusca: {
        borderRadius: 20,
        alignItems: 'center',
        width: 340,
        height: 40,
        top: 40,
        backgroundColor: '#4B9B69',
        flexDirection: 'row',
    },
    lupaIcon: {
        marginLeft: 8,
    },
    cardContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 40,
    },
    cardProdutos:{
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: '#4B9B69',
        paddingVertical: 20,
        paddingHorizontal: 50,
        borderRadius: 20
    },
    iconsImg:{
        width: 90,
        height: 90,
        
    },
    text: {
        fontFamily: 'Poppins_400Regular',
        fontWeight: 'bold',
        fontSize: 20,
        color:'white'
    }
});
