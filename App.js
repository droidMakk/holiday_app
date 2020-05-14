/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

import Calendar from './src/Calendar';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar backgroundColor={theme.colors.primary} />
      <PaperProvider theme={theme}>
        <Calendar />
      </PaperProvider>
    </>
  );
};

export default App;
