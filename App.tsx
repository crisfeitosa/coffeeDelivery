import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import defaultTheme from '@theme/defaultTheme';
import { ThemeProvider } from 'styled-components';
import { Routes } from '@routes/index';

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ThemeProvider theme={defaultTheme}>
        <StatusBar
          barStyle={"light-content"}
          backgroundColor='transparent'
          translucent
        />

        <Routes />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
