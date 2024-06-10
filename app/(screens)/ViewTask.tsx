import React from 'react';
import { View, Text } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '@/types/navigate';

type ViewTaskRouteProp = RouteProp<RootStackParamList, 'ViewTask'>;

const ViewTaskScreen: React.FC = () => {
  const route = useRoute<ViewTaskRouteProp>();
  const { task } = route.params;

  return (
    <View>
      <Text>Titulo: {task.title}</Text>
      <Text>Autor: {task.author}</Text>
      <Text>Descripción: {task.description}</Text>
      <Text>Fecha: {task.date}</Text>
    </View>
  );
};

export default ViewTaskScreen;
