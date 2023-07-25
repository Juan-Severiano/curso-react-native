import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ScreenA from '../views/ScreenA'

const Stack = createNativeStackNavigator()

export default props => (
  <Stack.Navigator initialRouteName='ScreenA'>
    <Stack.Screen name='ScreenA' component={ScreenA} />
  </Stack.Navigator>
)