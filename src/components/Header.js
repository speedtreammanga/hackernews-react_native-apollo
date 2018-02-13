import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Header extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.flexBetween}>
					<Text style={styles.title}>Hacker News</Text>
					<Text onPress={() => {}}>login</Text>
				</View>
				<View style={styles.flexRow}>
					<Text style={styles.button} onPress={() => {}}>
                        new
                    </Text>
					<Text style={styles.divider}>|</Text>
					<Text style={styles.button} onPress={() => {}}>
                        top
                    </Text>
					<Text style={styles.divider}>|</Text>
					<Text style={styles.button} onPress={() => {}}>
                        search
                    </Text>
					<Text style={styles.divider}>|</Text>
                    <Text style={styles.button} onPress={() => {}}>
                        submit
                    </Text>
				</View>
			</View>
		);
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
