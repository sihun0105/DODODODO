import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'

const Todo_container = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
      <Text>Todo_container</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Todo_container;

const styles = StyleSheet.create({
  container : {
    borderWidth:1,
    padding:10,
    marginBottom:10,
  }
})