import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '@/types/navigate';

type ViewTaskRouteProp = RouteProp<RootStackParamList, 'EditTask'>;

const EditTaskScreen: React.FC = () => {

  const route = useRoute<ViewTaskRouteProp>();
  const { task } = route.params;

  return (
    <View>
      <TextInput placeholder="Titulo" defaultValue={task.title}/>
      <TextInput placeholder="Autor" defaultValue={task.author}/>
      <TextInput placeholder="Descripción" defaultValue={task.description}/>
      <TextInput placeholder="Fecha" defaultValue={task.date}/>
      <Button title="Guardar Cambios" onPress={() => {}} />
    </View>
  );
};

export default EditTaskScreen;
