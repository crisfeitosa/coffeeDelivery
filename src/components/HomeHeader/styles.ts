import Animated from "react-native-reanimated";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  padding: 0 ${RFValue(32)}px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  z-index: 10;
`;

export const Location = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const City = styled(Animated.Text)`
  color: ${({ theme }) => theme.COLORS.GRAY_900};
  font-size: ${({ theme }) => RFValue(theme.FONT_SIZE.ROBOTO.SM)}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO.REGULAR};
  margin-left: ${RFValue(4)}px; 
`;