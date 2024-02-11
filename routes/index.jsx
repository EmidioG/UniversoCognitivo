import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackRoutes from './stack.routes';
import Header from '../components/Header';
import { SafeViewAndroid } from '../components/SafeViewAndroid/style';

export default function Routes() {
  return (
    <>
      <NavigationContainer>
        <SafeViewAndroid>
          <Header />
          <StackRoutes />
        </SafeViewAndroid>
      </NavigationContainer>
    </>
  );
}

import styled from 'styled-components/native';

export const Container = styled.Text`
  color: white;
`;
