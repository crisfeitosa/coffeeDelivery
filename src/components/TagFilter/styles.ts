import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

type Props = {
  isActive?: boolean
}

export const Container = styled.Pressable<Props>`
  border-radius: ${RFValue(100)}px;
  padding: ${RFValue(6)}px ${RFValue(12)}px;

  border: ${RFValue(1)}px solid ${({theme}) => theme.COLORS.PURPLE};
  
  justify-content: center;
  align-items: center;

  margin-right: ${RFValue(8)}px;

  ${({theme, isActive}) => css`
    background-color: ${isActive ? theme.COLORS.PURPLE : theme.COLORS.WHITE};
    `
  }
`;

export const Label = styled.Text<Props>`
  text-transform: uppercase;

  ${({ theme, isActive }) => css`
    color: ${isActive ? theme.COLORS.WHITE : theme.COLORS.PURPLE};
    font-family: ${theme.FONT_FAMILY.ROBOTO.BOLD};
    font-size: ${RFValue(theme.FONT_SIZE.ROBOTO.TAG)}px;
  `}
`;