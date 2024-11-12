import { Tag } from "@components/Tag";
import { CoffeeCardSizeProps, Container, Content, Currency, Description, Image, Info, Name, Price, Value } from "./styles";

import { PressableProps } from "react-native";
import Animated, { SlideInRight } from "react-native-reanimated";
import { Product } from "@screens/Home";
import { priceFormatter } from "@utils/currencyFormater";
import { RFValue } from "react-native-responsive-fontsize";

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(Container)

type Props = PressableProps & {
  size?: CoffeeCardSizeProps;
  index: number;
  data: Product;
}

export function CoffeeCard({size = "DEFAULT", index, data, ...rest}: Props) {
  return (
    <AnimatedTouchableOpacity 
      entering={SlideInRight.delay(300 + index * 150).duration(800).damping(15)}
      size={size}   
      {...rest}
    >
      <Content>
        <Image 
          source={data.image}
          width={RFValue(64)}
          height={RFValue(64)}
        />

        <Tag size={size} name={data.tag} />

        <Info>
          <Name>{data.name}</Name>

          <Description>{data.description}</Description>
        </Info>

        <Price>
          <Currency>R$</Currency>

          <Value>{priceFormatter.format(data.price)}</Value>
        </Price>
      </Content>
    </AnimatedTouchableOpacity>
  );
}