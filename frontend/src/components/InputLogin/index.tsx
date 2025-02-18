import { Feather, Ionicons } from "@expo/vector-icons"
import { IconContainer, InputContainer, InputContent, InputField, InputFieldContainer } from "./styles";
import { KeyboardTypeOptions } from "react-native";
import { useState } from "react";

type inputProps = {
    placeholder?: string,
    keyboardType?: KeyboardTypeOptions,
    nameIcon?: string,
    sizeIcon: number,
    colorIcon: string,
    secureType?: boolean
}


export default function InputLogin({ placeholder, nameIcon, 
    sizeIcon, colorIcon = 'black', secureType, ...rest }: inputProps) {

    const [text, setText] = useState('')

    return (
        <InputContainer>
            <InputContent>
                <IconContainer>
                    <Feather name={nameIcon} size={sizeIcon} color={colorIcon} />
                </IconContainer>
                <InputFieldContainer>
                    <InputField
                        editable
                        placeholder={placeholder}
                        placeholderTextColor="#FFFFFF"
                        value={text}
                        onChangeText={setText}
                        secureTextEntry= {secureType}
                        {...rest}
                    />
                </InputFieldContainer>
            </InputContent>
        </InputContainer>
    );
}