import React from 'react';
import { View, ListView, StyleSheet, Text } from 'react-native';
import ListViewItem from './ListViewItem';
import data from '../../data';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row-reverse",
    alignItems: "flex-start",


  },
});

class FramesListView extends React.Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(data),
    };
  }
  render() {
    return (
        <View style={styles.container}>
          <ListView
              ref={ref => this.listView = ref}
              horizontal = {true}
              dataSource={this.state.dataSource}
              onContentSizeChange={(contentWidth, contentHeight) => {
                this.listView.scrollTo({x: contentWidth})
              }}
              renderRow={(data) => <ListViewItem {...data} />} />
        </View>
    );
  }
}

export default FramesListView;