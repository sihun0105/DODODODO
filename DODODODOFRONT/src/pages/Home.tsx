import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import Todo_container from '../components/Todo_container'
import BouncyCheckbox from "react-native-bouncy-checkbox";
const Home = () => {
  return (
      <ScrollView>
      <BouncyCheckbox
  size={25}
  fillColor="red"
  unfillColor="#FFFFFF"
  text="Custom Checkbox"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 1 }}
  onPress={(isChecked: boolean) => {
    console.log('check');
  }}
/>
      </ScrollView>
  )
}

export default Home