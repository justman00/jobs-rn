import React from 'react'
import { AppLoading } from 'expo'
import { AsyncStorage } from 'react-native'

import { AUTH_KEY } from '../epics/authEpics'
import Slides from '../components/Slides'

function WelcomeScreen({ navigation }) {
  const [token, setToken] = React.useState(null)

  React.useEffect(() => {
    async function checkAuth() {
      const token = await AsyncStorage.getItem(AUTH_KEY)

      if (token) {
        navigation.navigate('map')
        setToken(token)
      } else {
        setToken(false)
      }
    }

    checkAuth()
  }, [])

  const onSlidesComplete = React.useCallback(() => {
    navigation.navigate('auth')
  }, [])

  return token === null ? (
    <AppLoading />
  ) : (
    <Slides data={SLIDE_DATA} onComplete={onSlidesComplete} />
  )
}

export default WelcomeScreen

const SLIDE_DATA = [
  {
    text: 'Welcome to JobApp',
    color: '#03a9f4',
  },
  {
    text: 'Use this to get a job',
    color: '#009688',
  },
  {
    text: 'Set your location and swipe away',
    color: '#03a9f4',
  },
]
