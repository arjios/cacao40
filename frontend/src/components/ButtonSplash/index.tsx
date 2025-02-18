import React  from 'react'
import { Feather } from "@expo/vector-icons";
import { SplashButton, SplashButtonLogin } from "./styles";

export default function ButtonSplash({navigation}: any) {

    function handleLogin() {
        return(
            navigation.navigate('Login')
        );
    }

    return (
        <SplashButton>
            <SplashButtonLogin onPress = {handleLogin}> 
                <Feather name='log-in' size={32} color='#000000' />
            </SplashButtonLogin>
        </SplashButton>
    );
}

