import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

interface Props {
  onAddGoal: (value: string) => void;
}

const GoalInput: React.FC<Props> = ({onAddGoal}) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const handleInput = (enteredText: string) => {
    setEnteredGoal(enteredText);
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={handleInput}
        placeholder="Course Goal"
        style={styles.input}
        value={enteredGoal}
      />
      <Button title="ADD" onPress={onAddGoal.bind(null, enteredGoal)} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 10,
  },
});

export default GoalInput;
