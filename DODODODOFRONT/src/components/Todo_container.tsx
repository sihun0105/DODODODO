import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {FunctionComponent} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
type TodoTextType = {
  title: string;
  deleteTodo: (v: number) => void;
  itemId: number;
  content: string;
  startDate: Date;
  endDate: Date;
};

const Todo_container = ({
  title,
  itemId,
  deleteTodo,
  content,
  startDate,
  endDate,
}: TodoTextType) => {
  return (
    <>
      <BouncyCheckbox
        size={30}
        fillColor="red"
        unfillColor="#FFFFFF"
        text={title.length > 20 ? title.substring(0, 20 - 3) + '...' : title}
        textStyle={{fontSize: 20}}
        iconStyle={{borderColor: 'red'}}
        innerIconStyle={{borderWidth: 1}}
        style={styles.item}
        onPress={(isChecked: boolean) => {
          deleteTodo(itemId);
        }}
      />
      <Text>{content}</Text>
      <Text>{startDate}</Text>
      <Text>{endDate}</Text>
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
