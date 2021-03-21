import React, {useState} from 'react';
import {View, TextInput, Button, Modal} from 'react-native';
import styles from './styles';

interface Props {
  onAddGoal: (value: string) => void;
  visible: boolean;
  onCancel: () => void;
}

const GoalInput: React.FC<Props> = ({onCancel, visible, onAddGoal}) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const handleInput = (enteredText: string) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setEnteredGoal('');
    onAddGoal(enteredGoal);
  };
  return (
    <Modal animationType={'slide'} visible={visible}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={handleInput}
          placeholder="Course Goal"
          style={styles.input}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;
