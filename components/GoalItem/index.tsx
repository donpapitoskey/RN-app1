import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

interface Props {
  onDelete: (key: number) => void;
  id: number;
}

const GoalItem: React.FC<Props> = ({children, onDelete, id}) => {
  return (
    <TouchableOpacity onPress={onDelete.bind(null, id)}>
      <View style={styles.listItem}>
        <Text>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoalItem;
