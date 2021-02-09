import { StyleSheet, Text, View, Button, Dimensions} from 'react-native';
import React from 'react'
import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import fetchBoard from '../store/actions/fetchBoard'
import Row from '../components/Row'
import validateAnswer from "../store/actions/validateAnswer"
import solveBoard from "../store/actions/solveBoard"

export default function GameScreen ({navigation, route}) {
  const {username, difficulty} = route.params
  const [validateClicked, setValidateClicked] = useState(false)
  const {board, loading, answer, status} = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(()=>{
    if (status && validateClicked){
      alert(status)
      setValidateClicked(false)
      // console.log('show alert');
    }
  },[validateClicked])

  useEffect(()=>{
    dispatch(fetchBoard(difficulty))
  },[])

  function onPressValidateHandler() {
    // console.log('validasi');
    dispatch(validateAnswer(answer))
    setValidateClicked(true)
  }

  function onPressSolveHandler() {
    dispatch(solveBoard(board))
  }

  if (loading) {
    return (
      <>
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
      </>
    )  
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Sugoku
      </Text>
      <Text
        style = {
          {
            fontSize:15,
            marginBottom: 15
          }}
      >
        hai {username}
      </Text>
      <View style={styles.board}>
        {
          board.map((row,i) => {
            return <Row row={row} idxRow={i} key={i}/>
          })
        }
      </View>

      <View style={styles.container_action}>
        <Button
          title="validate"
          onPress={onPressValidateHandler}
        />
        {
          status === 'solved' &&
          <Button
              title="Finish"
              onPress={() => navigation.navigate('Finish',{username})}
            />
        }
        <Button
          title="Solve"
          onPress={onPressSolveHandler}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  board: {
    flexDirection: 'row'
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 5
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt_btn_validate:{
    fontSize: 20,
    color: 'white'
  },
  container_action: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width/1.2,
    marginTop: 10,
    marginBottom: 10
  }
});
