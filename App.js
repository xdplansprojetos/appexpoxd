// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import BottomMenu from './src/components/BottomMenu/BottomMenu';



function App() {
  return (
    <NavigationContainer>
      <BottomMenu />
    </NavigationContainer>
  );
}

export default App;