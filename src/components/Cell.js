import { StyleSheet, TextInput, View, Text} from 'react-native';
import React, {useState, useEffect} from 'react'
import inputAnswer from '../store/actions/inputAnswer'
import {useDispatch} from 'react-redux'

export default function Cell (props) {
  const {number,idxRow,idxCol} = props
  const dispatch = useDispatch()
  const onChangeTextHandler = (text) => {
    const payload = {number:text, idxCol, idxRow}
    dispatch(inputAnswer(payload))
  }

  return (
    <View style={styles.box}>
      <TextInput
        value={number? String(number):''}
        keyboardType= 'number-pad'
        onChangeText={onChangeTextHandler}
        textAlign='center'
      />

      {/* <Text>
        {number? number: ''}
      </Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 30,
    borderWidth: 1,
    borderRadius: 5,
    margin: 3
  }
})