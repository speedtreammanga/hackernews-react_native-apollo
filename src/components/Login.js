import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Login extends Component {
	render() {
		return (
			<View>
				<Text>Login</Text>
				<Text style={styles.button}>Send</Text>
				<Text style={styles.button}>Already have an account?</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	button: {
		padding: '5px 12px',
		color: 'white',
		backgroundColor: 'orangered',
	}
});

export default Login;
