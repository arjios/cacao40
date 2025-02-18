import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

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
    border: 1px solid white;
    height: 100%;
    justify-content: center;
    width: 100%;
`;


export const TextSignup = styled.Text`
    color: #599551;
    font-size: 16px;
    font-weight: normal;
`;

export const LinkSignup = styled.TouchableOpacity`
    align-items: center;
    flex-direction: row;
    justify-content: center;
`;

export const LinkText = styled.Text`
    color: blue;
    font-size: 16px;
    font-weight: bold;
`;