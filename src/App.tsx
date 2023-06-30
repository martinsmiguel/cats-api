import React from 'react';
import {
  useFonts,
  Lato_400Regular,
  Lato_700Bold,
  Lato_900Black
} from '@expo-google-fonts/lato';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navigation from './routes';


const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
      <StatusBar style="auto" />
      <Navigation />
    </QueryClientProvider>
  );
}
