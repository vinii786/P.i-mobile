import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Cadastro from '../pages/Cadastro'
import Welcome from '../pages/Welcome'
import Login from '../pages/Login';

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
        </Stack.Navigator>
    );
}