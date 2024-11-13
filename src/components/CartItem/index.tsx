import { useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { Trash } from "phosphor-react-native";
import { useTheme } from "styled-components/native";

import { Counter } from "@components/Counter";
import { StorageCartItemProps } from "@storage/dtos/storageCartItemProps";
import { cartStorageAddItem } from "@storage/cart/CartStorageAddItem";
import { priceFormatter } from "@utils/currencyFormater";

import {
  About,
  Actions,
  Container,
  Info,
  ItemValue,
  Name,
  ProductImage,
  RemoveButton,
  Size,
  Title,
} from "./styles";

type Props = {
  index: number;
  data: StorageCartItemProps;
  onRemoveProduct: (id: string, index: number) => void;
};

export const CartItem: React.FC<Props> = ({ data, index, onRemoveProduct }) => {
  const [isLoading, setIsLoading] = useState(false);

  const { COLORS } = useTheme();

  const subtotal = data.price * data.quantity;

  const incrementeQuantity = async (increment: boolean) => {
    try {
      setIsLoading(true);

      let counter = 0;

      if (increment) {
        counter++;
      } else {
        if (data.quantity <= 0) {
          return;
        }
        counter--;
      }

      const itemUpdatedQuantity = {
        ...data,
        quantity: counter,
      };

      await cartStorageAddItem(itemUpdatedQuantity);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <ProductImage source={data.image} />

      <Info>
        <About>
          <Title>
            <Name>{data.name}</Name>

            <Size>{data.size}</Size>
          </Title>

          <ItemValue>R$ {priceFormatter.format(subtotal)}</ItemValue>
        </About>

        <Actions>
          <Counter
            disabled={isLoading}
            quantity={data.quantity}
            onDecrement={() => incrementeQuantity(false)}
            onIncrement={() => incrementeQuantity(true)}
            showBorders
          />

          <RemoveButton onPress={() => onRemoveProduct(data.id, index)}>
            <Trash size={RFValue(20)} color={COLORS.PURPLE} weight="regular" />
          </RemoveButton>
        </Actions>
      </Info>
    </Container>
  );
};
