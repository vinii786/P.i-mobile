import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Image, Alert } from "react-native";
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { StatusBar } from "expo-status-bar";
import axios from "axios";
import { format } from 'date-fns'; // Importação da função format

export default function Vendas() {
    const [vendas, setVendas] = useState([]);
    const isFocused = useIsFocused();
    const navigation = useNavigation();

    const carregarVendas = () => {
        axios
            .get('https://safravisionapp.azurewebsites.net/api/Venda/BuscarTodasVendas')
            .then(response => {
                setVendas(response.data);
            })
            .catch(error => {
                console.error('Erro ao carregar vendas:', error.message);
            });
    };

    useEffect(() => {
        carregarVendas();
    }, [isFocused]);

    const handleNavigateToCadastVendas = () => {
        navigation.navigate('CadastVendas');
    };

    const handleNavigateToHome = () => {
        navigation.navigate('Home');
    };

    const calcularValorTotal = (preco, qtdVendida) => {
        return (preco * qtdVendida).toFixed(2);
    };

    const handleDeleteVenda = (idVenda) => {
        axios
            .delete(`https://safravisionapp.azurewebsites.net/api/Venda/DeletarVenda?idVenda=${idVenda}`)
            .then(response => {
                Alert.alert('Venda deletada com sucesso!');
                carregarVendas();
            })
            .catch(error => {
                console.error('Erro ao deletar venda:', error.message);
                Alert.alert('Erro ao deletar venda. Tente novamente mais tarde.');
            });
    };

    const formatarDataVenda = (dataVenda) => {
        return format(new Date(dataVenda), "dd/MM/yyyy HH:mm:ss");
    };

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor="#4B9B69"
                barStyle="light-content"
            />
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <TouchableOpacity style={styles.button} onPress={handleNavigateToHome}>
                        <Image source={require('../assets/img/back.png')} style={styles.buttonImg} resizeMode="contain" />
                    </TouchableOpacity>
                    <Text style={styles.text}>VENDAS</Text>
                    <Image source={require('../assets/img/notificacao.png')} style={styles.imageNotificacao} resizeMode="contain" />
                </View>
                <View style={styles.buscaContainer}>
                    <View style={styles.buscaButton}>
                        <Image source={require('../assets/img/lupaBlack.png')} style={{ marginRight: 10 }} resizeMode="contain" />
                        <TextInput style={styles.input} placeholder="Buscar vendas" placeholderTextColor="#757575" textAlign="left" />
                    </View>
                </View>
            </View>

            <ScrollView contentContainerStyle={styles.scrollView}>
                <TouchableOpacity style={styles.registprodButton} onPress={handleNavigateToCadastVendas}>
                    <Text style={styles.inputBotton}>Registrar venda</Text>
                </TouchableOpacity>

                <View>
                    {vendas.map((venda, index) => (
                        <View key={index} style={styles.vendaContainer}>
                            <View style={styles.contTittle}>
                                <Text style={styles.vendaTittle}>Detalhes da venda</Text>
                            </View>
                            <View style={styles.contVendaInfo}>
                                <Text style={styles.vendaTextTittle}>Nome do cliente</Text>
                                <Text style={{ paddingBottom: 10 }}>{venda.clienteVenda}</Text>

                                <Text style={styles.vendaTextTittle}>Produto venda</Text>
                                <Text style={{ paddingBottom: 10 }}>{venda.produtoVenda}</Text>

                                <Text style={styles.vendaTextTittle}>Descrição</Text>
                                <Text style={styles.vendaTextTittle}>{venda.descricaoVenda}</Text>

                                <Text style={styles.vendaTextTittle}>Quantidade vendida(Em KG)</Text>
                                <Text style={styles.vendaTextTittle}>{venda.qtdVendida} KG</Text>

                                <Text style={styles.vendaTextTittle}>Valor total</Text>
                                <Text style={styles.vendaTextTittle}>{calcularValorTotal(venda.preco, venda.qtdVendida)} R$</Text>

                                <Text style={styles.vendaTextTittle}>Data venda</Text>
                                <Text style={styles.vendaTextTittle}>{formatarDataVenda(venda.dataVenda)}</Text>

                                <TouchableOpacity
                                    style={styles.deleteButton}
                                    onPress={() => handleDeleteVenda(venda.idVenda)}
                                >
                                    <Text style={styles.deleteButtonText}>Apagar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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
        alignItems: 'center',
        borderRadius: 20,
        margin: 20,
        paddingVertical: 15,
        paddingHorizontal: 20,
    },
    inputBotton: {
        color: 'white',
        fontFamily: 'Poppins_700Bold',
        margin: 10,
        fontSize: 16,
    },

    vendaContainer: {
        backgroundColor: 'rgba(75, 155, 105, 0.19)',
        minWidth: 353,
        minHeight: 380,
        flex: 1,
        padding: 20,
        margin: 15,
        borderRadius: 10,
    },
    contTittle: {
        alignItems: 'center',
    },
    contVendaInfo: {
        padding: 20,
        paddingLeft: 10,
    },
    vendaTittle: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 21,
        fontWeight: 'bold',
    },
    vendaTextTittle: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 16,
        marginBottom: 8,
    },
    deleteButton: {
        backgroundColor: 'red',
        alignItems: 'center',
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
    },
    deleteButtonText: {
        color: 'white',
        fontFamily: 'Poppins_400Regular',
        fontSize: 16,
    },
});
