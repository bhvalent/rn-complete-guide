import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import GoalItem from './Components/GoalItem';
import GoalInput from './Components/GoalInput';

export default function App() {
	const [courseGoals, setCourseGoals] = useState([]);
	const [isAddMode, setIsAddMode] = useState(false);

	const addGoalHandler = goalTitle => {
		if (goalTitle.length < 1) return;
		setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goalTitle }]);
		setIsAddMode(false);
	};

	const removeGoalHandler = goalId => {
		setCourseGoals(currentGoals => {
			return currentGoals.filter(goal => goal.id !== goalId);
		});
	};

	const cancelAddGoalHandler = () => {
		setIsAddMode(false);
	}

	return (
		<View style={styles.screen}>
			<Button title='Add New Goal' onPress={() => setIsAddMode(true)} />
			<GoalInput
				visible={isAddMode}
				onAddGoal={addGoalHandler}
				onCancel={cancelAddGoalHandler}
			/>
			<FlatList
				keyExtractor={(item, _) => item.id}
				data={courseGoals}
				renderItem={itemData => (
					<GoalItem
						title={itemData.item.value}
						id={itemData.item.id}
						onDelete={removeGoalHandler}
					/>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 50
	}
});
