import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.PURPLE};
  border-radius: ${RFValue(24)}px;
  width: ${RFValue(24)}px;
  height: ${RFValue(24)}px;
  padding-top: ${RFValue(2)}px;

  align-items: center;
  justify-content: center;

  position: absolute;
  right: -${RFValue(12)}px;
  top: -${RFValue(12)}px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.ROBOTO.REGULAR};
    font-size: ${RFValue(theme.FONT_SIZE.ROBOTO.XS)}px;
    text-align: center;
  `}
`;