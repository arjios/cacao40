import { StatusBar } from "expo-status-bar";
import { Container, Content, MainSplash } from "./styles";
import ButtonSplash from "../../components/ButtonSplash";

export default function Splash({navigation}) {

    return (
        <Container>
            <StatusBar />
            <Content>
                <MainSplash>
                    <ButtonSplash navigation={navigation} />
                </MainSplash>
            </Content>
        </Container>
    );
}