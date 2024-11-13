import { useEffect, useState } from "react";
import { ImageSourcePropType } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Toast from "react-native-toast-message";
import { useNavigation, useRoute } from "@react-navigation/native";
import Animated, { Easing, FadeOut, interpolate, interpolateColor, useAnimatedStyle, useSharedValue, withSequence, withTiming } from 'react-native-reanimated';
import { Audio } from 'expo-av';

import { HomeHeader } from "@components/HomeHeader";
import { Option } from "@components/Option";
import { Button } from "@components/Button";
import { Counter } from "@components/Counter";
import { Footer } from "@components/Footer";
import { Tag } from "@components/Tag";
import { useTheme } from "styled-components/native";

import { cartStorageAddItem } from "@storage/cart/CartStorageAddItem";
import { StorageCartItemProps } from "@storage/dtos/storageCartItemProps";
import {PRODUCTS} from '@data/products';
import { priceFormatter } from "@utils/currencyFormater";
import coffeeImg from '@assets/coffee.png'
import SmokeImg from '@assets/smoke_4.svg'

import { AddToCartContainer, Container, Content, Currency, Description, ImageContainer, Info, Main, Name, OptionsListContainer, Price, ProductImage, Selection, SelectionTitle, TitleContainer, Value } from "./styles";

const AnimatedContainer = Animated.createAnimatedComponent(Container);
const AnimatedSelectionTitle = Animated.createAnimatedComponent(SelectionTitle);

type ProductSize = {
  id: number;
  value: string
}

const DATA = [
  {id: 1, value: "114ml"},
  {id: 2, value: "140ml"},
  {id: 3, value: "227ml"},
]

type Product = {
  id: string;
  tag: string;
  name: string;
  price: number;
  image: ImageSourcePropType;
  description: string;
} 

type RouteParamsProps = {
  productId: string;
}

export function Product() {
  const [hasBeenAddedToCart, setHasBeenAddedToCart] = useState(false);
  const [sizes] = useState<ProductSize[]>(DATA);
  const [productSizeSelected, setProductSizeSelected] = useState('');
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [quantity, setQuantity] = useState(1);

  const { COLORS } = useTheme();
  const route = useRoute();

  const errorSize = useSharedValue(0);

  const navigation = useNavigation();

  const { productId } = route.params as RouteParamsProps;

  async function playSound(isCorrect: boolean) {
    const file = isCorrect ? require('@assets/sounds/item-added-cart.mp3') : require('@assets/sounds/error.mp3')

    const { sound } = await Audio.Sound.createAsync(file, { shouldPlay: true});

    await sound.setPositionAsync(0)
    await sound.playAsync();
  };

  async function handleAddToCart() {
    if (productSizeSelected === '') {
      await playSound(false);
      
      errorAnimation()
      return;
    }

    const productInput: StorageCartItemProps = {
      id: Date.now().toString(),
      productId: product?.id!,
      name: product?.name!,
      image: product?.image!,
      price: product?.price!,
      quantity,
      size: productSizeSelected
    }

    setHasBeenAddedToCart(true);

    await playSound(true);

    await cartStorageAddItem(productInput);

    Toast.show({
      type: 'info',
      text1: `${quantity},${product?.name}`,
      text2: productSizeSelected
    });

    setTimeout(() => {navigation.goBack();}, 200);
  };

  async function errorAnimation() {
    errorSize.value = withSequence(
      withTiming(1, { duration: 500, easing: Easing.linear  }), 
      withTiming(0, { duration: 3500, easing: Easing.out(Easing.back())})
    )
  }

  const selectSizeTextAnimatedStyle = useAnimatedStyle(() => {
    return {
      color: interpolateColor(errorSize.value, [0, 1], [COLORS.GRAY_400, COLORS.RED_DARK])
    }
  });

  const selectSizeOptionAnimatedStyle = useAnimatedStyle(() => {
    return {
      borderWidth: interpolate(errorSize.value, [0, 2], [0, 2]),
      borderColor: interpolateColor(errorSize.value, [0, 1], [productSizeSelected !== '' ? COLORS.PURPLE : 'transparent', COLORS.RED_DARK]),
    }
  });

  const incrementeQuantity = async (increment: boolean) => {
    if (increment) {
      setQuantity(prev => prev + 1);
    } else {
      if (quantity === 0) {
        return
      }
      setQuantity(prev => prev - 1);
    }
  };

  useEffect(() => {
    const product = PRODUCTS.find((prod) => prod.id === productId)

    setProduct(product)
  }, [product]);

  return (
    <AnimatedContainer>
      <Content>   
        <HomeHeader
          shownBackButton
          sharedTransitionTag="headerHeightAnimateTag"
          style={{ height: RFValue(120) }}
        />

        <Info>
          <Main>
            <TitleContainer>
              <Tag name={product?.tag!} size="FOCUSED" color="secondary" />

              <Name>{product?.name}</Name>
            </TitleContainer>
                        
            <Price>
              <Currency>R$</Currency>
              <Value>{priceFormatter.format(product?.price!)}</Value>
            </Price>
          </Main>

          <Description>
            {product?.description}
          </Description>
        </Info>
      </Content>

      <ImageContainer>
        <SmokeImg style={{position: "absolute", bottom: RFValue(115), zIndex: 1}} height={RFValue(137)} width={RFValue(64)} />
        <ProductImage source={coffeeImg} height={RFValue(260)} width={RFValue(295)} />
      </ImageContainer>

      <Footer>
        {!hasBeenAddedToCart && (
          <Animated.View 
            style={{gap: RFValue(20)}} 
            exiting={FadeOut.duration(400).easing(Easing.out(Easing.ease))}
          >
            <Selection>
              <AnimatedSelectionTitle style={selectSizeTextAnimatedStyle}>
                Selecione o tamanho:
              </AnimatedSelectionTitle>

              <OptionsListContainer>
                {sizes.map((size) => (
                  <Animated.View
                    style={
                      [selectSizeOptionAnimatedStyle, {
                        flex: 1,
                        height: RFValue(42), 
                        borderRadius: RFValue(6),
                      }]
                    }
                    key={size.id} 
                  >
                    <Option
                      name={size.value}
                      isActive={productSizeSelected === size.value}
                      onPress={() => setProductSizeSelected(size.value)}
                    />
                  </Animated.View>
                ))}
              </OptionsListContainer>
            </Selection>

            <AddToCartContainer>
              <Counter 
                quantity={quantity} 
                onDecrement={() => incrementeQuantity(false)}
                onIncrement={() => incrementeQuantity(true)}
                showBorders={false} 
              />

              <Button 
                style={{
                  flex: 1,
                  opacity: productSizeSelected !== '' ? 1 : 0.4,
                }} 
                name="Adicionar" 
                onPress={handleAddToCart}
              />
            </AddToCartContainer>
          </Animated.View>
        )}
      </Footer>
    </AnimatedContainer>
  )
}