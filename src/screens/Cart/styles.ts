import { Swipeable } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_900};
`;

export const SwipeableCard = styled(Swipeable).attrs(({ theme }) => ({
  containerStyle: {
    width: '100%',
    backgroundColor: theme.COLORS.RED_LIGHT,
    borderRadius: RFValue(6),
  },
}))``;

export const SwipeableRemoveContainer = styled.View`
  width: 100%;
  border-radius: ${RFValue(6)}px;
  background-color: ${({ theme }) => theme.COLORS.RED_LIGHT};
  align-items: flex-start;
  justify-content: center;
  padding-left: ${RFValue(32)}px;
`; 