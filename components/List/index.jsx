import React, { useEffect, useState } from 'react'
import { Habit, HabitPorcent, Container, Circle, Touch } from './style'

import { Dimensions, Text } from 'react-native'
import Dates from '../Dates'
import { useNavigation, useNavigationState } from '@react-navigation/native'
import { useItens } from '../../context/ItensContext'

export default function List(props) {
  const { screenWidth } = useItens()

  const tamanhoCirculo = `${
    props.days / props.meta < 1
      ? (props.days / props.meta) * 1.9 * Number(screenWidth)
      : (props.days / props.meta) * 2 * Number(screenWidth)
  }`

  const { status, setStatus } = useItens()

  const navigation = useNavigation()
  const navigationState = useNavigationState((state) => state)
  //!                            não tenho certeza absoluta se esse código tá perfeito
  useEffect(() => {
    return () => {
      if (navigationState && navigationState.routes) {
        const currentRoute = navigationState.routes[navigationState.index]

        if (currentRoute.name == 'DetailsHabit') {
          setStatus(['DetailsHabit'])
        }
      }
    }
  }, [navigationState])

  const openDetails = () => {
    if (!status.includes('Home')) {
      navigation.navigate('DetailsHabit')
      setStatus(['Home'])
    } else {
      navigation.navigate('Home')
      setStatus(['DetailsHabit'])
    }
  }

  return (
    <Container corI={props.index} color={props.color[1]}>
      <Touch onPress={openDetails}>
        <HabitPorcent>
          {((props.days / props.meta) * 100).toFixed(2)}%
        </HabitPorcent>
        <Habit>{props.name}</Habit>
      </Touch>
      <Dates index={props.index} daysMeta={props.days} />
      <Circle
        tamanho={tamanhoCirculo}
        corI={props.index}
        color={props.color[0]}
      ></Circle>

      <Text></Text>
    </Container>
  )
}
