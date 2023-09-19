import * as React from 'react';
import { AppRegistry } from 'react-native';

import App from './src/App';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function Main() {
  return (
    // <SafeAreaView style={{ backgroundColor: 'black', }} >
    <App />
    // </SafeAreaView>
  );
}


AppRegistry.registerComponent('Halfcut Fitness', () => Main);