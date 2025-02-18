import CardLogin from "../../components/CardLogin";
import { Container, Content, LinkSignup, LinkText, TextSignup } from "./styles";


export default function Login({navigation}: any) {

    function handleSignup() {
        navigation.navigate('Signup')
    }

    return (
        <Container>
            <Content>
                <CardLogin />
                <TextSignup>
                    Esqueceu a senha?
                </TextSignup>
                <LinkSignup onPress={handleSignup}>
                    <TextSignup>
                        Recupere a senha
                    </TextSignup>
                    <LinkText>
                        {': aqui'}
                    </LinkText>
                </LinkSignup>
            </Content>
        </Container>
    );
}