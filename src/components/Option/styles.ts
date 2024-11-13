import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

type Props = {
  isActive: boolean;
}

export const Container = styled.Pressable<Props>`
  border-radius: ${RFValue(6)}px;

  background-color: ${({ theme, isActive }) => isActive ? theme.COLORS.WHITE : theme.COLORS.GRAY_700};
  border-width: ${({ isActive }) => isActive ? RFValue(1) : 0}px;
  border-color: ${({ theme, isActive }) => isActive ? theme.COLORS.PURPLE : 'transparent'};

  height: ${RFValue(40)}px;
  flex: 1;

  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text<Props>`
  ${({ theme, isActive }) => css`
    font-family: ${theme.FONT_FAMILY.ROBOTO.REGULAR};
    color: ${isActive ? theme.COLORS.PURPLE : theme.COLORS.GRAY_300};
    font-size: ${RFValue(theme.FONT_SIZE.ROBOTO.SM)}px;
  `}
`;