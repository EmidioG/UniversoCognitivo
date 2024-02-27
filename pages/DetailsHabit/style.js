import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useItens } from '../../context/ItensContext'

export const Container = styled.View`
  flex: 1;
  ${(props) => {
    const { screenWidth } = useItens()
    return css`
      padding: ${0.003 * screenWidth * 5}px;
    `
  }}
`

export const Body = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  gap: 20px;
`

export const JogaYJoga = styled.View`
  justify-content: space-between;
  flex-direction: row;

  align-items: center;
`

export const ArrowIconForward = styled(MaterialIcons).attrs({
  name: 'arrow-forward-ios',
  color: 'crimson',
  size: 20,
})`
  text-align: center;
`

export const ArrowIconBack = styled(ArrowIconForward).attrs({
  name: 'arrow-forward-ios',
})`
  transform: scaleX(-1);
`

export const SubTitle = styled.Text`
  font-size: ${RFValue(13)}px;
`

export const SubHighLight = styled(SubTitle)`
  color: crimson;
  font-weight: bold;
  font-size: ${RFValue(15)}px;
`

export const Btn = styled.TouchableOpacity`
  padding: 10px;
  color: crimson;
`

export const Top = styled.View`
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  background-color: rgba(220, 20, 60, 0.5);
  border-radius: 10px;
  overflow: hidden;
  z-index: -2;
`

export const Title = styled.Text`
  font-size: ${RFValue(21)}px;
  z-index: 1;
  color: white;
`

export const Porcent = styled.Text`
  font-size: ${RFValue(60)}px;
`

export const Circle = styled.View`
  border-radius: 100000000px;
  position: absolute;
  z-index: -1;
  ${(props) => {
    const tamanhoCirculo = String(props.tamanho)
    return css`
      height: ${tamanhoCirculo}px;
      width: ${tamanhoCirculo}px;
      left: ${-tamanhoCirculo / 2}px;
      top: ${-tamanhoCirculo / 2}px;
    `
  }}

  ${(props) => css`
    background-color: ${props.color};
  `}
`

export const Calendar = styled.View`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 280px;
`

export const ItemCalendar = styled.Text`
  color: white;
  margin: 1px;
  font-size: 11px;
  background-color: rgba(220, 20, 60, 0.5);
  border-radius: 2px;
  padding: 1px;
`
