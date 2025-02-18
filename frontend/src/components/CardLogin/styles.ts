import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";


export const CardContainerLogin = styled(LinearGradient).attrs({
    colors: ['#8B4513', '#599551' ]
})`
    align-items: center;
    background-color: white;
    border-radius: 30%;
    box-shadow: 1px 2px 9px #858585;
    height: 70%;
    justify-content: space-around;
    padding-top: 16px;
    width: 90%;
`
export const CardTitle = styled.Text`
    color: #599551;
    font-size: 32px;
    font-weight: bold;

`

export const CardContent = styled.View`
    align-items: center;
    flex-direction: row;
    justify-content: center;
`