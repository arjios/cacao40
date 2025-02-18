import styled from 'styled-components/native';
import { ImageBackground } from 'react-native';

export const Container = styled.SafeAreaView`
    align-items: center;
    flex: 1;
    justify-content: flex-start;
    width: 100%;
`; 

export const Content = styled.View`
    align-items: center;
    border: 1px solid blue;
    height: 100%;
    justify-content: center;
    width: 100%;
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



