import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import Todo_container from '../components/Todo_container';

const Home = () => {
  return (
    <ScrollView>
      <View style={styles.scrollcontainer}>
        <Todo_container />
      </View>
    </ScrollView>
  );
};

export default Home;
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
