import { StyleSheet, Text, TextInput, View, Button, Dimensions} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import React from 'react'
import {useState} from 'react'
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch } from "react-redux";

export default function Home ({navigation}) {
  const [username, setUsername] = useState('')
  const [difficulty, setDifficulty] = useState('random')
  const dispatch = useDispatch()

  useFocusEffect(
    React.useCallback(() => {
      dispatch({
        type: 'RESET'
      })
      setUsername('')
      setDifficulty('random')
    }, [])
  )

  function onValueChangeHandler(itemValue) {
    setDifficulty(itemValue)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Masukkan username</Text>
      <TextInput
        value = {username}
        onChangeText = {text => setUsername(text)}
        textAlign = 'left'
        style = {styles.text_input}
      />
      <View style = {styles.picker}>
        <Picker
          selectedValue = {difficulty}
          onValueChange = {onValueChangeHandler}
          style = {{flex:1}}
          mode = 'dropdown'
        >
          <Picker.Item label="Random" value="random" />
          <Picker.Item label="Easy" value="easy" />
          <Picker.Item label="Medium" value="medium" />
          <Picker.Item label="Hard" value="hard" />
        </Picker>
      </View>
      <Button
        title = "Next"
        disabled = {username? false : true}
        onPress = {() => navigation.navigate('Game',{username, difficulty})}
      />
    </View>
  )  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10
  },
  text_input: {
    borderWidth: 0.7,
    width: Dimensions.get('window').width/1.8,
    height: 35,
    borderRadius: 10,
    padding: 5,
    marginBottom: 10
  },
  picker: {
    height: 40,
    borderRadius: 10,
    width: Dimensions.get('window').width/1.8,
    // backgroundColor: '#ccf2f4',
    borderWidth: 0.7,
    marginBottom: 10
  }
});
