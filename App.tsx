/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';

import {View, StyleSheet, FlatList} from 'react-native';

import {GoalItem, GoalInput} from './components';

const App = () => {
  const [courseGoals, setCourseGoals] = useState<string[]>([]);

  const addGoalHandler = (enteredGoal: string) => {
    setCourseGoals([...courseGoals, enteredGoal]);
  };

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        data={courseGoals}
        renderItem={({item, index}) => <GoalItem key={index}>{item}</GoalItem>}
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
