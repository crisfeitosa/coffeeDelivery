import { Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { DefaultTheme, css } from "styled-components/native";

export type CoffeeCardSizeProps = "DEFAULT" | "FOCUSED";

type Props = {
  size: CoffeeCardSizeProps;
}

let SIZE: CoffeeCardSizeProps = 'DEFAULT';

const {width} = Dimensions.get('window');

const containerVariantSizeStyle = (size: CoffeeCardSizeProps) => {
  SIZE = size;

  return {
    DEFAULT: css`
      padding: ${RFValue(72)}px ${RFValue(12)}px ${RFValue(16)}px ${RFValue(12)}px;
      border-radius: ${RFValue(4.8)}px ${RFValue(28.8)}px;
      width: ${RFValue(196.4)}px;
    `,
    FOCUSED: css`
      padding: ${RFValue(96)}px ${RFValue(16)}px ${RFValue(20)}px ${RFValue(16)}px;
      border-radius: ${RFValue(6)}px ${RFValue(36)}px;
      width: ${(width * 0.55)}px;
    `,
  }[size]
}

export const Container = styled.Pressable<Props>`
    /* box-shadow: 0px 1.6px 6.4px 0px rgba(0, 0, 0, 0.05); */
    background-color: ${({ theme }) => theme.COLORS.GRAY_800};
    margin: 0 ${RFValue(16)}px;

    position: relative;

    ${({size}) => containerVariantSizeStyle(size)};
`;

const contentVariantSizeStyle = (size: CoffeeCardSizeProps) => {
  return {
    DEFAULT: css`
      gap: ${RFValue(12)}px;
    `,
    FOCUSED: css`
      gap: ${RFValue(14)}px;
    `,
  }[size]
}

export const Content = styled.View`
  align-items: center;
  margin-top: ${RFValue(10)}px;

  ${() => contentVariantSizeStyle(SIZE)}
`;

const infoVariantSizeStyle = (size: CoffeeCardSizeProps) => {
  return {
    DEFAULT: css`
      gap: ${RFValue(3.2)}px;
      padding-bottom: ${RFValue(3.2)}px;
    `,
    FOCUSED: css`
      gap: ${RFValue(4)}px;
      padding-bottom: ${RFValue(4)}px;
    `,
  }[size]
}

export const Info = styled.View`
  ${() => infoVariantSizeStyle(SIZE)}
`;

const nameVariantSizeStyle = (size: CoffeeCardSizeProps, theme: DefaultTheme) => {
  return {
    DEFAULT: css`
      font-size: ${RFValue(theme.FONT_SIZE.BALOO_2.XS)}px;
    `,
    FOCUSED: css`
      font-size: ${RFValue(theme.FONT_SIZE.BALOO_2.MD)}px;
    `,
  }[size]
}

export const Name = styled.Text`
  ${({ theme }) => css`
    text-align: center;
    font-family: ${theme.FONT_FAMILY.BALOO_2.BOLD};
    color: ${theme.COLORS.GRAY_200};
  `}

  ${({theme}) => nameVariantSizeStyle(SIZE, theme)}
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    text-align: center;
    font-family: ${theme.FONT_FAMILY.ROBOTO.REGULAR};
    color: ${theme.COLORS.GRAY_400};
    font-size: ${SIZE === 'DEFAULT'
      ? RFValue(theme.FONT_SIZE.ROBOTO.TAG)
      : RFValue(theme.FONT_SIZE.ROBOTO.XS)}px;
  `}
`;

export const Price = styled.View`
  flex-direction: row;
  align-items: baseline;
  gap: ${RFValue(4)}px;
`;

export const Currency = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.ROBOTO.REGULAR};
    color: ${theme.COLORS.YELLOW_DARK};
    font-size: ${ SIZE === 'DEFAULT' 
      ? RFValue(theme.FONT_SIZE.ROBOTO.TAG) 
      : RFValue(theme.FONT_SIZE.ROBOTO.SM)}px;
  `}
`;

export const Value = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BALOO_2.BOLD};
    color: ${theme.COLORS.YELLOW_DARK};
    font-size: ${SIZE === 'DEFAULT' 
      ? RFValue(theme.FONT_SIZE.BALOO_2.MD)
      : RFValue(theme.FONT_SIZE.BALOO_2.LG)}px;
  `}
`;

const imageVariantSizeStyle = (size: CoffeeCardSizeProps) => {
  return {
    DEFAULT: css`
      height: ${RFValue(64)}px;
      width: ${RFValue(64)}px;
      top: -${RFValue(82)}px;
    `,
    FOCUSED: css`
      height: ${RFValue(120)}px;
      width: ${RFValue(120)}px;
      top: -${RFValue(136)}px;
    `,
  }[size];
};

export const Image = styled.Image`
  position: absolute;

  ${() => imageVariantSizeStyle(SIZE)}
`;