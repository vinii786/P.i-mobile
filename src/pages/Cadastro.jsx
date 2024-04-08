import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Image } from "react-native-animatable";

export default function Cadastro(){
    const { navigate }= useNavigation();
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");

    const handleNavigateToCadastro = () => {
      if (senha !== confirmarSenha) {
        Alert.alert("Erro", "As senhas não coincidem");
        return;
      }
    };

    return(
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <StatusBar
          backgroundColor="#4B9B69"
          barStyle={false}
        />
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.textArea}>
              <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigate('Welcome')}>
                  <Image
                      source={require('../assets/img/back.png')}
                      style={styles.image}
                      resizeMode="contain"
                  />
              </TouchableOpacity>
          </View>

          <View style={styles.textbox}>
              <Text style={styles.text}> DIGITE SUAS INFORMAÇÕES </Text>
          </View>

          <View style={styles.infos}>
              <View style={styles.inputContainer}>
                  <Text style={styles.inputText}>
                      Nome
                  </Text>
                  <TextInput
                      style={styles.input}
                      placeholder="Seu nome completo"
                  />
              </View>
              <View style={styles.inputContainer}>
                  <Text style={styles.inputText}>
                      E-mail
                  </Text>
                  <TextInput
                      style={styles.input}
                      placeholder="Seu e-mail"
                  />
              </View>
              <View style={styles.inputContainer}>
                  <Text style={styles.inputText}>
                      Número de telefone
                  </Text>
                  <TextInput
                      style={styles.input}
                      placeholder="(XX) XXXXX-XXXX"
                  />
              </View>
              <View style={styles.inputContainer}>
                  <Text style={styles.inputText}>
                      Senha
                  </Text>
                  <TextInput
                      style={styles.input}
                      placeholder="Digite sua senha"
                      secureTextEntry={true}
                      onChangeText={text => setSenha(text)}
                  />
              </View>
              <View style={styles.inputContainer}>
                  <Text style={styles.inputText}>
                      Confirmar Senha
                  </Text>
                  <TextInput
                      style={styles.input}
                      placeholder="Confirme sua senha"
                      secureTextEntry={true}
                      onChangeText={text => setConfirmarSenha(text)}
                  />
              </View>
              <View style={styles.cont3}>
                  <TouchableOpacity
                      style={styles.submitButton}
                      onPress={handleNavigateToCadastro}
                  >
                      <Text style={styles.inputBotton}>
                          Cadastre-se
                      </Text>
                  </TouchableOpacity>
              </View>
          </View> 
        </ScrollView>
      </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4B9B69',
    },
    scrollView: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    textbox:{
        padding: 40,
        alignItems: 'center'
    },
    text: {
        fontFamily: 'Poppins_400Regular',
        fontWeight: 'bold',
        fontSize: 20,
        color:'white'
    },
    inputText:{
        fontFamily: 'Poppins_400Regular',
        fontSize: 18,
    },
    button: {
        backgroundColor: '#fff',
        width: 45.78,
        height: 35,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
        shadowColor: '#000',
    },
    textArea:{
        paddingTop: 50,
        alignItems: 'flex-start',
        paddingLeft: 25
    },
    image:{
        width: '40%'
    },
    infos:{
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20, 
        borderTopRightRadius: 20,
        padding: 10,
        alignItems: 'center',
        elevation: 40,
        shadowColor: 'black'
    },
    input: {
        borderBottomWidth: 1,
        width: 338,
        height: 40
    },
    inputContainer: {
        padding: 8,
        color: 'white'
    },
    cont3:{
        flex: 3,
        justifyContent: 'center'
    },
    submitButton:{ 
        backgroundColor: '#4B9B69',
        borderRadius: 20,
        height: 70,
        width: 240,
        justifyContent: 'center'
    },
    inputBotton: {
        color: 'white',
        textAlign: 'center',
    }
});
