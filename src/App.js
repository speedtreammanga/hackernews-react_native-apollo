/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Header from './components/Header';
import TabNavigator from './components/TabNavigator';
import LinkList from './components/LinkList';

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <TabNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  content: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#EFEFEF',
  },
});
