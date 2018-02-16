import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class CreateLink extends Component {
	state = {
		description: '',
		url: '',
	};

	submit = async () => {
		const inputs = [this.title_input, this.url_input];
		const { description, url } = this.state;
		await this.props.postMutation({
			variables: {
				description,
				url
			}
		});

		inputs.forEach((input) => {
			input.clear();
			input.resetHeightToMin();
		});
	}

	_onChange = (e, stateParam) => {
		this.setState({
			[stateParam]: e.nativeEvent.text
		});
	}

	render() {
		return (
			<View style={styles.layout}>
				<Text>Title</Text>
				<AutoGrowingTextInput
					style={styles.input}
					onChange={(e) => this._onChange(e, 'description')}
					placeholder="Enter a title"
					ref={(e) => this.title_input = e}
				/>
				<Text>Link (url)</Text>
				<AutoGrowingTextInput
					style={styles.input}
					onChange={(e) => this._onChange(e, 'url')}
					placeholder="Enter the url"
					ref={(e) => this.url_input = e}
				/>
				<Button title="Submit" onPress={this.submit}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	layout: {
		paddingHorizontal: 10,
		paddingVertical: 20,
	},
	input: {
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: '#ededed',
		borderRadius: 5,
		color: 'black',
		fontSize: 15,
		paddingVertical: 5,
		paddingHorizontal: 8,
		marginTop: 8,
		marginBottom: 20,
	}
})

const POST_MUTATION = gql`
	mutation PostMutation($description: String!, $url: String!) {
		post(description: $description, url: $url) {
			id
			createdAt
			url
			description
		}
	}
`

export default graphql(POST_MUTATION, { name: 'postMutation' })(CreateLink);
