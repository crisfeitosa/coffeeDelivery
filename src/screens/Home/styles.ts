import { css, styled } from 'styled-components/native';
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_900};
`;

export const IntroContainer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  padding: ${RFValue(0)}px ${RFValue(32)}px ${RFValue(137)}px ${RFValue(32)}px;

  position: relative;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BALOO_2.BOLD};
    font-size: ${RFValue(theme.FONT_SIZE.BALOO_2.MD)}px;

    margin-top: ${RFValue(20)}px;
    margin-bottom: ${RFValue(16)}px;
  `}
`;

export const IntroImage = styled.Image`
  position: absolute;
  right: ${RFValue(4)}px;
  bottom: ${RFValue(54)}px;
  width: ${RFValue(83)}px;
  height: ${RFValue(83)}px;
`;
