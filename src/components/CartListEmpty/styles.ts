import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  padding: ${RFValue(64)}px;
  gap: ${RFValue(32)}px;
`;

export const NoItemsInfo = styled.View`
  align-items: center;
  gap: ${RFValue(12)}px;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.ROBOTO.REGULAR};
    font-size: ${RFValue(theme.FONT_SIZE.ROBOTO.SM)}px;
    color: ${theme.COLORS.GRAY_400};
  `}
`;