import React, { Component } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { graphql, withApollo } from 'react-apollo';
import gql from 'graphql-tag';

import Link from './Link';

class LinkList extends Component {
	state = {
		refreshing: false,
		feedQuery: {
			loading: true
		},
	}

	componentDidMount() {
		this._fetchLinks();
	}

	_fetchLinks = async () => {
		console.log('refreshing...');
		await this.setState({ refreshing: true });
		const { client } = this.props;
		const res = await client.query({
			query: FEED_QUERY,
		});
		// console.log('.readQuery()', client.readQuery());
		console.log('newly fetched res: ', res);
		await this.setState({
			refreshing: false,
			feedQuery: res,
		});
	}

	render() {
		const { feedQuery, refreshing } = this.state;

		if (feedQuery && feedQuery.loading)
			return <Text>Loading...</Text>
		if (feedQuery && feedQuery.error)
			return <Text style={styles.error}>Error</Text>

		const linksToRender = [...feedQuery.data.feed.links].reverse();

		return (
			<FlatList
				style={styles.list}
				data={linksToRender}
				onRefresh={this._fetchLinks}
				refreshing={refreshing}
				keyExtractor={(link, index) => `${index}`}
				renderItem={(link) =>
					(<Link link={link} />)
				}
			/>
		);
	}
}

const styles = StyleSheet.create({
	list: {
		paddingTop: 6,
		paddingBottom: 15,
		paddingHorizontal: 20,
	},
	error: {
		color: 'red',
	}
});

const FEED_QUERY = gql`
	query FeedQuery {
		feed {
			links {
				id
				createdAt
				url
				description
			}
		}
	}
`

export default withApollo(LinkList);
// export default graphql(FEED_QUERY, { name: 'feedQuery' })(LinkList)
