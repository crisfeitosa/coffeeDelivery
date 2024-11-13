import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  height: ${RFValue(222)}px;
  padding: ${RFValue(40)}px ${RFValue(32)}px ${RFValue(32)}px ${RFValue(32)}px;
  gap: ${RFValue(20)}px;

  justify-content: flex-end;
`;