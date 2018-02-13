import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Link extends Component {
	render() {
		const { link } = this.props;
		return (
			<View style={styles.layout}>
				<View style={styles.leftside}>
					<Text style={styles.index}>{link.index + 1}.</Text>
					<Text style={styles.index} onPress={() => {}}>
						▲
					</Text>
				</View>
				<View style={styles.rightside}>
					<Text numberOfLines={2}>{link.item.description}</Text>
					<Text style={styles.url}>({link.item.url})</Text>
					<Text numberOfLines={1}>
						{link.item.votes.length} votes | by{' '}
						{link.item.postedBy
							? link.item.postedBy.name
							: 'Unknown'
						}
					</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	layout: {
		display: 'flex',
        flexDirection: 'row',
        marginVertical: 8,
	},
	leftside: {
		display: 'flex',
		flexDirection: 'row',
		paddingRight: 2,
    },
    rightside: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
    },
	index: {
		color: 'gray',
		paddingRight: 3,
	},
	url: {
		fontSize: 12,
		color: 'gray',
		paddingTop: 3,
		paddingBottom: 3,
	}
});

export default Link;
