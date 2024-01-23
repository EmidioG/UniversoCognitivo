import React, { useEffect, useState } from 'react';
import { Habit, HabitPorcent, SessaoAcima, Container, Circle } from './style';

import { Dimensions, Text } from 'react-native';
import Dates from '../Dates';

export default function List(props) {
  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get('window').width
  );

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(Dimensions.get('window').width);
    };

    // Adiciona um listener para detectar mudanças no tamanho da tela
    Dimensions.addEventListener('change', updateScreenWidth);
  }, []);

  const tamanhoCirculo = `${
    props.days / props.meta < 1
      ? (props.days / props.meta) * 1.9 * Number(screenWidth)
      : (props.days / props.meta) * 2 * Number(screenWidth)
  }`;

  return (
    <Container corI={props.index} color={props.color[1]}>
      <SessaoAcima>
        <HabitPorcent>
          {((props.days / props.meta) * 100).toFixed(2)}%
        </HabitPorcent>
      </SessaoAcima>

      <Habit>{props.name}</Habit>

      <Dates index={props.index} daysMeta={props.days} />
      <Circle
        tamanho={tamanhoCirculo}
        corI={props.index}
        color={props.color[0]}
      ></Circle>

      <Text></Text>
    </Container>
  );
}
