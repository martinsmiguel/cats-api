import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import theme from "../../../../theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: ${RFValue(16)}px;
`;

export const Header = styled.View`
  height: 20%;
  background-color: ${theme.COLORS.PRIMARY};
  padding: ${RFValue(16)}px;
  justify-content: center;
`;

export const ViewRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${RFValue(8)}px;
`;

export const LogoutButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const IconLogout = styled(MaterialCommunityIcons).attrs({
  size: RFValue(30),
})`
  color: ${theme.COLORS.TERCIARY};
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${theme.FONTS.BOLD};
  margin: ${RFValue(10)}px;
  text-align: center;
  color: ${theme.COLORS.TEXT};
`;

export const CatItem = styled.TouchableOpacity`
  flex: 0.5;
  margin: ${RFValue(8)}px;
  background-color: ${theme.COLORS.BACKGROUND};
  border-radius: ${RFValue(8)}px;
  overflow: hidden;
`;

export const CatImage = styled.Image`
  width: 100%;
  height: ${RFValue(200)}px;
  border-radius: ${RFValue(8)}px;
`;

export const FavoriteButton = styled.TouchableOpacity`
  position: absolute;
  top: ${RFValue(8)}px;
  right: ${RFValue(8)}px;
  z-index: 1;
`;

export const IconFavorite = styled(MaterialCommunityIcons).attrs({
  size: RFValue(24),
})`
  color: ${theme.COLORS.ALERT};
`;

export const CatList = styled.FlatList`
  flex: 1;
`;

export const TextInputStyled = styled.TextInput`
  height: ${RFValue(40)}px;
  margin-bottom: ${RFValue(16)}px;
  padding: ${RFValue(8)}px;
  border-radius: ${RFValue(8)}px;
  background-color: ${theme.COLORS.BACKGROUND};
  font-family: ${theme.FONTS.REGULAR};
  color: ${theme.COLORS.TEXT};
  shadow-color: #000;
  shadow-opacity: 0.05;
  shadow-radius: 4px;
  elevation: 3;
`;
