import React from 'react'
import {
  ItemCalendar,
  Calendar,
  ItemCalendarTrue,
  JogaYJoga,
  Container,
  SubText,
} from './style'

import { useItens } from '../../../../context/ItensContext'
import { Text } from 'react-native-svg'

export default function CalendarComponent() {
  const porcent = 0.7
  const { screenWidth } = useItens()

  console.log(screenWidth)
  let daysARR = []
  var dataAtual = new Date()

  function isBissexto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0
  }

  for (let index = 1; index <= 366; index++) {
    var data = new Date(dataAtual.getFullYear(), 0, index)
    // console.log(data)
    if (index == 366) {
      let ano = data.getFullYear()
      isBissexto(ano) && daysARR.push(data)
    } else {
      daysARR.push(data)
    }
  }

  function checkar(e) {
    console.log(e)
  }

  return (
    <Container>
      <JogaYJoga>
        <SubText>Jan {'   '}</SubText>
        <SubText>Abr {'          '}</SubText>
        <SubText>Jul {'          '}</SubText>
        <SubText>Oct</SubText>
      </JogaYJoga>
      <Calendar>
        {daysARR.map((e, i) => {
          if (i < 93) {
            return (
              <ItemCalendarTrue
                key={i}
                onPress={() => checkar(e)}
              ></ItemCalendarTrue>
            )
          } else {
            return <ItemCalendar key={i}></ItemCalendar>
          }
        })}
      </Calendar>
    </Container>
  )
}
