import { RFValue } from 'react-native-responsive-fontsize';
import { styled } from 'styled-components/native';
import theme from '../../../../theme';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`;

export const TextTitle = styled.Text`
    font-size: ${RFValue(24)}px;
    font-family: ${theme.FONTS.BOLD};
    color: ${theme.COLORS.SECONDARY2};
`;
