import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  padding: ${RFValue(16)}px ${RFValue(32)}px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_900};

  border-bottom-width: ${RFValue(1)}px;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_700};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: ${RFValue(20)}px;
`;

export const ProductImage = styled.Image`
  width: ${RFValue(64)}px;
  height: ${RFValue(64)}px;
`;

export const Info = styled.View`
  flex: 1;
  gap: ${RFValue(8)}px;;
`;

export const About = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  gap: ${RFValue(8)}px;
`;

export const Title = styled.View`
  flex: 1;
  gap: ${RFValue(2)}px;
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.ROBOTO.REGULAR};
    color: ${theme.COLORS.GRAY_100};
    font-size: ${RFValue(theme.FONT_SIZE.ROBOTO.MD)}px;
  `}
`;

export const Size = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.ROBOTO.REGULAR};
    color: ${theme.COLORS.GRAY_400};
    font-size: ${RFValue(theme.FONT_SIZE.ROBOTO.SM)}px;
  `}
`;

export const ItemValue = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BALOO_2.BOLD};
    color: ${theme.COLORS.GRAY_100};
    font-size: ${RFValue(theme.FONT_SIZE.BALOO_2.SM)}px;
  `}
`;

export const Actions = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const RemoveButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700} ;
  padding: ${RFValue(8)}px;

  border-radius: ${RFValue(6)}px;

  align-items: center;
  justify-content: center; 
`;