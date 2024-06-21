import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Cadastro from '../pages/Cadastro'
import Welcome from '../pages/Welcome'
import Login from '../pages/Login';
import Home from '../pages/Home'
import Produtos from '../pages/Produtos'
import Clientes from '../pages/Clientes';
import Vendas from '../pages/Vendas';
import CadastProd from '../pages/CadastProd';
import CadastClient from '../pages/CadastClient'
import CadastVendas from '../pages/CadastVendas'
import EditProdutoScreen from '../pages/editProd';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name= "Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name= "Cadastro"
                component={Cadastro}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name= "Login"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name= "Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name= "Produtos"
                component={Produtos}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name= "Clientes"
                component={Clientes}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name= "Vendas"
                component={Vendas}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name= "CadastProd"
                component={CadastProd}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name= "CadastClient"
                component={CadastClient}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name= "CadastVendas"
                component={CadastVendas}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name= "EditProdutoScreen"
                component={EditProdutoScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}