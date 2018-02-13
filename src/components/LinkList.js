import React, { Component } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

import Link from './Link';

class LinkList extends Component {
	render() {
		const link = {
			id: 1,
			description: 'React Native JS code runs as a web worker inside this tab',
			url: 'http://localhost:8081/debugger-ui',
			votes: [ {id: 2}, {id: 4}, ]
		}
		return (
            <FlatList 
                style={styles.list}
				data={[link, link, link]}
				renderItem={(link, index) =>
					(<Link key={index} link={link} />)
				}
			/>
		);
	}
}

const styles = StyleSheet.create({
	list: {
        paddingTop: 6,
        paddingBottom: 6,
        paddingHorizontal: 20,
	}
});

export default LinkList;
