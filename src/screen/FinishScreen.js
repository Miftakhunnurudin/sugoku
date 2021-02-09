import { StyleSheet, Text, View, Button} from 'react-native';
import React from 'react'

export default function finish ({route, navigation}) {
  const {username} = route.params
  return (
    <View style={styles.container}>
      <Text style={{marginBottom:30}}>Selamat {username} telah menyelesaikan permainan</Text>
      <Button
        title = "Home"
        onPress = {() => navigation.navigate('Home')}
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
  }
})