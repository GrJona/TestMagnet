import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center"
  },

});

const TextLabel = (props) => (
    <View style={styles.container}>
      <Text style={{fontFamily:"liron", fontSize:40, color: "#E74B7C"}}>{props.text}</Text>
    </View>
);

export default TextLabel;