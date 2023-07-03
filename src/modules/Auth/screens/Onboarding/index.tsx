import React from 'react';
import cat from '../../../../../assets/images/cat.jpeg';
import {
    ButtonText,
    HeaderImage,
    LoginButton,
    LoginContainer,
    TitleText,
    Container,
    SubtitleText
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';

const Onboarding = () => {

    const navigation = useNavigation();

    const handleLogin = () => {
        //@ts-ignore
        navigation.navigate('Login');
    };

    return (
        <Container>
            <HeaderImage source={cat} resizeMode="cover" />
            <LoginContainer>
                <TitleText>Explore as diferentes raças de gatos!</TitleText>
                <SubtitleText>Você sabia que existem cerca de 250 raças
                    de gatos domésticos no mundo? Faça login e descubra!
                </SubtitleText>
                <LoginButton onPress={handleLogin}>
                    <ButtonText>Fazer login</ButtonText>
                </LoginButton>
            </LoginContainer>
        </Container>
    );
};

export default Onboarding;
