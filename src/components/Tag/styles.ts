import { RFValue } from "react-native-responsive-fontsize";
import styled, { DefaultTheme, css } from "styled-components/native";
import { CoffeeCardSizeProps } from "@components/CoffeeCard/styles";

export type TagColorStyleProps = "primary" | "secondary";

type Props = {
  color: TagColorStyleProps;
  size: CoffeeCardSizeProps;
}

const containerVariantSizeStyle = (size: CoffeeCardSizeProps, theme: DefaultTheme) => {
  return {
    DEFAULT: css`
      border-radius: ${RFValue(80)}px;
      font-size: ${RFValue(8)}px;
      padding: ${RFValue(3)}px ${RFValue(6)}px;
    `,
    FOCUSED: css`
      border-radius: ${RFValue(100)}px;
      font-size: ${RFValue(theme.FONT_SIZE.ROBOTO.TAG)}px;
      padding: ${RFValue(4)}px ${RFValue(8)}px;
    `,
  }[size]
}

export const Container = styled.Text<Props>`
  ${({ theme, color}) => css`
    background-color: ${color === 'primary' ? theme.COLORS.PURPLE_LIGHT : theme.COLORS.GRAY_200};

    text-transform: uppercase;

    font-family: ${theme.FONT_FAMILY.ROBOTO.BOLD};
    color: ${color === 'primary' ? theme.COLORS.PURPLE : theme.COLORS.WHITE};
  `}

  ${({size, theme}) => containerVariantSizeStyle(size, theme)};
`;