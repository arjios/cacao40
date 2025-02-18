import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    align-items: center;
    flex: 1;
    justify-content: flex-start;
    width: 100%;
`; 

export const Content = styled(LinearGradient).attrs({
    colors: ['#599551', '#8B4513']
})`
    align-items: center;
    height: 90%;
    justify-content: center;
    width: 90%;
`;

export const ContentText = styled.Text`
    font-size: 32px;
    font-weight: bold;
`;