import { Alert } from "react-native";
import { ButtonContainer, ButtonTitle } from "./styles";

type buttonProps = {
    title?: string,
}

export default function ButtonLogin({title ='Acessar'}: buttonProps) {

    function handleLogin(){
        Alert.alert('Press: Botão de acesso pressionado')
    }

    return(
        <ButtonContainer onPress={handleLogin}>
            <ButtonTitle >
                {title}
            </ButtonTitle>
        </ButtonContainer>
    );
}