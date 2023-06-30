// styles.ts
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../../../theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

export const Container = styled.View`
    flex: 1;
    background-color: ${theme.COLORS.PRIMARY};
`;

export const HeaderImage = styled.Image`
    width: 100%;
    height: ${RFValue(0.5 * Dimensions.get('window').height)}px;
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

export const InputContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  background-color: ${theme.COLORS.BACKGROUND};
  border-radius: 10px;
  padding: ${RFValue(10)}px;
  margin-top: ${RFValue(10)}px;
`;

export const Input = styled.TextInput`
  flex: 1;
  color: ${theme.COLORS.TEXT};
  font-family: ${theme.FONTS.REGULAR};
  font-size: ${RFValue(16)}px;
  margin-left: ${RFValue(10)}px;
`;

export const IconContainer = styled.TouchableOpacity``;

export const IconEmail = styled(MaterialCommunityIcons).attrs({
    name: 'email',
    size: RFValue(24),
    color: theme.COLORS.DISABLED
})``;

export const IconPassword = styled(MaterialCommunityIcons).attrs({
    name: 'lock',
    size: RFValue(24),
    color: theme.COLORS.DISABLED
})``;

export const EyeIcon = styled(MaterialCommunityIcons).attrs({
    size: RFValue(24),
    color: theme.COLORS.DISABLED,
})``;

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    top: ${RFValue(40)}px;
    left: ${RFValue(20)}px;
    width: ${RFValue(80)}px;
    height: ${RFValue(30)}px;
    background-color: ${theme.COLORS.TEXT};
    border-radius: 8px;
    align-items: center;
    justify-content: center;
`;

export const BackButtonText = styled.Text`
    color: ${theme.COLORS.BACKGROUND};
    font-family: ${theme.FONTS.BOLD};
    font-size: ${RFValue(14)}px;
`;
