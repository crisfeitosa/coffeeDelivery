import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.GRAY_800};
  border: ${RFValue(1)}px solid ${({ theme }) => theme.COLORS.GRAY_700};
  padding: ${RFValue(16)}px ${RFValue(16)}px ${RFValue(13)}px ${RFValue(8)}px;

  border-radius: ${RFValue(6)}px ${RFValue(36)}px ${RFValue(6)}px ${RFValue(36)}px;

  flex-direction: row;
  gap: ${RFValue(12)}px;
`;

export const Image = styled.Image`
  margin-top: -${RFValue(32)}px;
  height: ${RFValue(96)}px;
  width: ${RFValue(96)}px;
`;  

export const Content = styled.View`
  flex: 1;
  gap: ${RFValue(8)}px;
`;

export const Info = styled.View`
  gap: ${RFValue(4)}px;
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BALOO_2.BOLD};
    font-size: ${RFValue(theme.FONT_SIZE.BALOO_2.SM)}px;
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    text-align: left;
    font-family: ${theme.FONT_FAMILY.ROBOTO.REGULAR};
    color: ${theme.COLORS.GRAY_400};
    font-size: ${RFValue(theme.FONT_SIZE.ROBOTO.XS)}px;
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
    font-size: ${RFValue(theme.FONT_SIZE.ROBOTO.SM)}px;
  `}
`;

export const Value = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BALOO_2.BOLD};
    color: ${theme.COLORS.YELLOW_DARK};
    font-size: ${RFValue(theme.FONT_SIZE.BALOO_2.MD)}px;
  `}
`;