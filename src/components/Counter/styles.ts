import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export type CounterStyleProps = {
  showBorders?: boolean; 
}

type Props = CounterStyleProps;

export const Container = styled.View<Props>`
  border-radius: ${RFValue(6)}px;
  flex-direction: row;

  align-items: center;
  gap: ${RFValue(4)}px;
    
  border: ${RFValue(1)}px solid ${({ theme, showBorders = false }) => showBorders ? theme.COLORS.GRAY_600 : 'transparent'};
`;

export const CounterValue = styled.Text`
 ${({ theme }) => css`
    width: ${RFValue(20)}px;
    text-align: center;
    font-family: ${theme.FONT_FAMILY.ROBOTO.REGULAR};
    color: ${theme.COLORS.GRAY_100};
    font-size: ${RFValue(theme.FONT_SIZE.ROBOTO.MD)}px;
  `}
`;