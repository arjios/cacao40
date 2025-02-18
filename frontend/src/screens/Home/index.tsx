import { StatusBar } from "expo-status-bar";
import { Container, Content, MainSplash } from "./styles";
import ButtonSplash from "../../components/ButtonSplash";

export default function Home() {

    return (
        <Container>
            <StatusBar />
            <Content>
                <MainSplash>
                    <ButtonSplash />
                </MainSplash>
            </Content>
        </Container>
    );
}