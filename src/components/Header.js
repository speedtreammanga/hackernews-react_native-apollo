import React from 'react';
import { View, Text, TouchableOpacity, AsyncStorage, StyleSheet } from 'react-native';

import { AUTH_TOKEN } from '../constants';
import Component from '../models/ReactComponent';

class Header extends Component {
	state = {
		authToken: null,
		fetchingAuthToken: true,
	}

	_onPressAuthAction = (authToken) => {
		if (authToken) {
			return;
		}
		// !debounced the following line
		this.props.onPressLogin();
	}

	render() {
		const { authToken, fetchingAuthToken } = this.state;
		if (fetchingAuthToken)
			this._fetchAuthToken();

		return (
			<View style={styles.container}>
				<View style={styles.flexBetween}>
					<Text style={styles.title}>Hacker News</Text>
					<TouchableOpacity
						hitSlop={{top: 5, bottom: 5, left: 5, right: 5}}
						onPress={() => this._onPressAuthAction(authToken)}
					>
					{!fetchingAuthToken &&
						<Text>{!authToken ? 'Login' : 'Logout'}</Text>
					}
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 25,
        paddingRight: 5,
        paddingBottom: 10,
        paddingLeft: 15,
        backgroundColor: '#FE641D',
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    button: {
        color: 'black',
    },
    divider: {
        paddingVertical: 0,
        paddingHorizontal: 3,
    },
    flexBetween: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
    }
})

export default Header;
