import React from 'react'
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator,
} from 'react-navigation'
import { Text } from 'react-native'
import { Button } from 'react-native-elements'

import AuthScreen from '../screens/AuthScreen'
import WelcomeScreen from '../screens/WelcomeScreen'
import DeckScreen from '../screens/DeckScreen'
import SettingsScreen from '../screens/SettingsScreen'
import MapScreen from '../screens/MapScreen'
import ReviewScreen from '../screens/ReviewScreen'

const ReviewStack = createStackNavigator({
  review: { screen: ReviewScreen },
  settings: { screen: SettingsScreen },
})

ReviewScreen.navigationOptions = ({ navigation }) => {
  return {
    title: 'Review Jobs',
    headerRight: (
      <Button
        title='Settings'
        onPress={() => navigation.navigate('settings')}
        type='clear'
        titleStyle={{ color: 'rgba(0, 122, 255, 1)' }}
      />
    ),
  }
}

WelcomeScreen.navigationOptions = {
  tabBarVisible: false,
}

const TabNavigator = createBottomTabNavigator(
  {
    welcome: {
      screen: WelcomeScreen,
    },
    auth: {
      screen: AuthScreen,
    },
    main: {
      screen: createBottomTabNavigator({
        map: {
          screen: MapScreen,
        },
        deck: {
          screen: DeckScreen,
        },
        review: {
          screen: ReviewStack,
        },
      }),
    },
  },
  {
    lazy: true,
  },
)

export default createAppContainer(TabNavigator)
