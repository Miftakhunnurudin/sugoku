import { StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react'
import Cell from '../components/Cell'

export default function Row (props) {
  const {row,idxRow} = props
  return (
    <View>
      {
        row.map((number,i) => {
          return <Cell number={number} idxRow={idxRow} idxCol={i} key={i}/>
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    height: 25,
    width: 25,
    borderWidth: 1,
    borderRadius: 5
  }
})