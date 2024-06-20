import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, ScrollView, Platform, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from "expo-status-bar";
import axios from "axios";

export default function CadastVendas() {
    const { navigate } = useNavigation();
    const [comprador, setComprador] = useState("");
    const [produto, setProduto] = useState("");
    const [descricao, setDescricao] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [preco, setPreco] = useState("");

    const handlePriceChange = (text) => {
        const numericText = text.replace(/[^0-9]/g, "");
        setPreco(`R$ ${numericText}`);
    };

    const handleNavigateToVendas = () => {
        navigate('Vendas');
    };

    const handleComplete = () => {
        if (!comprador || !produto || !descricao || !quantidade || !preco) {
            Alert.alert("Erro", "Por favor, preencha todos os campos.");
        } else {
            const novaVenda = {
                clienteVenda: comprador,
                produtoVenda: produto,
                descricaoVenda: descricao,
                qtdVendida: quantidade,
                preco: parseFloat(preco.replace('R$ ', '')),
                dataVenda: new Date().toISOString() // Adicionando a data atual no formato ISO string
            };
    
            axios
                .post('https://safravisionapp.azurewebsites.net/api/Venda/InserirVenda', novaVenda)
                .then(response => {
                    Alert.alert('Venda registrada com sucesso!');
                    navigate('Vendas');
                })
                .catch(error => {
                    console.error('Erro ao registrar venda:', error.message);
                    Alert.alert('Erro ao registrar venda. Tente novamente mais tarde.');
                });
    
            setComprador("");
            setProduto("");
            setDescricao("");
            setQuantidade("");
            setPreco("");
        }
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
        >
            <StatusBar
                backgroundColor="#4B9B69"
                barStyle="light-content"
            />
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <View style={styles.backButton}>
                        <TouchableOpacity
                            onPress={handleNavigateToVendas}
                            style={styles.button}
                        >
                            <Image
                                source={require('../assets/img/back.png')}
                                style={styles.buttonImg}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.title}>
                    <Text style={styles.text}>
                        Digite as informações da venda
                    </Text>
                </View>
            </View>

            <ScrollView contentContainerStyle={styles.containerForm}>
                <View>
                    <Text style={styles.textForm}>Comprador</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome do comprador"
                        placeholderTextColor="#757575"
                        textAlign="left"
                        value={comprador}
                        onChangeText={(text) => setComprador(text)}
                    />
                </View>

                <View>
                    <Text style={styles.textForm}>Produto</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome do produto"
                        placeholderTextColor="#757575"
                        textAlign="left"
                        value={produto}
                        onChangeText={(text) => setProduto(text)}
                    />
                </View>

                <View>
                    <Text style={styles.textForm}>Descrição</Text>
                    <TextInput
                        style={styles.inputDescricao}
                        placeholder="Descrição da venda"
                        placeholderTextColor="#757575"
                        textAlign="left"
                        multiline
                        value={descricao}
                        onChangeText={(text) => setDescricao(text)}
                    />
                </View>

                <View>
                    <Text style={styles.textForm}>Quantidade(Em KG)</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Quantidade(KG)"
                        placeholderTextColor="#757575"
                        textAlign="left"
                        keyboardType="numeric"
                        value={quantidade}
                        onChangeText={(text) => setQuantidade(text)}
                    />
                </View>

                <View>
                    <Text style={styles.textForm}>Preço</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Preço"
                        placeholderTextColor="#757575"
                        textAlign="left"
                        keyboardType="numeric"
                        value={preco}
                        onChangeText={handlePriceChange}
                    />
                </View>

                <View style={styles.registerButtonContainer}>
                    <TouchableOpacity
                        style={styles.registprodButton}
                        onPress={handleComplete}
                    >
                        <Text style={styles.inputButton}>
                            Registrar venda
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
        paddingTop: 55,
        paddingBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
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
        width: '40%'
    },
    backButton: {
        paddingRight: 290
    },
    title: {
        marginBottom: 35
    },
    containerForm: {
        alignItems: 'center',
        paddingHorizontal: 20
    },
    input: {
        width: 350,
        height: 40,
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
        marginBottom: 35,
        textAlignVertical: 'top',
        paddingVertical: 10
    },
    inputDescricao: {
        width: 350,
        height: 90,
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
        marginBottom: 35,
        textAlignVertical: 'top',
        paddingVertical: 10
    },
    textForm: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 17,
    },
    registprodButton: {
        backgroundColor: '#4B9B69',
        width: 340,
        alignItems: "center",
        borderRadius: 20,
        paddingVertical: 15,
    },
    inputButton: {
        color: 'white',
        fontFamily: 'Poppins_700Bold',
        margin: 10
    },
    registerButtonContainer: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 50,
    },
});
