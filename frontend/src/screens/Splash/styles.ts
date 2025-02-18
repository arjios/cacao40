import styled from 'styled-components/native';
import { ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.SafeAreaView`
    align-items: center;
    flex: 1;
    height: 100%;
    justify-content: flex-start;
    margin-top: 32px;
    width: 100%;
`; 

export const Content = styled(LinearGradient).attrs({
    colors: ['#599551', '#8B4513']
})`
    align-items: center;
    border: 1px solid white;
    height: 100%;
    justify-content: center;
    width: 98%;
`;

export const MainSplash = styled(ImageBackground).attrs({
    resizeMode: 'cover',
    source: require('../../../assets/splash.png')
})`
    align-items: center;
    height: 100%;
    justify-content: flex-end;
    margin: 16px;
    width: 100%
`;
