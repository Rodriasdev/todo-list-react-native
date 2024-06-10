import React from 'react';
import { View, TextInput, Button } from 'react-native';

const AddTaskScreen: React.FC = () => {
  return (
    <View>
      <TextInput placeholder="Titulo" />
      <TextInput placeholder="Autor" />
      <TextInput placeholder="Descripción" />
      <TextInput placeholder="Fecha" />
      <Button title="Agregar Tarea" onPress={() => {}} />
    </View>
  );
};

export default AddTaskScreen;
