/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Easing, Animated } from 'react-native';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { StackNavigator } from 'react-navigation';

import Header from './components/Header';
import TabNavigator from './components/TabNavigator';
import LinkList from './components/LinkList';
import Login from './components/Login';

const httpLink = new HttpLink({ uri: 'http://localhost:4000'});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

class App extends Component {

	_onPressLogin = () => {
		this.props.navigation.navigate('LoginModal');
	}

  render() {
    return (
      <ApolloProvider client={client}>
        <View style={styles.container}>
          <Header onPressLogin={this._onPressLogin}/>
          <TabNavigator />
        </View>
      </ApolloProvider>
    );
  }
}

export default AppStack = StackNavigator({
	Main: { screen: App },
	LoginModal: { screen: Login }
},{
	mode: 'modal',
	headerMode: 'none',
})

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
		right: 0,
		backgroundColor: '#f9f9f9',
  },
  content: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#EFEFEF',
  },
});
