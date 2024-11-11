import { ReactNode } from "react";
import { TouchableOpacityProps } from "react-native";
import { IconProps, IconWeight  } from "phosphor-react-native";
import { Container } from "./styles";

export type IconButtonProps = (props: IconProps) => JSX.Element;

type Props = TouchableOpacityProps & {
  icon: IconButtonProps;
  weight?: IconWeight;
  size: number;
  color?: string;
  children?: ReactNode;
}

export const IconButton: React.FC<Props> = ({icon: Icon, size = 20, weight = 'fill', color, children, ...rest}) => {
  return (
    <Container activeOpacity={0.7} {...rest}>
      {children}
      <Icon weight={weight} size={size} color={color} />
    </Container>
  );
}