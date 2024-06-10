import React from 'react';
import { View, TextInput, Button } from 'react-native';

const EditTaskScreen: React.FC = () => {
  return (
    <View>
      <TextInput placeholder="Titulo" />
      <TextInput placeholder="Autor" />
      <TextInput placeholder="Descripción" />
      <TextInput placeholder="Fecha" />
      <Button title="Guardar Cambios" onPress={() => {}} />
    </View>
  );
};

export default EditTaskScreen;
