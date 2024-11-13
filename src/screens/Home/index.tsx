import { useRef, useState } from 'react';

import { ImageSourcePropType, SafeAreaView, ScrollView, SectionList, SectionListData, SectionListProps, SectionListRenderItemInfo, ViewToken } from 'react-native';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, interpolateColor, Extrapolation, SlideInUp, Easing, withTiming, FadeInDown } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components/native';

import { CoffeeItem } from '@components/CoffeeItem';
import { HomeHeader } from '@components/HomeHeader';
import { HighlightList } from '@components/HighlightList';
import { SearchInput } from '@components/SearchInput';
import { TagFilter } from '@components/TagFilter';

import bgImage from '@assets/imageIntro.png';

import { TAGS } from '@data/tags';
import { PRODUCTS } from '@data/products';

import { CoffeeFilterContainer, CoffeeFilterTitle, Container, IntroContainer, IntroImage, SectionTitle, Title } from "./styles";
import { RFValue } from 'react-native-responsive-fontsize';

const AnimatedCoffeeFilterContainer = Animated.createAnimatedComponent(CoffeeFilterContainer);
const AnimatedSectionList = Animated.createAnimatedComponent<SectionListProps<Product, SectionListDataProps>>(SectionList);

export type Product = {
  id: string;
  tag: string;
  name: string;
  price: number;
  image: ImageSourcePropType;
  description: string;
};

type SectionListDataProps = {
  title: string;
  data: Product[];
};

const TabHeader: React.FC<{tabs: Array<string>, activeTab: number, onPressTab: (index: number) => void}> = ( {tabs, activeTab, onPressTab } ) => (
  <ScrollView horizontal>
    {tabs.map((tab, index) => (
      <TagFilter
        key={index}
        name={tab}
        isActive={activeTab === index}
        onPress={() => onPressTab(index)}
      />
    ))}
  </ScrollView>
);

export function Home() {
  const navigation = useNavigation();
  const { COLORS } = useTheme();

  const tabsHeaderName = TAGS.map(tag => tag.name);
  const sectionListData = TAGS.map(tag => {
    return {
      title: tag.name,
      data: PRODUCTS.filter(product => product.tag === tag.name),
    }
  });

  const [activeTab, setActiveTab] = useState(0);
  const sectionListRef = useRef<any>(null);

  const scrollY = useSharedValue(0);
  const introContainerPosition = useSharedValue(0);

  const renderItem = ({ item }: SectionListRenderItemInfo<Product, SectionListDataProps>) => (
    <CoffeeItem {...item} onPress={() => handleNavigateToProduct(item.id)} />
  );

  const renderSectionHeader = ({ section }: {
    section: SectionListData<Product, SectionListDataProps>}) => (
      <SectionTitle>
        {section.title}
      </SectionTitle>
  );

  const onViewableItemsChanged = ({ viewableItems }: {
    viewableItems: ViewToken[];
    changed: ViewToken[];
  }) => {
    if (viewableItems.length > 0) {
      const sectionIndex = sectionListData
        .findIndex(({title}) => title === viewableItems[0].section.title);

      if (sectionIndex !== -1) {
        setActiveTab(sectionIndex);
      }
    }
  };  

  const scrollToSection = (sectionIndex: number) => {
    if (sectionListRef.current) {
      sectionListRef.current.scrollToLocation({
        sectionIndex,
        itemIndex: 0,
        viewOffset: 0,
        animated: true
      });
    }
  };

  const handleTabPress = (index: number) => {
    if (activeTab !== index) {
      scrollToSection(index);
    }
  };

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

  const coffeeFilterContainerAnimatedStyles = useAnimatedStyle(() => {
    return {
      borderBottomWidth: interpolate(introContainerPosition.value, [0, -180], [0, 1], Extrapolation.CLAMP),
      borderBottomColor: interpolateColor(introContainerPosition.value, [0, -180], ['transparent', COLORS.GRAY_800]),
    }
  });

  const onPanUp = Gesture
    .Pan()
    .activateAfterLongPress(120)
    .onUpdate((event) => {
      if (event.translationY < 0) {
        introContainerPosition.value = event.translationY
      } else {
        introContainerPosition.value = scrollY.value + (event.translationY);
      }
    })
    .onEnd((event) => {
      if (event.translationY < -20) {
        introContainerPosition.value = withTiming(-220, {duration: 600, easing: Easing.inOut(Easing.quad)});
      }

      scrollY.value = event.translationY <= -220 ? -220 : event.translationY;
    }
  );

  function handleNavigateToProduct(productId: string) {
    navigation.navigate('product', {productId})
  };

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

          <HighlightList />
        </Animated.View>

        <GestureDetector gesture={onPanUp}>
          <Animated.View style={{ marginBottom: RFValue(120) }} entering={FadeInDown.delay(200).duration(300)}>
            <AnimatedCoffeeFilterContainer style={coffeeFilterContainerAnimatedStyles}>
              <CoffeeFilterTitle>
                Nossos cafés
              </CoffeeFilterTitle>

              <TabHeader
                tabs={tabsHeaderName}
                activeTab={activeTab}
                onPressTab={(index) => handleTabPress(index)}
              />
            </AnimatedCoffeeFilterContainer>

            <AnimatedSectionList
              windowSize={10} // Ajuste conforme necessário
              ref={sectionListRef}
              initialNumToRender={20} // Ajuste conforme necessário
              maxToRenderPerBatch={10} // Ajuste conforme necessário
              sections={sectionListData}
              onEndReachedThreshold={0.1}
              removeClippedSubviews={true}
              stickySectionHeadersEnabled={false} // Desativar seções pegajosas
              showsVerticalScrollIndicator={false}
              renderItem={(props) => renderItem(props)}
              keyExtractor={(item, index) => String(item?.id)}
              renderSectionHeader={(data) => renderSectionHeader(data)}
              onViewableItemsChanged={(items) => onViewableItemsChanged(items)}
              contentContainerStyle={{
                gap: RFValue(32), 
                paddingTop: RFValue(8), 
                paddingHorizontal: RFValue(32), 
                paddingBottom: RFValue(32), 
                backgroundColor: COLORS.GRAY_900,
              }}
            />
          </Animated.View>                
        </GestureDetector>
      </Container>     
    </SafeAreaView>
  )
}; 