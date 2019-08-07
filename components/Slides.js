import React from 'react'
import { View, Text, ScrollView, Dimensions } from 'react-native'
import { Button } from 'react-native-elements'

const SCREEN_WIDTH = Dimensions.get('window').width

function renderSlides(data, onComplete) {
  return data.map((slide, i) => (
    <View
      style={[styles.slide, { backgroundColor: slide.color }]}
      key={slide.text}
    >
      <Text style={styles.slideText}>{slide.text}</Text>
      {i == data.length - 1 ? (
        <Button
          title='Onwards!'
          buttonStyle={styles.buttonStyle}
          onPress={onComplete}
        />
      ) : null}
    </View>
  ))
}

function Slides({ data, onComplete }) {
  return (
    <ScrollView pagingEnabled horizontal style={{ flex: 1 }}>
      {renderSlides(data, onComplete)}
    </ScrollView>
  )
}

export default Slides

const styles = {
  slideText: {
    fontSize: 30,
    color: '#fff',
    width: SCREEN_WIDTH * 0.75,
    textAlign: 'center',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH,
  },
  buttonStyle: {
    backgroundColor: '#0288d1',
    marginTop: 15,
  },
}
