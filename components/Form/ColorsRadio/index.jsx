import React from 'react';
import { Container, Icon } from './style';

export default function ColorsRadio({
  color,
  index,
  whatIsSelected,
  setIsSelected,
  setColor,
}) {
  const mainColor = Object.values(color)[0];
  const lightColor = Object.values(color)[1];

  const selectButton = () => {
    setIsSelected(index);
    setColor([mainColor, lightColor]);
  };

  return (
    <Container
      onPress={selectButton}
      index={index}
      active={whatIsSelected}
      activeOpacity={0.8}
    >
      <Icon cor={mainColor}></Icon>
    </Container>
  );
}
