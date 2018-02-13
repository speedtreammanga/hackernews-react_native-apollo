/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import Header from './components/Header';
import TabNavigator from './components/TabNavigator';
import LinkList from './components/LinkList';

const httpLink = new HttpLink({ uri: 'http://localhost:4000'});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

export default class App extends Component{
  render() {
    return (
      <ApolloProvider client={client}>
        <View style={styles.container}>
          <Header />
          <TabNavigator />
        </View>
      </ApolloProvider>
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
