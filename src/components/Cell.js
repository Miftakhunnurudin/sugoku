import { StyleSheet, TextInput, View, Dimensions} from 'react-native';
import React, {useState, useEffect} from 'react'
import inputAnswer from '../store/actions/inputAnswer'
import {useDispatch, useSelector} from 'react-redux'
import isWhite from "../helper/isWhite";

export default function Cell (props) {
  const {answer} = useSelector(state => state)
  const {number:num_board,idxRow,idxCol} = props
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()

  const currentCellAnswer = answer[idxRow][idxCol]
  const mapping = isWhite(idxCol,idxRow)

  useEffect(()=>{
    setInputValue(currentCellAnswer? String(currentCellAnswer) : '')
  },[currentCellAnswer])

  const onChangeTextHandler = (text) => {
    if(text.length>1) text = text[1]
    const payload = {number:text, idxCol, idxRow}
    dispatch(inputAnswer(payload))
  }

  return (
    <View style={{backgroundColor: mapping? 'thistle' : 'wheat'}}>
      <View style={[styles.box, num_board? {backgroundColor: mapping? 'thistle' : 'wheat'} : styles.bg_white]}>
        <TextInput
          value={num_board? String(num_board) : inputValue}
          keyboardType= 'number-pad'
          onChangeText={onChangeTextHandler}
          textAlign='center'
          editable= {num_board? false: true}
          style= {{color: num_board? 'black' : 'green', fontWeight: '700'}}
        />
      </View>
    </View>
  )
}

const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    height: (windowWidth - 80)/9,
    width: (windowWidth - 80)/9,
    borderRadius: 5,
    margin: 3
  },
  bg_disabled: {
    backgroundColor: 'silver'
  },
  bg_white: {
    backgroundColor: 'white'
  }
})