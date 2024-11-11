import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components/native';

import { Routes } from '@routes/index';
import theme from '@theme/defaultTheme';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
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
