import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts, Baloo2_400Regular, Baloo2_700Bold } from '@expo-google-fonts/baloo-2';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { useTheme } from 'styled-components/native';
import THEME from '@theme/defaultTheme';

import VectorLogoImg from '@assets/vector-logo.svg';
import TextLogoImg from '@assets/type-logo.svg';
import Animated, { Extrapolation, interpolate, useAnimatedStyle, useSharedValue, withDelay, withSpring } from 'react-native-reanimated';

export function SplashScreen() {
  const [fontsLoaded] = useFonts({
    Baloo2_400Regular,
    Baloo2_700Bold,
    Roboto_400Regular,
    Roboto_700Bold
  });

  const CIRCLE_SIZE = useSharedValue(0);
  const CIRCLE_SIZE_MAX = 1200;
  const TEXT_LOGO_OFFSET = useSharedValue(100);
  const TEXT_LOGO_MAX_OFFSET = 100;

  const navigation = useNavigation();
  const { COLORS } = useTheme();

  const backgroundCircleAnimatedStyles = useAnimatedStyle(() => ({
    zIndex: 0,
    height: interpolate(CIRCLE_SIZE.value, [0, CIRCLE_SIZE_MAX], [0, CIRCLE_SIZE_MAX], Extrapolation.CLAMP),
    width: interpolate(CIRCLE_SIZE.value, [0, CIRCLE_SIZE_MAX], [0, CIRCLE_SIZE_MAX], Extrapolation.CLAMP),
  }));

  const opacityVectorLogoAnimatedStyles = useAnimatedStyle(() => ({
    opacity: interpolate(CIRCLE_SIZE.value, [0, CIRCLE_SIZE_MAX], [0, 1], Extrapolation.CLAMP),
    transform: [{
      translateX: interpolate(TEXT_LOGO_OFFSET.value, [TEXT_LOGO_MAX_OFFSET, 50], [0,  -40], Extrapolation.CLAMP)
    }],
  }));

  const opacityTextLogoAnimatedStyles = useAnimatedStyle(() => ({
    opacity: interpolate(TEXT_LOGO_OFFSET.value, [TEXT_LOGO_MAX_OFFSET, 0], [0, 1], Extrapolation.CLAMP),
    transform: [{
      translateX: interpolate(TEXT_LOGO_OFFSET.value, [TEXT_LOGO_MAX_OFFSET, 0], [TEXT_LOGO_MAX_OFFSET, TEXT_LOGO_MAX_OFFSET - 60], Extrapolation.CLAMP)
    }],
  }));

  async function backgroundCircleAnimate() {
    CIRCLE_SIZE.value = withDelay(400, withSpring(CIRCLE_SIZE_MAX, {
      mass: 1,
      damping: 15,
      stiffness: 60,
    }));
  };

  async function logoAnimate() {
    TEXT_LOGO_OFFSET.value = withDelay(800, withSpring(0, {
      mass: 1,
      damping: 15,
      stiffness: 60,
    }));
  };

  useEffect(() => {
    if (fontsLoaded) {
      backgroundCircleAnimate();
      logoAnimate();
      
      setTimeout(() => {
        navigation.navigate('home');
      }, 2000);
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return (
      <View
        style={[
          styles.container,
          { backgroundColor: THEME.COLORS.PURPLE_DARK }
        ]}
      />
    );
  }

  return (
    <Animated.View style={styles.container}>
      <Animated.View style={[
        {
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
          
          height: 0, 
          width: 0, 
          backgroundColor: COLORS.PURPLE,
          borderRadius: 1200,
        },
        backgroundCircleAnimatedStyles
      ]}
      />

      <Animated.View style={opacityVectorLogoAnimatedStyles}>
        <VectorLogoImg />
      </Animated.View>

      <Animated.View style={[
        {
          opacity: 0,
          position: 'absolute',
          transform: [{translateX: TEXT_LOGO_MAX_OFFSET}]
        },
        opacityTextLogoAnimatedStyles,
      ]}>
        <TextLogoImg />
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.PURPLE_DARK,
  },
})