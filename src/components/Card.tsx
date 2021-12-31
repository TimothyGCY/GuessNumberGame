import React, { ReactNode } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Spacer from './Spacer'

type Props = {
  title?: string
  subtitle?: string
  elevation?: number
  children?: ReactNode
  style?: object
}

export default function Card(props: Props) {
  return (
    <View style={{ ...styles.card, ...props.style, elevation: props.elevation || 12 }}>
      {props.title && <Text style={styles.title}>{props.title}</Text>}
      {props.subtitle && <Text style={styles.subtitle}>{props.subtitle}</Text>}
      {props.title && <Spacer h={12} />}
      <View>{props.children}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    alignSelf: 'center',
    padding: 16,
    borderRadius: 12
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 12,
    color: 'grey'
  }
})
