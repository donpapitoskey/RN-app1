/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';

import {Button, View, StyleSheet, FlatList} from 'react-native';

import {GoalItem, GoalInput} from './components';

const App = () => {
  const [courseGoals, setCourseGoals] = useState<string[]>([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (enteredGoal: string) => {
    setCourseGoals([...courseGoals, enteredGoal]);
    setIsAddMode(false);
  };

  const onRemoveGoalHandler = (goalId: number) =>
    setCourseGoals(currentGoals =>
      currentGoals.filter((item, index) => index !== goalId),
    );
  const handleInputVisible = () => setIsAddMode(true);

  const handleCancel = () => setIsAddMode(false);
  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={handleInputVisible} />
      <GoalInput
        onCancel={handleCancel}
        visible={isAddMode}
        onAddGoal={addGoalHandler}
      />
      <FlatList
        data={courseGoals}
        renderItem={({item, index}) => (
          <GoalItem onDelete={onRemoveGoalHandler} id={index} key={index}>
            {item}
          </GoalItem>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});

export default App;
0;
