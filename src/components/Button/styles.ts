import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export type ButtonColorStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  color?: ButtonColorStyleProps;
}

export const Container = styled.Pressable<Props>`
  width: '100%';
  padding: ${RFValue(12)}px ${RFValue(8)}px;
  border-radius: ${RFValue(6)}px;
  background-color: ${({ theme, color = "PRIMARY" }) => color === "PRIMARY" ? theme.COLORS.PURPLE_DARK : theme.COLORS.YELLOW_DARK};

  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.ROBOTO.BOLD};
    color: ${theme.COLORS.WHITE};
    font-size: ${RFValue(theme.FONT_SIZE.ROBOTO.BUTTON)}px;
    text-transform: uppercase;
  `}
`;