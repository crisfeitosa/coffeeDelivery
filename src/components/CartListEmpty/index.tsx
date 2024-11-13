import { useNavigation } from "@react-navigation/native";
import { RFValue } from "react-native-responsive-fontsize";
import { ShoppingCart } from "phosphor-react-native";

import { useTheme } from "styled-components/native";
import { Button } from "@components/Button";

import { Container, NoItemsInfo, Text } from "./styles";

export const CartListEmpty: React.FC = () => {
  const { COLORS } = useTheme();
  const navigation = useNavigation();

  function handleNavigateToHome() {
    navigation.navigate("home");
  };

  return (
    <Container>
      <NoItemsInfo>
        <ShoppingCart size={RFValue(24)} color={COLORS.GRAY_500} weight="fill"/>

        <Text>Seu carrinho está vazio</Text>
      </NoItemsInfo>

      <Button name="Ver catálogo" onPress={handleNavigateToHome} />
    </Container>
  );
}