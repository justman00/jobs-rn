import React from 'react'
import { View, Text, AsyncStorage } from 'react-native'

import useAuth from '../hooks/useAuth'

function AuthScreen(props) {
  useAuth(props)

  return <View />
}

export default AuthScreen
