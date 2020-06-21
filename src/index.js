import React from 'react';
import {TouchableOpacity, Text, Alert} from 'react-native';

export default function() {
  return (
    <TouchableOpacity onPress={() => Alert.alert('clicked')}>
      <Text>Oi</Text>
    </TouchableOpacity>
  );
}
