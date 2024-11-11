import { SafeAreaView } from 'react-native';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, interpolateColor, Extrapolation, SlideInUp, Easing } from 'react-native-reanimated';
import { useTheme } from 'styled-components/native';

import { HomeHeader } from '@components/HomeHeader';
import { SearchInput } from '@components/SearchInput';

import bgImage from '@assets/imageIntro.png';

import { Container, IntroContainer, IntroImage, Title } from "./styles";

export function Home() {
  const { COLORS } = useTheme();
  const introContainerPosition = useSharedValue(0);

  const headerAnimatedStyles = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(introContainerPosition.value, [0, -180], [COLORS.GRAY_100, COLORS.GRAY_900]),
      height: interpolate(introContainerPosition.value, [0, -180], [120, 96], Extrapolation.CLAMP),
      borderBottomWidth: interpolate(introContainerPosition.value, [0, -180], [0, 1], Extrapolation.CLAMP),
      borderBottomColor: interpolateColor(introContainerPosition.value, [0, -180], ['transparent', COLORS.GRAY_800]),
    }
  });

  const introContainerAnimatedStyles = useAnimatedStyle(() => {
    return {
      marginTop: interpolate(introContainerPosition.value, [0, -180], [0, -532], Extrapolation.CLAMP),
      opacity: interpolate(introContainerPosition.value, [-10, -150], [1, 0], Extrapolation.CLAMP),
    }
  });  

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HomeHeader
        sharedTransitionTag="headerHeightAnimateTag"
        style={headerAnimatedStyles} 
        introContainerPosition={introContainerPosition} 
      /> 

      <Container>
        <Animated.View 
          entering={SlideInUp.delay(10).duration(600).easing(Easing.bezierFn(0, 0.79, 0.52, 0.98))} 
          style={[introContainerAnimatedStyles]}
        >
          <IntroContainer>
            <Title>
              Encontre o café perfeito para qualquer hora do dia
            </Title>

            <SearchInput placeholder='Pesquisar' />

            <IntroImage resizeMode='cover' source={bgImage} />
          </IntroContainer>
        </Animated.View>
      </Container>     
    </SafeAreaView>
  )
}; 