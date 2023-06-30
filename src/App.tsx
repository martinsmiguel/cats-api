import React from 'react';
import {
  useFonts,
  Lato_400Regular,
  Lato_700Bold,
  Lato_900Black
} from '@expo-google-fonts/lato';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import Providers from './contexts';
import Navigation from './routes';

export default function App() {

  const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
    Lato_900Black
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Providers>
      <StatusBar style="auto" />
      <Navigation />
    </Providers>
  );
}
