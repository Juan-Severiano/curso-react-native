import React from 'react'
import { Text, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tab from './Tab'
// import Stack from './Stack'

export default props => {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: 30 }}>
      <NavigationContainer>
      <Tab />
        {/* <Stack /> */}
      </NavigationContainer>
    </SafeAreaView>
  )
}