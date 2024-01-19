import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TextInput`
  padding: ${RFValue(5)}px ${RFValue(10)}px;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  min-width: ${RFValue(50)}px;
  border-radius: 50px;
  color: white;
  text-align: center;
`;
