import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const GoalItem = props => {
	return (
		<TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
			<View style={styles.item}>
				<Text>{props.title}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	item: {
		padding: 10,
		backgroundColor: '#ccc',
		borderColor: 'black',
		borderWidth: 1,
		marginVertical: 10
	}
});

export default GoalItem;