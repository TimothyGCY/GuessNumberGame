import { withStatement } from '@babel/types'
import React, { ReactNode, useEffect, useState } from 'react'
import {
  Alert,
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableWithoutFeedback,
  View
} from 'react-native'
import { Card, Spacer } from '../components'
import { Theme } from '../constants'
import Utils from '../utils'

const StartGameScreen = () => {
  const [timebomb, setTimebomb] = useState<number>(
    Math.round(Utils.generateRandomNumber(1, 99))
  )
  const [min, setMin] = useState<number>(0)
  const [max, setMax] = useState<number>(100)
  const [userInput, setUserInput] = useState<number>(0)

  useEffect(() => {
    resetGame()
  }, [])

  const resetGame = (): void => {
    setUserInput(0)
    const rand: number = Math.round(Utils.generateRandomNumber(1, 99))
    setTimebomb(rand)
    setMin(0)
    setMax(100)
  }

  const onGuessPressed = (): void => {
    if (userInput <= min || userInput >= max) {
      ToastAndroid.showWithGravity(
        `Value must be between ${min + 1} - ${max - 1}`,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      )
      setUserInput(0)
      return
    }

    if (userInput < timebomb) {
      setMin(userInput)
      setUserInput(0)
      return
    }

    if (userInput > timebomb) {
      setMax(userInput)
      setUserInput(0)
      return
    }

    if (userInput === timebomb) {
      Alert.alert(
        'Congratulation',
        'You did it',
        [
          {
            text: 'New Game',
            style: 'destructive',
            onPress: resetGame
          }
        ],
        {
          cancelable: false
        }
      )
    }
  }

  const onClearPressed = (): void => {
    setUserInput(0)
  }

  const renderGuessStatus = (): ReactNode => {
    return (
      <View style={styles.scoreTable}>
        <Text style={styles.guessText}>{min}</Text>
        <Text style={styles.guessText}>{'<'}</Text>
        <Text style={styles.guessText}>?</Text>
        <Text style={styles.guessText}>{'<'}</Text>
        <Text style={styles.guessText}>{max}</Text>
      </View>
    )
  }

  const renderCardContent = (): ReactNode => {
    return (
      <View>
        <TextInput
          value={userInput.toString()}
          onChangeText={v => {
            setUserInput(() => {
              const val: number = parseInt(v.replace(/[^0-9]/g, ''), 10)
              if (isNaN(val)) {
                return 0
              }
              return val
            })
          }}
          style={styles.numberInput}
          placeholder={'Max range'}
          keyboardType={'number-pad'}
          maxLength={2}
          blurOnSubmit
        />
        <Spacer h={12} />
        <View style={styles.buttonList}>
          <View style={styles.button}>
            <Button
              title={'Clear'}
              color={Theme.secondaryButton}
              onPress={onClearPressed}
            />
          </View>
          <View style={styles.button}>
            <Button
              title={'Guess'}
              color={Theme.primaryButton}
              onPress={onGuessPressed}
            />
          </View>
        </View>
      </View>
    )
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Spacer h={12} />
        <Card style={{marginHorizontal: '10%'}} title={'Hint'}>{renderGuessStatus()}</Card>
        <Spacer h={24} />
        <Card title={'What could ? be'}>{renderCardContent()}</Card>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    justifyContent: 'center'
  },
  label: {
    fontSize: 24,
    fontWeight: '900',
    color: 'black'
  },
  numberInput: {
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 8,
    color: 'black'
  },
  scoreTable: {
    width: '100%',
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  guessText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center'
  },
  buttonList: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  button: {
    width: '35%'
  }
})

export default StartGameScreen
