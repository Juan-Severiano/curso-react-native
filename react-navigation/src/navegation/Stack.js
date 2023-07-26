import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ScreenA from '../views/ScreenA'
import ScreenB from '../views/ScreenB'
import ScreenC from '../views/ScreenC'
import PassoStack from '../components/PassoStack'

const Stack = createNativeStackNavigator()

export default props => {
  
  return (
    <Stack.Navigator initialRouteName='ScreenA' screenOptions={{ headerShown: true }}>
      <Stack.Screen name="ScreenA" options={{ title: 'informações iniciais' }}>
        {props => (
          <PassoStack {...props} next="ScreenB">
            <ScreenA />
          </PassoStack>
        )}
      </Stack.Screen>
      <Stack.Screen name='ScreenB'>
        {props => (
          <PassoStack {...props} back next="ScreenC" >
            <ScreenB />
          </PassoStack>
        )}
      </Stack.Screen>
      <Stack.Screen name='ScreenC'>
        {props => (
          <PassoStack {...props} back next="ScreenC" >
            <ScreenC />
          </PassoStack>
        )}
      </Stack.Screen>
      {/* <Stack.Screen name='ScreenC' component={ScreenC} /> */}
    </Stack.Navigator>
  )
}
