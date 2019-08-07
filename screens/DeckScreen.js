import React from 'react'
import { Text, View } from 'react-native'

function DeckScreen() {
  return (
    <View style={styles.viewStyles} >
      <Text style={styles.textStyles} >Ecaterina Bajurea, ce faci?</Text>
    </View>
  )
}

const styles = {
  viewStyles: {
    flex: 1,
    alignItem: 'center',
    justifyContent: 'center'
  },
  textStyles: {
    fontSize: 30,
    width: 350,
    textAlign: 'center'
  }
}

export default DeckScreen
