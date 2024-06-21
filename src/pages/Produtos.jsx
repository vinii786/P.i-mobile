import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Alert } from "react-native";
import { Image } from "react-native-animatable";
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { StatusBar } from "expo-status-bar";
import axios from 'axios';

export default function Produtos() {
    const [produtos, setProdutos] = useState([]);
    const isFocused = useIsFocused();

    const carregarProdutos = () => {
        axios
            .get('https://safravisionapp.azurewebsites.net/api/Produto/BuscarTodosProdutos')
            .then(response => {
                setProdutos(response.data);
            })
            .catch(error => {
                console.error('Erro ao carregar produtos:', error.message);
            });
    };

    useEffect(() => {
        carregarProdutos();
    }, [isFocused]);

    const { navigate } = useNavigation();

    const handleNavigateToCadastroDeProdutos = () => {
        navigate('CadastProd'); 
    };

    const handleNavigateToHome = () => {
        navigate('Home');
    };

    const calcularValorTotal = (preco, qtdEstoque) => {
        return (preco * qtdEstoque).toFixed(2);
    };

    const handleDeleteProduto = (id) => {
        axios
            .delete(`https://safravisionapp.azurewebsites.net/api/Produto/DeletarProduto?idProduto=${id}`)
            .then(response => {
                Alert.alert('Produto deletado com sucesso!');
                carregarProdutos();
            })
            .catch(error => {
                console.error('Erro ao deletar produto:', error.message);
                Alert.alert('Erro ao deletar produto. Tente novamente mais tarde.');
            });
    };

    const handleEditarProduto = (produto) => {
        navigate('EditProdutoScreen', { produto });
    };

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor="#4B9B69"
                barStyle="light-content"
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

            <ScrollView contentContainerStyle={styles.scrollView}>
                <TouchableOpacity
                    style={styles.registprodButton}
                    onPress={handleNavigateToCadastroDeProdutos}
                >
                    <Text style={styles.inputBotton}>
                        Registrar produto
                    </Text>
                </TouchableOpacity>
                
                <View>
                    {produtos.map((produto, index) => (
                        <View key={index} style={styles.produtoContainer}>
                            <View style={styles.contTittle}>
                                <Text style={styles.produtoTittle}>Detalhes do produto</Text>
                            </View>
                            <View style={styles.contProdInfo}>
                                <Text style={styles.produtoTextTittlee}>Nome do produto</Text>
                                <Text style={{ paddingBottom: 10 }}>{produto.nomeProduto}</Text>

                                <Text style={styles.produtoTextTittlee}>Descrição</Text>
                                <Text style={{ paddingBottom: 10 }}>{produto.descricao}</Text>

                                <Text style={styles.produtoTextTittlee}>Quantidade</Text>
                                <Text style={styles.produtoTextTittle}>{produto.qtdEstoque} KG</Text>

                                <Text style={styles.produtoTextTittlee}>Preço</Text>
                                <Text style={styles.produtoTextTittle}>{produto.preco} R$ por KG</Text>

                                <Text style={styles.produtoTextTittlee}>Valor total do produto (KG x Preço)</Text>
                                <Text style={styles.produtoTextTittle}>{`${calcularValorTotal(produto.preco, produto.qtdEstoque)} R$`}</Text>


                                <TouchableOpacity
                                    style={styles.deleteButton}
                                    onPress={() => handleDeleteProduto(produto.idProduto)}
                                >
                                    <Text style={styles.deleteButtonText}>Apagar</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.editButton}
                                    onPress={() => handleEditarProduto(produto)}
                                >
                                    <Text style={styles.editButtonText}>Editar</Text>
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
        paddingTop: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        width: '100%',
        backgroundColor: '#4B9B69',
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
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
    },
    registprodButton: {
        backgroundColor: '#4B9B69',
        alignItems: "center",
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

    produtoContainer: {
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
    contProdInfo:{
        padding: 20,
        paddingLeft: 10
    },
    produtoTittle:{
        fontFamily: 'Poppins_400Regular',
        fontSize: 21,
        fontWeight: 'bold'
    },
    produtoTextTittle: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 17,
        marginBottom: 8,
    },
    produtoTextTittlee: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 17,
        marginBottom: 8,
        fontWeight: 'bold'
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
    editButton: {
        backgroundColor: '#4B9B69',
        alignItems: 'center',
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
    },
    editButtonText: {
        color: 'white',
        fontFamily: 'Poppins_400Regular',
        fontSize: 16,
    },
});
