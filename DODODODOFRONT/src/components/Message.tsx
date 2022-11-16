import {View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import React from 'react';

const Message = ({message}: {message: string[]}) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={message} renderItem={({item}) => <Text>{item}</Text>} />
    </SafeAreaView>
  );
};

export default Message;
const styles = StyleSheet.create({
  container: {},
});
