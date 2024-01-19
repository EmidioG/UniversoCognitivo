import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.Text`
  font-size: ${RFValue(15)}px;
  color: white;
  font-weight: bold;
  padding: ${RFValue(5)}px;
`;
