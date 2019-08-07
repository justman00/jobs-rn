import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import MapView from 'react-native-maps'

const initialRegion = {
  longitude: -122,
  latitude: 37,
  longitudeDelta: 0.04,
  latitudeDelta: 0.09,
}

function MapScreen() {
  const [region, setRegion] = React.useState(initialRegion)
  const [loaded, setLoaded] = React.useState(false)

  React.useEffect(() => {
    setLoaded(true)
  }, [])

  const onRegionChangeComplete = React.useCallback((region) => {
    setRegion(region)
  }, [region])

  return !loaded ? (
    <View>
      <ActivityIndicator size='large' />
    </View>
  ) : (
    <View style={{ flex: 1 }}>
      <MapView region={region} style={{ flex: 1 }} onRegionChangeComplete={onRegionChangeComplete} />
    </View>
  )
}

export default MapScreen
