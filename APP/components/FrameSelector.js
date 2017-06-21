import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from "react-native";

import data from '../../data';
import FramesListView from './FramesListView';
import TextLabel from './TextLabel';
import Button from './Button';
import {Actions} from 'react-native-router-flux';
import Card from './Card';
import CardSection from './CardSection';


class FrameSelector extends React.Component {
  render() {
    var picData = data;
    console.log(picData);
    return(
        <View style={styles.container}>
        <ScrollView  style={styles.scrollview}>
          <Card>
            <TextLabel text="בחר מסגרת"/>
          </Card>
          <Card>
              <FramesListView />
            </Card>
          <Card>
            <Button onPress={Actions.cameraComponent}>צילום</Button>
          </Card>
        </ScrollView>
        </View>
    )
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent:"center"
  },
  scrollview: {
    flex: 1
  }

});

export default FrameSelector;