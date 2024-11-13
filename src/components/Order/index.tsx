import { useNavigation } from "@react-navigation/native";
import { Button } from "@components/Button";
import { useCart } from "@hooks/index";
import { priceFormatter } from "@utils/currencyFormater";

import { Container, Row, Label, Value } from "./styles";

export const Order: React.FC = () => {
  const navigation = useNavigation();
  const { cart, clearCart } = useCart();

  const total = cart.reduce(
    (acc, item) => (acc += item.price * item.quantity),
    0
  );

  async function handleNavigateToPurchaseCompleted() {
    await clearCart();
    navigation.navigate("purchaseCompleted");
  };

  return (
    <Container>
      <Row>
        <Label>Valor total</Label>
        <Value>R$ {priceFormatter.format(total)}</Value>
      </Row>

      <Button
        name="Confirmar pedido"
        color="SECONDARY"
        onPress={handleNavigateToPurchaseCompleted}
      />
    </Container>
  );
};
