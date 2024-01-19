import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TextInput`
  color: white;
  padding: ${RFValue(11)}px;
  font-size: ${RFValue(10)}px;
  border-radius: ${RFValue(5)}px;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
`;
