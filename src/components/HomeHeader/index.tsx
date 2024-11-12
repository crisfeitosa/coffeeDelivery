import { ViewProps } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Animated, { AnimatedProps, FadeOutRight, SharedValue, SlideInLeft, StyleProps, interpolateColor, useAnimatedStyle } from "react-native-reanimated";
import { ArrowLeft, MapPin, ShoppingCart } from "phosphor-react-native";
import { useCart } from "@hooks/index";

import { IconButton } from "@components/IconButton";
import { Badge } from "@components/Badge";

import { useTheme } from "styled-components/native";
import { City, Container, Location } from "./styles";
import { RFValue } from "react-native-responsive-fontsize";

const ContainerAnimated = Animated.createAnimatedComponent(Container);
const CityTextAnimated = Animated.createAnimatedComponent(City);

type Props = AnimatedProps<ViewProps> & {
  style?: StyleProps;
  introContainerPosition?: SharedValue<number>
  shownBackButton?: boolean;
}

export function HomeHeader({style, introContainerPosition = undefined, shownBackButton = false}: Props) {
  const { cart } = useCart();
  const { COLORS } = useTheme();
  const navigation = useNavigation();

  const insets = useSafeAreaInsets();
  const paddingTop = insets.top;

  const cityTextAnimatedStyles = useAnimatedStyle(() => {
    return {
      color: introContainerPosition && interpolateColor(introContainerPosition.value, [0, -180], [COLORS.GRAY_900, COLORS.GRAY_200]),
    }
  });

  function handleNavigateToCart() {
    navigation.navigate('cart')
  };

  return (
    <ContainerAnimated style={[style, {paddingTop}]}>
      {shownBackButton ? (
        <Animated.View 
          entering={SlideInLeft.duration(400).delay(250)}
          exiting={FadeOutRight.duration(200)}
        >
          <IconButton 
            onPress={navigation.goBack}
            icon={ArrowLeft} 
            size={RFValue(24)} 
            color={COLORS.WHITE} 
            weight="regular"
          />
        </Animated.View>
      ) : (
      <Location>
        <MapPin weight="fill" size={RFValue(20)} color={COLORS.PURPLE} />

        <CityTextAnimated style={cityTextAnimatedStyles}>
          Fortaleza, CE
        </CityTextAnimated>
      </Location>
    )}

    <Animated.View sharedTransitionTag="headerHeightAnimateTag">
      <IconButton
        icon={ShoppingCart} 
        size={RFValue(20)} 
        color={shownBackButton ? COLORS.WHITE : COLORS.YELLOW_DARK} 
        onPress={handleNavigateToCart}
      >
        {cart?.length > 0 && <Badge value={cart.length} />}
      </IconButton>
    </Animated.View>
    </ContainerAnimated>
  );
} 