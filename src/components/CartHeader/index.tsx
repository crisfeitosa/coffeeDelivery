import { View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Animated, { SlideInLeft, SlideOutRight } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ArrowLeft } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { IconButton } from "@components/IconButton";

import { Container, Title } from "./styles";

export const CartHeader: React.FC = () => {
  const navigation = useNavigation();
  const { COLORS } = useTheme();

  const insets = useSafeAreaInsets();
  const paddingTop = insets.top;

  return (
    <Container style={[{ paddingTop }]}>
      <Animated.View 
        entering={SlideInLeft.duration(400).delay(250)}
        exiting={SlideOutRight.duration(400)}
        style={{ width: RFValue(24) }}
      >
        <IconButton 
          onPress={navigation.goBack}
          icon={ArrowLeft} 
          size={RFValue(24)} 
          color={COLORS.GRAY_100} 
          weight="regular"
        />
      </Animated.View>

      <Title>Carrinho</Title>

      <View style={{ width: RFValue(24) }} />
    </Container>
  );
} 