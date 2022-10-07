import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const Todo_container = () => {
  return (
    <BouncyCheckbox
      size={25}
      fillColor="red"
      unfillColor="#FFFFFF"
      text="아침밥먹기"
      iconStyle={{borderColor: 'red'}}
      innerIconStyle={{borderWidth: 1}}
      style={styles.item}
      onPress={(isChecked: boolean) => {
        console.log('check');
      }}
    />
  );
};

export default Todo_container;

const styles = StyleSheet.create({
  scrollcontainer: {
    flex: 1,
  },
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});
