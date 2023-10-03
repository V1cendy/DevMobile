import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import Login from '../../modules/Perfil/screens/Perfil/Perfil';
import Login from '../../modules/login/screens/Login/Login';
import Home from '../../modules/Home/screens/Home/Home';
import Cart from '../../modules/Cart/screens/Cart/Cart';
import Iphone from '../../modules/profile/Iphone';
import Samsung from '../../modules/profile/Samsung';
import Nokia from '../../modules/profile/Nokia';

const Stk = createNativeStackNavigator();

const Stack = () =>{
    return(
        <Stk.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
            <Stk.Screen name='Login' component={Login}/>
            <Stk.Screen name='Home' component={Home}/>
            <Stk.Screen name='Cart' component={Cart}/>
            <Stk.Screen name='Iphone' component={Iphone}/>
            <Stk.Screen name='Samsung' component={Samsung}/>
            <Stk.Screen name='Nokia' component={Nokia}/>
        </Stk.Navigator>
    )
}

export default Stack;