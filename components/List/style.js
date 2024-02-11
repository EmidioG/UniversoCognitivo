import styled from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { css } from 'styled-components';

export const Habit = styled.Text`
  color: #fff;
  font-size: ${RFValue(12)}px;
  font-weight: bold;
  z-index: 2;
`;

export const Touch = styled.TouchableOpacity`
  z-index: 2;
  position: absolute;
  padding: ${RFValue(5)}px;
  bottom: ${RFValue(0)}px;
  left: ${RFValue(0)}px;
  gap: ${RFValue(18)}px;
`;

export const HabitPorcent = styled.Text`
  color: #fff;
  font-size: ${RFValue(12)}px;
  font-weight: bold;
  z-index: 1;
`;

export const SessaoCheck = styled.View`
  position: absolute;
  right: ${RFValue(5)}px;
  bottom: -${RFValue(35)}px;
  flex-wrap: nowrap;
  flex-direction: row;
  gap: ${RFValue(11)}px;
  z-index: 1;
  width: ${RFValue(185)}px;
`;

export const SessaoAcima = styled.View`
  position: absolute;
  flex-wrap: nowrap;
  flex-direction: row;
  top: ${RFValue(5)}px;
  justify-content: space-between;
  width: 100%;
  padding: 0 ${RFValue(13)}px 0 ${RFValue(5)}px;
`;

export const Container = styled.View`
  height: ${RFValue(60)}px;
  width: 100%;

  ${(props) => css`
    background-color: ${props.color};
  `}

  border-radius: ${RFValue(6)}px;
  overflow: hidden;
  box-sizing: border-box;
  margin-bottom: 16px;
`;

export const Circle = styled.View`
  border-radius: 100000000px;
  position: absolute;
  z-index: 0;
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
