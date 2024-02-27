import { Platform, StatusBar } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { useItens } from '../../context/ItensContext'

import styled from 'styled-components/native'
import { css } from 'styled-components'

export const SafeViewAndroid = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};

  padding: ${RFValue(10)}px;

  padding-top: 0px;
  position: 'absolute';

  ${(props) => {
    const { screenWidth } = useItens()
    return css`
      padding: ${0.003 * screenWidth * 10}px;
    `
  }}
`
