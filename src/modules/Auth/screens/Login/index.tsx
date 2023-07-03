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
    BackButtonText,
    IconButton,
    KeyboardAvoidingContainer
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../../../contexts/lib/Auth';
import { Alert, Platform } from 'react-native';

const Login = () => {

    const { login, error } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    };

    const toggleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleSubmit = async () => {
        const success = await login(email, password);
        if (!success) {
            Alert.alert('Erro', 'E-mail ou senha incorretos.');
        }
    };

    return (
        <KeyboardAvoidingContainer
  behavior={Platform.OS === 'ios' ? 'padding' : undefined}
>
        <Container>
            <HeaderImage source={cat} resizeMode="cover" />
            <BackButton onPress={handleGoBack}>
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
                    <IconButton onPress={toggleShowPassword} >
                        <EyeIcon name={showPassword ? 'eye-off' : 'eye'} />
                    </IconButton>
                </InputContainer>
                <LoginButton onPress={handleSubmit}>
                    <ButtonText>Login</ButtonText>
                </LoginButton>
            </LoginContainer>
        </Container>
        </KeyboardAvoidingContainer>
    );
};

export default Login;
