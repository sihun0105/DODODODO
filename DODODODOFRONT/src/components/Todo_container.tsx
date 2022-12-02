import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {FunctionComponent} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
type TodoTextType = {
  text: string;
  deleteTodo: (v: number) => void;
  itemId: number;
};

const Todo_container = ({text, itemId, deleteTodo}: TodoTextType) => {
  return (
    <>
      <BouncyCheckbox
        size={30}
        fillColor="red"
        unfillColor="#FFFFFF"
        text={text.length > 20 ? text.substring(0, 20 - 3) + '...' : text}
        textStyle={{fontSize: 20}}
        iconStyle={{borderColor: 'red'}}
        innerIconStyle={{borderWidth: 1}}
        style={styles.item}
        onPress={(isChecked: boolean) => {
          deleteTodo(itemId);
        }}
      />
      <Text>{text}</Text>
    </>
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
    borderRadius: 50,
    flexDirection: 'row',
    marginBottom: 20,
  },
});
