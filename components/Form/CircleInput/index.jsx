import React from 'react';
import { Container } from './style';

export default function CircleInput({ place, setMeta }) {
  return (
    <Container
      onChangeText={setMeta}
      keyboardType="numeric"
      maxLength={4}
      placeholder={place}
      placeholderTextColor="#aaa"
    />
  );
}
