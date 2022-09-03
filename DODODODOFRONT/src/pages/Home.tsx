import { View, Text,ScrollView,StyleSheet, ActivityIndicator, } from 'react-native'
import React from 'react'
import Todo_container from '../components/Todo_container'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { FloatingAction } from "react-native-floating-action";
const actions = [
  {
    text: "추가",
    name: "bt_creatitem",
    position: 1
  },
];

const Home = () => {
  return (
      <ScrollView >
      <View style={styles.scrollcontainer}>
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
        <View style={styles.container}>
          <FloatingAction
            actions={actions}
            onPressItem={name => {
              console.log(`selected button: ${name}`);
            }}
          />
        </View>
      </View>
      </ScrollView>
  )
}

export default Home;
const styles = StyleSheet.create({
  scrollcontainer : {
    flex:1,
  },
  container : {
    transform: [{translateX: 0}, {translateY: 650}],
  },
});