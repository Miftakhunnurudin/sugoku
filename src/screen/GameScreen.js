import { StyleSheet, Text, View, Button} from 'react-native';
import React from 'react'
import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import fetchBoard from '../store/actions/fetchBoard'
import Row from '../components/Row'

export default function GameScreen () {
  const {board, loading} = useSelector(state => state)

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchBoard('easy'))
  },[])

  if (loading) {
    return (
      <>
      <View>
        <Text>Loading...</Text>
      </View>
      </>
    )  
  }
  // console.log(board);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Sugoku
      </Text>
      <View style={styles.board}>
        {
          board.map((row,i) => {
            return <Row row={row} idxRow={i}/>
          })
        }
      </View>
      <Button title="Validate" style={styles.btn_validate}/>
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
    marginBottom: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn_validate:{
    marginTop: 30,
    height: 30,
    width:50
  }
});
