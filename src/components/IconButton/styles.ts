import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  height: ${RFValue(36)}px;
  width: ${RFValue(36)}px;

  border-radius: ${RFValue(6)}px;

  align-items: center;
  justify-content: center;

  position: relative;
`;