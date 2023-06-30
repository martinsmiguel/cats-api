import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import theme from '../../theme';

export const ModalContainer = styled.View`
  flex: 1;
  position: absolute;
    width: 100%;
    height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 0;
`;

export const ModalContent = styled.View`
  width: 100%;
  max-width: 400px;
  background-color: ${theme.COLORS.BACKGROUND};
  padding: ${RFValue(16)}px;
  border-radius: ${RFValue(8)}px;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

export const ModalTitle = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${theme.FONTS.BOLD};
  margin-bottom: ${RFValue(16)}px;
`;

export const ModalDescription = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${theme.FONTS.REGULAR};
    margin-bottom: ${RFValue(16)}px;
`;

export const ModalInfo = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${RFValue(4)}px;
`;

export const ModalInfoLabel = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${theme.FONTS.BOLD};
  margin-right: ${RFValue(4)}px;
`;

export const ModalInfoText = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${theme.FONTS.REGULAR};
`;

export const ModalCloseButton = styled.TouchableOpacity`
  position: absolute;
  top: ${RFValue(8)}px;
  right: ${RFValue(8)}px;
`;

export const ModalCloseIcon = styled(MaterialCommunityIcons).attrs({
    size: RFValue(24),
})`
  color: ${theme.COLORS.TEXT};
`;