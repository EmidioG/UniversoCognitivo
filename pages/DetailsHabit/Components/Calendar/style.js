import { css } from 'styled-components'
import styled from 'styled-components/native'
const multiply = 0.98
import { useItens } from '../../../../context/ItensContext'
export const Container = styled.View`
  /* background-color: ${({ theme }) => theme.colors.backgroundLight}; */
  justify-content: center;
  /* padding: 10px 0; */
`

export const Calendar = styled.View`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  ${(props) => {
    const { screenWidth } = useItens()
    return css`
      height: ${0.003 * screenWidth * 160 * multiply}px;
    `
  }}
`

export const ItemCalendar = styled.TouchableOpacity`
  color: white;
  background-color: rgba(220, 20, 60, 0.5);
  border-radius: 1px;
  box-sizing: border-box;

  ${(props) => {
    const { screenWidth } = useItens()
    return css`
      margin: ${0.003 * screenWidth * 0.7 * multiply}px;
      height: ${0.003 * screenWidth * 10 * multiply}px;
      width: ${0.003 * screenWidth * 10 * multiply}px;
      padding: ${0.003 * screenWidth * 1 * multiply}px;
    `
  }}
`

export const ItemCalendarTrue = styled(ItemCalendar)`
  background-color: crimson;
`

export const JogaYJoga = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;

  padding: 5px 0;

  ${(props) => {
    const { screenWidth } = useItens()
    return css`
      width: ${237 * screenWidth * 0.003 * multiply}px;
    `
  }}
`

export const SubText = styled.Text`
  ${(props) => {
    const { screenWidth } = useItens()
    return css`
      font-size: ${6 * screenWidth * 0.003 * multiply}px;
    `
  }}
`
