import React from 'react'
import { Text, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Stack from './Stack'

export default props => {
  <SafeAreaView style={{ flex: 1, marginTop: 30, justifyContent: 'center', alignItems: 'center', color: '#000' }} >
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  </SafeAreaView>
}