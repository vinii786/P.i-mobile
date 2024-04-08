import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Image } from "react-native-animatable";

export default function Login(){
    return(
        <View style={styles.container}>
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

            <View style={styles.inputBusca}>
                    <TextInput
                        style={styles.input}
                        placeholder="Procurar por categorias "
                        placeholderTextColor="#FFF"
                    />
                </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 35,
        alignItems: 'center'
      },
      header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 30
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
        color: '#4B9B69',
      },
      headerIcons: {
        display: 'flex',
        flexDirection: 'row',
      },
      input: {
        textAlign: 'center',
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
    }
});