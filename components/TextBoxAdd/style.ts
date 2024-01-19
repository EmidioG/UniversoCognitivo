import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Container = styled.View`
  position: absolute;
  left: ${windowWidth / 2 - 150}px;
  bottom: ${windowHeight / 2 - 100}px;
  width: 300px;
  height: 200px;
  background-color: aliceblue;
  z-index: 2;
  border-radius: 10px;
`;
export const Label = styled.View``;
export const Texto = styled.Text`
  color: black;
  text-align: center;
`;
