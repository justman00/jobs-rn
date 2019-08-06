import { useDispatch, useSelector } from 'react-redux'
import React from 'react'

import { facebookAuth } from '../actions/authActions'

function useAuth(props) {
  const token = useSelector(state => state.auth.token)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(facebookAuth)
  }, [])

  React.useEffect(() => {
    onAuthComplete()
  }, [token])

  const onAuthComplete = React.useCallback(() => {
    if (token) {
      props.navigation.navigate('map')
    }
  }, [token])
}

export default useAuth
