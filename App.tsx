import React from 'react'
import { StyleSheet, View } from 'react-native'
import { AppBar } from './src/components'
import { StartGameScreen } from './src/screens'

const App = () => {
  return (
    <View style={styles.screen}>
      <AppBar title={'Guess the Number'} />
      <StartGameScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white'
  }
})

export default App
