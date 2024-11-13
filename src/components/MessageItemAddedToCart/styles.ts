import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Container = styled.Pressable`
  width: 100%;
  padding: ${RFValue(28)}px ${RFValue(32)}px ${RFValue(32)}px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Content = styled.View`
  flex-direction: row;
  gap: ${RFValue(20)}px;
  justify-content: space-between;
  align-items: center;
`;

export const CartIconContainer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_500} ;
  border-radius: ${RFValue(6)}px;
  padding: ${RFValue(8)}px;
`;

export const Message = styled.Text`
  ${({ theme }) => css` 
    max-width: ${RFValue(250)}px;
    color: ${theme.COLORS.GRAY_400};
    font-family: ${theme.FONT_FAMILY.ROBOTO.REGULAR};
    font-size: ${RFValue(theme.FONT_SIZE.ROBOTO.SM)}px;
  `}
`;

export const Highlight = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_400};
    font-family: ${theme.FONT_FAMILY.ROBOTO.BOLD};
    font-size: ${RFValue(theme.FONT_SIZE.ROBOTO.SM)}px;
  `}
`;

export const ShowCartButtonLink = styled.TouchableOpacity`
  flex-direction: row;
  gap: ${RFValue(4)}px;
`;

export const Label = styled.Text`
  ${({ theme }) => css` 
    color: ${theme.COLORS.PURPLE};
    font-family: ${theme.FONT_FAMILY.ROBOTO.BOLD};
    font-size: ${RFValue(theme.FONT_SIZE.ROBOTO.XS)}px;
  `}
`;