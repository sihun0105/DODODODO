import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const ProfileTopArea = ({email, id}) => {
  return (
    <View style={styles.container}>
      <Text>{email}</Text>
      <Text>{id}</Text>
    </View>
  );
};

export default ProfileTopArea;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 100,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
});
