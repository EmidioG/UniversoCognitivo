import { Platform, StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import styled from 'styled-components/native';

export const SafeViewAndroid = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};

  padding: ${RFValue(10)}px;

  padding-top: 0px;
  position: 'absolute';
`;
