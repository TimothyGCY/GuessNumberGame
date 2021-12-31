import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Theme } from '../constants'

type Props = {
  leading?: any
  title: string
  elevation?: number
  actions?: []
}

const AppBar = (props: Props) => {
  return (
    <View style={{ ...styles.bar, elevation: props.elevation || 12 }}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  bar: {
    height: 56,
    width: '100%',
    alignItems: 'center',
    backgroundColor: Theme.primary,
    flexDirection: 'row'
  },
  leading: {
    position: 'absolute',
    alignSelf: 'center',
    left: 24
  },
  title: {
    fontSize: 16,
    width: '100%',
    position: 'absolute',
    alignSelf: 'center',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
  trailing: {
    position: 'absolute',
    alignSelf: 'center',
    right: 24
  }
})

export default AppBar
