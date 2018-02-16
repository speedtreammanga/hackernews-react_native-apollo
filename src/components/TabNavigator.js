import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';

import LinkList from './LinkList';
import CreateLink from './CreateLink';

class TabHolder extends Component {
	render() {
		return (
			<Text>Placeholder</Text>
		)
	}
}

export default TabNavigator(
{
	new: { screen: LinkList },
	submit: { screen: CreateLink },
	top: { screen: TabHolder },
	search: { screen: TabHolder },
},
{
	swipeEnabled: true,
	tabBarPosition: 'top',
	tabBarOptions: {
		activeBackgroundColor: 'orangered',
		labelStyle: {
			fontSize: 15,
			color: 'black',
		},
		style: {
			height: 35,
			backgroundColor: '#FE641D'
		},
		tabStyle: {
			padding: 0,
			margin: 0,
			display: 'flex',
			justifyContent: 'center',
			alignContent: 'center'
		},
		showIcon: false,
		allowFontScaling: true
	},
});
