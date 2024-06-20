import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Alert } from "react-native";
import { Image } from "react-native-animatable";
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { StatusBar } from "expo-status-bar";
import axios from 'axios';

export default function Clientes() {
    const [clientes, setClientes] = useState([]);
    const isFocused = useIsFocused();

    const carregarClientes = () => {
        axios
            .get('https://safravisionapp.azurewebsites.net/api/Cliente/BuscarTodosClientes')
            .then(response => {
                setClientes(response.data);
            })
            .catch(error => {
                console.error('Erro ao carregar clientes:', error.message);
            });
    };

    useEffect(() => {
        carregarClientes();
    }, [isFocused]);

    const { navigate } = useNavigation();

    const handleNavigateToCadastroDeCliente = () => {
        navigate('CadastClient'); 
    };

    const handleNavigateToHome = () => {
        navigate('Home');
    };

    const handleDeleteCliente = (id) => {
        axios
            .delete(`https://safravisionapp.azurewebsites.net/api/Cliente/DeletarCliente?idCliente=${id}`)
            .then(response => {
                Alert.alert('Cliente deletado com sucesso!');
                carregarClientes();
            })
            .catch(error => {
                console.error('Erro ao deletar cliente:', error.message);
                Alert.alert('Erro ao deletar cliente. Tente novamente mais tarde.');
            });
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
                        CLIENTES
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
                            placeholder="Buscar clientes"
                            placeholderTextColor="#757575"
                            textAlign="left"
                        />
                    </View>
                </View>
            </View>

            <ScrollView contentContainerStyle={styles.scrollView}>
                <TouchableOpacity
                    style={styles.registClientButton}
                    onPress={handleNavigateToCadastroDeCliente}
                >
                    <Text style={styles.inputBotton}>
                        Registrar cliente
                    </Text>
                </TouchableOpacity>
                
                <View>
                    {clientes.map((cliente, index) => (
                        <View key={index} style={styles.clienteContainer}>
                            <View style={styles.contTittle}>
                                <Text style={styles.clienteTittle}>Detalhes do cliente</Text>
                            </View>
                            <View style={styles.contClientInfo}>
                                <Text style={styles.clienteTextTittle}>Nome</Text>
                                <Text style={{ paddingBottom: 10 }}>{cliente.nomeCliente}</Text>

                                <Text style={styles.clienteTextTittle}>Descrição</Text>
                                <Text style={{ paddingBottom: 10 }}>{cliente.descricao}</Text>

                                <Text style={styles.clienteTextTittle}>Telefone</Text>
                                <Text style={{ paddingBottom: 10 }}>{cliente.numeroTelefone}</Text>

                                <TouchableOpacity
                                    style={styles.deleteButton}
                                    onPress={() => handleDeleteCliente(cliente.idCliente)}
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
        marginBottom: 10,
        paddingTop: 55,
        paddingBottom: 20,
    },
    headerContent: {
        width: '90%',
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
        marginBottom: 15,
    },
    input: {
        flex: 1,
        color: '#000', 
    },
    registClientButton: {
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
    clienteContainer: {
        backgroundColor: 'rgba(75, 155, 105, 0.19)',
        minWidth: 353,
        maxHeight: 380,
        flex: 1,
        padding: 20,
        margin: 15,
        borderRadius: 10,
    },
    contTittle: {
        alignItems: 'center',
    },
    contClientInfo:{
        padding: 20,
        paddingLeft: 10
    },
    clienteTittle:{
        fontFamily: 'Poppins_400Regular',
        fontSize: 21,
        fontWeight: 'bold'
    },
    clienteTextTittle: {
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
    scrollView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    buscaContainer: {
        paddingTop: 15
    },
});
