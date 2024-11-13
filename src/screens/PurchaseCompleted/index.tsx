import { useEffect } from "react";
import { BackHandler } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  BounceInLeft,
  FadeIn,
  FadeInDown,
} from "react-native-reanimated";
import { Audio } from "expo-av";

import { Button } from "@components/Button";
import DeliveryImg from "@assets/delivery-illustration.svg";

import { Container, Content, Text, Title } from "./styles";

export const PurchaseCompleted: React.FC = () => {
  const navigation = useNavigation();

  const insets = useSafeAreaInsets();
  const paddingTop = insets.top;

  function handleNavigateToHome() {
    navigation.navigate("home");
    return true;
  }

  async function playSound() {
    const file = require("@assets/sounds/purchase-completed.mp3");

    const { sound } = await Audio.Sound.createAsync(file, { shouldPlay: true });

    await sound.setPositionAsync(0);
    await sound.playAsync();
  }

  useEffect(() => {
    playSound();
  }, []);

  useEffect(() => {
    const backHAndler = BackHandler.addEventListener(
      "hardwareBackPress",
      handleNavigateToHome
    );

    return () => backHAndler.remove();
  }, []);

  return (
    <Container style={{ paddingTop }}>
      <Content>
        <Animated.View
          entering={BounceInLeft.delay(300).duration(700)}
          style={{
            width: RFValue(270),
            marginHorizontal: 'auto',
            marginBottom: RFValue(40),
            height: RFValue(161)
          }}
        >
          <DeliveryImg
            width={RFValue(270)}
            height={RFValue(161)}
          />
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(300)}>
          <Title>Uhu! Pedido confirmado</Title>

          <Text>Agora é só aguardar que logo o café chegará até você!</Text>
        </Animated.View>

        <Animated.View
          entering={FadeIn.delay(700).duration(400)}
          style={{ marginTop: RFValue(64) }}
        >
          <Button
            style={{ width: RFValue(247) }}
            name="Ir para a Home"
            onPress={handleNavigateToHome}
          />
        </Animated.View>
      </Content>
    </Container>
  );
};
