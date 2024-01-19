import { View, Text } from 'react-native';
import React from 'react';
import { Container } from './style';

export default function Label({ name }) {
  return <Container>{name}</Container>;
}
