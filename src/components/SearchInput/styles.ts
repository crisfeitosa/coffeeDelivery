import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  border-radius: ${RFValue(4)}px;
  padding: ${RFValue(12)}px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_200};

  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-size: ${({ theme }) => RFValue(theme.FONT_SIZE.ROBOTO.SM)}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO.REGULAR};
  
  margin-left: ${RFValue(8)}px;
`;