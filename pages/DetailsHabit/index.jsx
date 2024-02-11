import { Dimensions, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import {
  Body,
  Container,
  Porcent,
  Title,
  Top,
  Circle,
  Calendar,
  ItemCalendar,
} from './style';

export default function DetailsHabit() {
  //!               """""""""""""""                  CIRCLE
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

  const porcent = 0.7;

  let daysARR = [];

  for (let index = 0; index < 366; index++) {
    if (index == 365) {
      daysARR.push('MaN');
    } else {
      daysARR.push('01');
    }
  }

  const tamanhoCirculo = `${
    porcent < 1
      ? porcent * 1.9 * Number(screenWidth)
      : porcent * 2 * Number(screenWidth)
  }`;
  //!                  """""""""""""               CIRCLE
  return (
    <Body>
      <Top>
        <Container>
          <Text>Habito</Text>
          <Title>Correr</Title>
        </Container>
        <Container>
          <Text>Regularidade</Text>
          <Title>Continua</Title>
        </Container>
        <Circle tamanho={tamanhoCirculo} color={'#dc143c'}></Circle>
      </Top>
      <Container>
        <Text>Overview</Text>
        <Porcent>70%</Porcent>
      </Container>
      {/* // 7x27 // 14x27 // 7x53 */}
      <Container>
        <Text>Calendario</Text>
        <Calendar>
          {daysARR.map((e, i) => {
            return <ItemCalendar key={i}>{e}</ItemCalendar>;
          })}
        </Calendar>
      </Container>
    </Body>
  );
}
