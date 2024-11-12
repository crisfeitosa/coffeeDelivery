import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: -${RFValue(113)}px;
`;

export const Highlight = styled.FlatList.attrs(() => ({
  contentContainerStyle: {
    paddingTop: RFValue(38),
    paddingLeft: RFValue(16),
    paddingBottom: RFValue(30.5),
    alignItems: 'center'
  }
}))``;
