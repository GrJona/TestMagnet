import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    flexDirection: 'row',
  },

  photo: {
    height: 300,
    width: 300,
    borderRadius: 5,
    resizeMode: 'contain'
  },
});

const ListViewItem = (props) => (
    <View style={styles.container}>
      <Image source={{ uri: props.picture.large}} style={styles.photo} />
    </View>
);

export default ListViewItem;