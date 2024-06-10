import React from 'react';
import { View, Switch, Text } from 'react-native';

const SettingsScreen: React.FC = () => {
  return (
    <View>
      <Text>Modo Oscuro</Text>
      <Switch />
      <Text>Cambiar Idioma</Text>
      <Switch />
    </View>
  );
};

export default SettingsScreen;
