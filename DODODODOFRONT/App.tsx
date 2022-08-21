import { View, Text,SafeAreaView } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import store from './src/store';
import {useEffect} from 'react';
import AppInner from './AppInner';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppInner />
      </NavigationContainer>
    </Provider>
  )
}

export default App