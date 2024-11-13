import React, { useRef } from "react";
import { View } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { RFValue } from "react-native-responsive-fontsize";
import Animated, {
  FadeInDown,
  FadeOutDown,
  LinearTransition,
  SlideOutRight,
} from "react-native-reanimated";
import { Trash } from "phosphor-react-native";

import { CartHeader } from "@components/CartHeader";
import { CartListEmpty } from "@components/CartListEmpty";
import { CartItem } from "@components/CartItem";
import { Order } from "@components/Order";

import { StorageCartItemProps } from "@storage/dtos/storageCartItemProps";
import { useCart } from "@hooks/index";
import THEME from "@theme/defaultTheme";

import { Container, SwipeableCard, SwipeableRemoveContainer } from "./styles";

export const Cart: React.FC = () => {
  const { cart, removeProductCart } = useCart();

  const swipeableRefs = useRef<Swipeable[]>([]);

  function closeSwipeable(index: number) {
    swipeableRefs.current?.[index].close();
  };

  async function remove(item: StorageCartItemProps, index: number) {
    await removeProductCart(item.id);
  };

  function handleRemove(item: StorageCartItemProps, index: number) {
    remove(item, index);
  };

  return (
    <Container>
      <CartHeader />

      {cart.length > 0 ? (
        <View style={{ flex: 1 }}>
          <Animated.ScrollView
            style={{ flex: 1 }}
            showsVerticalScrollIndicator={false}
            layout={LinearTransition.springify()}
          >
            {cart.map((item, index) => (
              <Animated.View
                key={String(item.id + item.size)}
                entering={FadeInDown.delay(index * 150).duration(200)}
                exiting={SlideOutRight}
              >
                <SwipeableCard
                  ref={(ref) => {
                    if (ref) {
                      swipeableRefs.current.push(ref);
                    }
                  }}
                  overshootRight={false}
                  overshootLeft={false}
                  leftThreshold={10}
                  renderLeftActions={() => (
                    <SwipeableRemoveContainer>
                      <Trash size={RFValue(32)} color={THEME.COLORS.RED_DARK} />
                    </SwipeableRemoveContainer>
                  )}
                  onSwipeableOpen={() => handleRemove(item, index)}
                  renderRightActions={() => null}
                >
                  <CartItem
                    data={item}
                    index={index}
                    onRemoveProduct={() => handleRemove(item, index)}
                  />
                </SwipeableCard>
              </Animated.View>
            ))}
          </Animated.ScrollView>

          <Animated.View
            entering={FadeInDown.delay(500).duration(300)}
            exiting={FadeOutDown}
          >
            <Order />
          </Animated.View>
        </View>
      ) : (
        <Animated.View entering={FadeInDown.duration(300)}>
          <CartListEmpty />
        </Animated.View>
      )}
    </Container>
  );
};
