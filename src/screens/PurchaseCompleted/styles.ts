import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_900};
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BALOO_2.BOLD};
    color: ${theme.COLORS.YELLOW_DARK};
    font-size: ${RFValue(theme.FONT_SIZE.BALOO_2.LG)}px;
  `}
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    margin-top: ${RFValue(8)}px;
    max-width: ${RFValue(260)}px;

    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.ROBOTO.REGULAR};
    font-size: ${RFValue(theme.FONT_SIZE.ROBOTO.SM)}px;
    text-align: center;
  `}
`;