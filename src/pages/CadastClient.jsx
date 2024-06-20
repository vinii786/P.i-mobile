import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from "expo-status-bar";

export default function CadastClient() {
    const { navigate }= useNavigation();

    const handleNavigateToCadastClient = () => {
        navigate('CadastClient');
    }

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
                        onPress={handleNavigateToCadastClient}
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
                        Digite as informações do cliente
                    </Text>
                </View>
            </View>

            <ScrollView contentContainerStyle={styles.containerForm}>
                <View>
                    <Text style={styles.textForm}>Nome do cliente</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome do cliente"
                        placeholderTextColor="#757575"
                        textAlign="left"
                        multiline
                    />
                </View>

                <View>
                    <Text style={styles.textForm}>Descrição</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Descrição do cliente"
                        placeholderTextColor="#757575"
                        textAlign="left"
                        multiline
                    />
                </View>

                <View>
                    <Text style={styles.textForm}>Numero de telefone</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Numero de telefone"
                        placeholderTextColor="#757575"
                        textAlign="left"
                        multiline
                    />
                </View>
            </ScrollView>

            <View style={styles.registerButtonContainer}>
                <TouchableOpacity
                    style={styles.registprodButton}
                >
                    <Text style={styles.inputButton}>
                        Registrar produto
                    </Text>
                </TouchableOpacity>
            </View>
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
