import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { MagnifyingGlass } from "phosphor-react-native";

import { Container, TextInput } from "./styles";

type Props = TextInputProps & {}

export function SearchInput({...rest}: Props) {
  const { COLORS } = useTheme()
  
  return (
    <Container>
      <MagnifyingGlass size={RFValue(16)} color={COLORS.GRAY_400} />

      <TextInput
        placeholderTextColor={COLORS.GRAY_400} 
        {...rest}
      />
    </Container>
  );
}