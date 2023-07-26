import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons'
import ScreenA from '../views/ScreenA'
import ScreenB from '../views/ScreenB'
import ScreenC from '../views/ScreenC'

const Tab = createBottomTabNavigator()

export default props => (
  <Tab.Navigator screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;
      switch (route.name) {
        case 'ScreenA':
          iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
          break
        case 'ScreenB':
          iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
          break
        case 'ScreenC':
          iconName = focused ? 'ios-list' : 'ios-list-outline';
          break
      }
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
  })}>
    <Tab.Screen name='ScreenA' component={ScreenA} />
    <Tab.Screen name='ScreenB' component={ScreenB} />
    <Tab.Screen name='ScreenC' component={ScreenC} />
  </Tab.Navigator>
)
