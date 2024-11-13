import { PressableProps } from "react-native";
import Animated from "react-native-reanimated";

import { Container, Label } from "./styles";

const AnimatedContainer = Animated.createAnimatedComponent(Container);

type Props = PressableProps & {
  name: string,
  isActive?: boolean,
}

export const Option: React.FC<Props> = ({ name, isActive = false, ...rest }) => {
  return (
    <AnimatedContainer isActive={isActive} {...rest}>
      <Label isActive={isActive}>
        {name}
      </Label>
    </AnimatedContainer>
  );
}
