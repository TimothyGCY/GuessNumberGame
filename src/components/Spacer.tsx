import React from 'react'
import { View } from 'react-native'

type Props = {
  h?: number
  w?: number
}

const Spacer = (props: Props) => {
  return <View style={{ width: props.w || 0, height: props.h || 0 }} />
}

export default Spacer
