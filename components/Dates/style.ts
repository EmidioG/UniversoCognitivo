import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

import NotChecked from '../../assets/notChecked.svg';
import CheckI from '../../assets/check.svg';

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(30)}px;
  z-index: 1;
`;
export const SubTexto = styled.Text`
  color: white;
  font-size: ${RFValue(8)}px;
  font-weight: bold;
  text-align: center;
  width: ${RFValue(18)}px;
`;

export const SessaoAbaixo = styled.View`
  position: absolute;
  right: ${RFValue(8)}px;
  top: ${RFValue(4)}px;
  flex-wrap: nowrap;
  flex-direction: row;
  gap: ${RFValue(11)}px;
  z-index: 1;
  width: ${RFValue(185)}px;
`;

export const SessaoCheck = styled.TouchableOpacity`
  gap: ${RFValue(15)}px;
`;

export const CheckIcon = styled(CheckI).attrs({
  width: RFValue(17),
  height: RFValue(17),
})``;
export const NotCheckIcon = styled(NotChecked).attrs({
  width: RFValue(17),
  height: RFValue(17),
})``;
