import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../../../theme';
import { Dimensions, Platform } from 'react-native';

const windowHeight = Dimensions.get('screen').height;

export const Container = styled.View`
    flex: 1;
    background-color: ${theme.COLORS.PRIMARY};
    justify-content: flex-end;
`;

export const HeaderImage = styled.Image`
    width: 100%;
    height: ${Platform.select({
        ios: RFValue(0.5 * windowHeight),
        android: RFValue(0.61 * windowHeight),
    })}px;
`;

export const LoginContainer = styled.View`
    width: 100%;
    padding: ${RFValue(20)}px;
    background-color: ${theme.COLORS.PRIMARY};
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    margin-top: -30px;
    align-items: center;
`;

export const TitleText = styled.Text`
    font-size: ${RFValue(20)}px;
    font-family: ${theme.FONTS.BLACK};
    margin-bottom: ${RFValue(20)}px;
    text-align: center;
    color: ${theme.COLORS.TEXT};
`;

export const SubtitleText = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${theme.FONTS.REGULAR};
    margin-bottom: ${RFValue(20)}px;
    text-align: justify;
    color: ${theme.COLORS.TEXT_LIGHT};
`;

export const LoginButton = styled.TouchableOpacity`
    width: 100%;
    height: ${RFValue(50)}px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${theme.COLORS.TEXT};
    padding: ${RFValue(10)}px ${RFValue(5)}px;
    border-radius: 10px;
    margin-top: ${RFValue(10)}px;
`;

export const ButtonText = styled.Text`
    color: ${theme.COLORS.BACKGROUND};
    font-family: ${theme.FONTS.BOLD};
    font-size: ${RFValue(16)}px;
    margin-left: ${RFValue(10)}px;
`;