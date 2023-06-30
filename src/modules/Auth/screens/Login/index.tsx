import React, { useState } from 'react';
import cat from '../../../../../assets/images/cat.jpeg';
import {
    HeaderImage,
    LoginContainer,
    Container,
    InputContainer,
    Input,
    IconContainer,
    LoginButton,
    ButtonText,
    IconEmail,
    IconPassword,
    EyeIcon,
    BackButton,
    BackButtonText
} from './styles';
import { useNavigation } from '@react-navigation/native';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const navigation = useNavigation();

    const handleOnboarding = () => {
        //@ts-ignore
        navigation.navigate('Onboarding');
    };

    return (
        <Container>
            <HeaderImage source={cat} resizeMode="cover" />
            <BackButton onPress={handleOnboarding}>
                <BackButtonText>Voltar</BackButtonText>
            </BackButton>
            <LoginContainer>
                <InputContainer>
                    <IconContainer>
                        <IconEmail name="email" />
                    </IconContainer>
                    <Input
                        placeholder="E-mail"
                        value={email}
                        onChangeText={setEmail}
                        autoCapitalize="none"
                        keyboardType="email-address"
                    />
                </InputContainer>
                <InputContainer>
                    <IconContainer>
                        <IconPassword name='lock' />
                    </IconContainer>
                    <Input
                        placeholder="Senha"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={!showPassword}
                    />
                    <IconContainer>
                        <EyeIcon name={showPassword ? 'eye-off' : 'eye'} />
                    </IconContainer>
                </InputContainer>
                <LoginButton>
                    <ButtonText>Login</ButtonText>
                </LoginButton>
            </LoginContainer>
        </Container>
    );
};

export default Login;
