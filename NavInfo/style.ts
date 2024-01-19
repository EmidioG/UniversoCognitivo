import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(30)}px;
`;

export const Texto = styled.Text`
  color: #a035cd;
  font-size: ${RFValue(15)}px;
  font-weight: bold;
`;
