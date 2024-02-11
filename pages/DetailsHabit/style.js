import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  padding: 10px;
  flex: 1;
`;

export const Body = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  gap: 20px;
`;

export const Top = styled.View`
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  background-color: rgba(220, 20, 60, 0.5);
  border-radius: 10px;
  overflow: hidden;
  z-index: -2;
`;

export const Title = styled.Text`
  font-size: ${RFValue(21)}px;
  z-index: 1;
  color: white;
`;

export const Porcent = styled.Text`
  font-size: ${RFValue(60)}px;
`;

export const Circle = styled.View`
  border-radius: 100000000px;
  position: absolute;
  z-index: -1;
  ${(props) => {
    const tamanhoCirculo = String(props.tamanho);
    return css`
      height: ${tamanhoCirculo}px;
      width: ${tamanhoCirculo}px;
      left: ${-tamanhoCirculo / 2}px;
      top: ${-tamanhoCirculo / 2}px;
    `;
  }}

  ${(props) => css`
    background-color: ${props.color};
  `}
`;

export const Calendar = styled.View`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 280px;
`;

export const ItemCalendar = styled.Text`
  color: white;
  margin: 1px;
  font-size: 11px;
  background-color:
  background-color: rgba(220, 20, 60, 0.5);;
  border-radius: 2px;
  padding: 1px;
`;
