import * as React from 'react';
import { AppRegistry } from 'react-native';

import App from './src/App';
import { SafeAreaProvider } from 'react-native-safe-area-context';



export default function Main() {
  return (
    <SafeAreaProvider style={{ backgroundColor: 'black', flex: 1, }} >
      <App />
    </SafeAreaProvider>
  );
}


AppRegistry.registerComponent('Halfcut Fitness', () => Main);