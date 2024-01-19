import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  color: #1cfce4;
  font-weight: bold;
`;

export const Container = styled.View`
  height: ${RFPercentage(10)}px;
  justify-content: center;
`;
