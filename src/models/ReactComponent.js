import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';

import { AUTH_TOKEN } from '../constants';

class authComponent extends Component {
	constructor(props) {
		super(props);
	}

	_fetchAuthToken = () => {
		AsyncStorage.getItem(AUTH_TOKEN, (err, res) => {
			if (!err)
				this.setState({ authToken: 'res', fetchingAuthToken: false });
		});
	}
}

export default authComponent;
