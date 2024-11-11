import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components/native';
import { CartProvider } from '@contexts/CartContext';
import theme from '@theme/defaultTheme';
import { Routes } from '@routes/index';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle={"light-content"}
          backgroundColor='transparent'
          translucent
        />

        <CartProvider>
          <Routes />
        </CartProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
