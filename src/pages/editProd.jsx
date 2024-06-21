import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Alert, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';

export default function EditProdutoScreen() {
    const { params } = useRoute();
    const navigation = useNavigation();

    const [nomeProduto, setNomeProduto] = useState(params.produto.nomeProduto);
    const [descricao, setDescricao] = useState(params.produto.descricao);
    const [qtdEstoque, setQtdEstoque] = useState(params.produto.qtdEstoque.toString());
    const [preco, setPreco] = useState(params.produto.preco.toString());

    const handleUpdateProduto = () => {
        const produtoAtualizado = {
            ...params.produto,
            nomeProduto: nomeProduto,
            descricao: descricao,
            qtdEstoque: parseInt(qtdEstoque),
            preco: parseFloat(preco)
        };

        axios.put(`https://safravisionapp.azurewebsites.net/api/Produto/AtualizarProduto?idProduto=${params.produto.idProduto}`, produtoAtualizado)
            .then(response => {
                Alert.alert('Produto atualizado com sucesso!');
                navigation.goBack();
            })
            .catch(error => {
                console.error('Erro ao atualizar produto:', error.message);
                Alert.alert('Erro ao atualizar produto. Tente novamente mais tarde.');
            });
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
        >
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.button}
                >
                    <Image
                        source={require('../assets/img/back.png')}
                        style={styles.buttonImg}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <Text style={styles.text}>Editar Produto</Text>
                <View style={{ width: 45.78 }} />
            </View>

            <ScrollView contentContainerStyle={styles.containerForm}>
                <View>
                    <Text style={styles.textForm}>Produto</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome do produto"
                        placeholderTextColor="#757575"
                        textAlign="left"
                        multiline
                        value={nomeProduto}
                        onChangeText={(text) => setNomeProduto(text)}
                    />
                </View>

                <View>
                    <Text style={styles.textForm}>Descrição</Text>
                    <TextInput
                        style={styles.inputDescricao}
                        placeholder="Descrição do produto"
                        placeholderTextColor="#757575"
                        textAlign="left"
                        multiline
                        value={descricao}
                        onChangeText={(text) => setDescricao(text)}
                    />
                </View>

                <View>
                    <Text style={styles.textForm}>Quantidade (Em KG)</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Quantidade (KG)"
                        placeholderTextColor="#757575"
                        textAlign="left"
                        keyboardType="numeric"
                        value={qtdEstoque}
                        onChangeText={(text) => setQtdEstoque(text)}
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
                        onChangeText={(text) => setPreco(text)}
                    />
                </View>

                <TouchableOpacity
                    style={styles.registprodButton}
                    onPress={handleUpdateProduto}
                >
                    <Text style={styles.inputButton}>
                        Atualizar Produto
                    </Text>
                </TouchableOpacity>
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
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#4B9B69',
        borderRadius: 35,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 10,
        paddingTop: 50,
        paddingBottom: 25
    },
    button: {
        width: 45.78,
        height: 35,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonImg: {
        width: '40%'
    },
    text: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 15,
        color: 'white',
    },
    containerForm: {
        alignItems: 'center',
        paddingHorizontal: 20
    },
    input: {
        width: 350,
        height: 40,
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
        marginBottom: 50,
    },
    inputButton: {
        color: 'white',
        fontFamily: 'Poppins_700Bold',
        margin: 10
    },
});
