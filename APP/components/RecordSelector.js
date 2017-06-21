import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    flexDirection: 'row',
  },

  photo: {
    height: 100,
    width: 100,
    borderRadius: 20,
  },
});

const RecordSelector = (props) => (
    <View style={styles.container}>
      <Image source={{ uri: props.picture.large}} style={styles.photo} />
      <Image source={{ uri: props.picture.large}} style={styles.photo} />
    </View>
);

export default RecordSelector;