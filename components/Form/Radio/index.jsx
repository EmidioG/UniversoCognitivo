import React from 'react';
import { Container, Title } from './style';

export default function Radio({ name, index, whatIsSelected, setIsSelected }) {
  const selectButton = () => {
    setIsSelected(index);
  };

  return (
    <Container
      onPress={selectButton}
      index={index}
      active={whatIsSelected}
      activeOpacity={0.8}
    >
      <Title>{name}</Title>
    </Container>
  );
}
