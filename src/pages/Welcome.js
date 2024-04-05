import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const navigation = useNavigation();

  const handleNavigateToCadastro = () => {
    navigation.navigate('Cadastro'); 
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/img/homeIMG.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.text}>
        BEM VINDO AO SAFRA VISION
      </Text>

      <View style={styles.buttons}>
        <View style={styles.entrar}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Entrar')}>
            <Text style={styles.buttonText}>
              Entrar
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={handleNavigateToCadastro}>
            <Text style={styles.buttonText}>
              Cadastre-se
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center'
  },
  image: {
    width: '100%',
    height: 400, 
    marginBottom: 1, 
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20, 
  },
  buttons:{
    alignItems:'center',
  },
  button: {
    backgroundColor: '#4B9B69',
    width: 350,
    height: 80,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10, 
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  entrar: {
    paddingTop: 30,
    paddingBottom: 25,
  },
});
