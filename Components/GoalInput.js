import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
	const [enteredGoal, setEnteredGoal] = useState('');

	const goalInputHandler = (enteredText) => {
		setEnteredGoal(enteredText);
	};

	const addGoalHandler = () => {
		props.onAddGoal(enteredGoal);
		setEnteredGoal('');
	}

	return (
		<Modal visible={props.visible} animationType='slide'>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder='Course Goal'
					style={styles.input}
					onChangeText={goalInputHandler}
					value={enteredGoal}
				/>
				<View style={styles.btnContainer}>
					<View style={styles.btn}>
						<Button
							title='CANCEL'
							onPress={props.onCancel}
							color='red'
						/>
					</View>
					<View style={styles.btn}>
						<Button title='ADD' onPress={addGoalHandler} />
					</View>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1
	},
	input: {
		borderColor: 'black',
		borderWidth: 1,
		width: '80%',
		padding: 10,
		marginBottom: 10
	},
	btnContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '40%'
	},
	btn: {
		width: '45%'
	}
});

export default GoalInput;