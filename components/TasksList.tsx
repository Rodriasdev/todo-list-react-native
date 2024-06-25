import React from 'react';
import { FlatList, View, Text, TouchableOpacity, Platform, Button } from 'react-native';
import { findTasks } from '../types/tasks.dto';
import { ScaledSheet, scale } from 'react-native-size-matters';
import { useNavigation } from 'expo-router';
import { NavigationProp } from '@/types/navigate';

interface Props {
  tasks: findTasks[];
}

export const TaskList: React.FC<Props> = ({ tasks }) => {

    const navigate = useNavigation<NavigationProp>()

  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigate.navigate("ViewTask", {task: item})}>
          <View style={styles.container}>
            <View style={styles.textContainer}>
              <Text style={[{ fontWeight: 'bold' }]}>Titulo:</Text>
              <Text>{item.title}</Text>
            </View>
            <Text>{item.author}</Text>
            <Text>{item.description}</Text>
            <Text>{item.date}</Text>
            <Button title='Editar' onPress={() => navigate.navigate("EditTask", {task: item})}/>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = ScaledSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: scale(10),
    marginHorizontal: scale(10),
    marginVertical: scale(10),
    padding: scale(10),
    alignSelf: 'center',
    width: Platform.OS === 'web' ? '50%' : '90%',
  },
  textContainer: {
    flexDirection: 'row',
  },
});
