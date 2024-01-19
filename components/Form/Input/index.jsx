import React from 'react';
import { Container } from './style';

export default function Input({ place, setName }) {
  return (
    <Container
      onChangeText={setName}
      placeholder={place}
      placeholderTextColor="#aaa"
      maxLength={15}
    />
  );
}
