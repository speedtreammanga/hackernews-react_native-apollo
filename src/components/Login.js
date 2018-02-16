import React, { Component } from 'react';
import { TouchableOpacity, TextInput, View, Text, Button, AsyncStorage, StyleSheet } from 'react-native';
import { AUTH_TOKEN } from '../constants';

class Login extends Component {
	state = {
		login: true,
		email: '',
		password: '',
		name: '',
	}

	componentDidMount = () => this.login_input.focus();

	_dismiss = () => this.props.navigation.goBack();

	_onPressSubmit = () => {
		// ...
	}

	_saveUserData = token => AsyncStorage.setItem(AUTH_TOKEN, token);g

	_switchLoginState = async () => {
		await this.setState({ login: !this.state.login });
		if (this.state.login) {
			this.login_input.focus();
			return;
		}
		this.name_input.focus();
	}

	render() {
		const { login } = this.state;

		return (
			<View style={styles.layout}>
				<TouchableOpacity
					onPress={this._dismiss}
					style={styles.dismiss}
				>
					<Text>Dismiss</Text>
				</TouchableOpacity>
				<Text style={styles.title}>Welcome</Text>
				{!login && (
					<View style={styles.row}>
						<Text>Full Name</Text>
						<TextInput
							style={styles.input}
							placeholder="Enter your full name"
							ref={(e) => this.name_input = e}
						/>
					</View>
				)}
				<View style={styles.row}>
					<Text>Login</Text>
					<TextInput
						style={styles.input}
						placeholder="Enter your login"
						ref={(e) => this.login_input = e}
					/>
				</View>
				<View style={styles.row}>
					<Text>Password</Text>
					<TextInput style={styles.input} placeholder="Enter your password" />
				</View>
				<TouchableOpacity
					onPress={this._onPressSubmit}
					style={styles.button}
				>
					<Text style={{color: 'white'}}>
						{login
							? 'Login'
							: 'Create account'
						}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={this._switchLoginState}
					style={styles.link_btn}>
					<Text>
						{login
							? 'Need to create an account?'
							: 'Already have an account?'
						}
					</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	layout: {
		backgroundColor: '#f9f9f9',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		padding: 20,
		height: '100%',
	},
	dismiss: {
		position: 'absolute',
		top: 0,
		right: 0,
		padding: 15,
		marginTop: 20,
	},
	title: {
		fontSize: 35,
		fontWeight: 'bold',
		marginBottom: 30,
	},
	row: {
		marginBottom: 20,
	},
	input: {
		marginTop: 8,
		paddingHorizontal: 10,
		paddingVertical: 8,
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: '#ddd',
		borderRadius: 5,
	},
	button: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		backgroundColor: 'orangered',
		borderRadius: 5,
		overflow: 'hidden',
		alignSelf: 'flex-end',
		margin: 5,
	},
	link_btn: {
		alignSelf: 'flex-end',
		paddingVertical: 5,
		paddingHorizontal: 5,
		marginTop: 8,
	}
});

export default Login;
