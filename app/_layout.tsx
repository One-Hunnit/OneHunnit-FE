import { useColorScheme } from '@/components/useColorScheme.web';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Apple100: require('../src/assets/fonts/AppleSDGothicNeoT.ttf'),
    Apple200: require('../src/assets/fonts/AppleSDGothicNeoUL.ttf'),
    Apple300: require('../src/assets/fonts/AppleSDGothicNeoL.ttf'),
    Apple400: require('../src/assets/fonts/AppleSDGothicNeoR.ttf'),
    Apple500: require('../src/assets/fonts/AppleSDGothicNeoM.ttf'),
    Apple600: require('../src/assets/fonts/AppleSDGothicNeoSB.ttf'),
    Apple700: require('../src/assets/fonts/AppleSDGothicNeoB.ttf'),
    Apple800: require('../src/assets/fonts/AppleSDGothicNeoEB.ttf'),
    Apple900: require('../src/assets/fonts/AppleSDGothicNeoH.ttf'),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack>
    </ThemeProvider>
  );
}
