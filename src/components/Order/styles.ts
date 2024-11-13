import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  padding: ${RFValue(28)}px ${RFValue(32)}px ${RFValue(40)}px ${RFValue(32)}px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};

  gap: ${RFValue(20)}px;
`;

export const Row = styled.View`
  flex-direction: row;
  gap: ${RFValue(4)}px;
  align-items: center;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    flex: 1;
    color: ${theme.COLORS.GRAY_200};
    font-size: ${RFValue(theme.FONT_SIZE.ROBOTO.MD)}px;
    font-family: ${theme.FONT_FAMILY.ROBOTO.REGULAR};
  `}
`;

export const Value = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${RFValue(theme.FONT_SIZE.BALOO_2.MD)}px;
    font-family: ${theme.FONT_FAMILY.ROBOTO.BOLD};
  `}
`;