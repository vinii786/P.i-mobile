import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from "react-native";
import { useNavigation, useIsFocused  } from '@react-navigation/native';
import { StatusBar } from "expo-status-bar";
import axios from "axios";

export default function Vendas() {
    const [vendas, setVendas] = useState([]);
    const isFocused = useIsFocused();
    const navigation = useNavigation();

    const carregarProdutos = () => {
        axios
            .get('https://safravisionapp.azurewebsites.net/api/Venda/BuscarTodasVendas')
            .then(response => {
                setProdutos(response.data);
            })
            .catch(error => {
                console.error('Erro ao carregar produtos:', error.message);
            });
    };
    const handleNavigateToCadastVendas = () => {
        navigation.navigate('CadastVendas');
    };

    const handleNavigateToHome = () => {
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#4B9B69" barStyle="light-content" />
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <TouchableOpacity style={styles.button} onPress={handleNavigateToHome}>
                        <Image source={require('../assets/img/back.png')} style={styles.buttonImg} resizeMode="contain" />
                    </TouchableOpacity>
                    <Text style={styles.text}>VENDAS</Text>
                    <Image source={require('../assets/img/notificacao.png')} resizeMode="contain" style={styles.imageNotificacao} />
                </View>
                <View style={styles.buscaContainer}>
                    <View style={styles.buscaButton}>
                        <Image source={require('../assets/img/lupaBlack.png')} resizeMode="contain" style={{ marginRight: 10 }} />
                        <TextInput style={styles.input} placeholder="Buscar vendas" placeholderTextColor="#757575" textAlign="left" />
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.registprodButton} onPress={handleNavigateToCadastVendas}>
                <Text style={styles.inputBotton}>Registrar vendas</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    header: {
        width: '100%',
        backgroundColor: '#4B9B69',
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
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
        height: 30,
    },
    text: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 15,
        color: 'white',
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
        width: '40%',
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
        paddingBottom: 15,
    },
    registprodButton: {
        backgroundColor: '#4B9B69',
        width: 340,
        alignItems: 'center',
        borderRadius: 20,
        marginVertical: 10,
    },
    inputBotton: {
        color: 'white',
        fontFamily: 'Poppins_700Bold',
        margin: 10,
    },
    productInfoContainer: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    productContainer: {
        marginBottom: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        width: '90%',
    },
    productText: {
        fontSize: 16,
        marginBottom: 5,
    },
    noProductText: {
        fontSize: 16,
        color: '#757575',
    },
});
