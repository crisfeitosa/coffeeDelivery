import { SafeAreaView } from 'react-native';

import { interpolate, useAnimatedStyle, useSharedValue, interpolateColor, Extrapolation } from 'react-native-reanimated';
import { useTheme } from 'styled-components/native';
import { HomeHeader } from '@components/HomeHeader';

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
  }) 

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HomeHeader
        sharedTransitionTag="headerHeightAnimateTag"
        style={headerAnimatedStyles} 
        introContainerPosition={introContainerPosition} 
      /> 
          
    </SafeAreaView>
  )
}; 