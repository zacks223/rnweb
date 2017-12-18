/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  ListView,
  Image,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Ios',
  android: 'Android',
  web: 'Web'
});

const containerTop = Platform.select({
  ios: 20,
  android: 20,
  web: 0,
})

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class App extends Component {
  state = {
    list: ds.cloneWithRows([
      {
        name: '甜甜圈',
        source: require('../assets/img_01.png')
      },
      {
        name: '甜甜圈',
        source: require('../assets/img_01.png')
      },
      {
        name: '甜甜圈',
        source: require('../assets/img_01.png')
      },
      {
        name: '甜甜圈',
        source: require('../assets/img_01.png')
      },
      {
        name: '甜甜圈',
        source: require('../assets/img_01.png')
      },
      {
        name: '甜甜圈',
        source: require('../assets/img_01.png')
      },
      {
        name: '甜甜圈',
        source: require('../assets/img_01.png')
      },
      {
        name: '甜甜圈',
        source: require('../assets/img_01.png')
      },
      {
        name: '甜甜圈',
        source: require('../assets/img_01.png')
      },
    ])
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native {instructions}!
        </Text>
        <ListView
          style={{flex: 1}}
          dataSource={this.state.list}    
          renderRow={(rowData) => (
            <View style={styles.listItem}>
              <Image style={styles.img} source={rowData.source}/>
              <View style={styles.introduction}>
                <Text>
                  {rowData.name}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: containerTop
  },
  listItem: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    borderStyle: 'solid'
  },
  introduction: {
    flex: 1,
    paddingLeft: 10,
  },
  img: {
    width: 100,
    height: 100,
  },
  welcome: {
    fontSize: 24,
    marginBottom: 20
  }
});
