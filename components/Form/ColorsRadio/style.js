import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';
import Entypo from 'react-native-vector-icons/Entypo';
export const Container = styled.TouchableOpacity`
  padding: ${RFValue(5)}px;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  width: ${RFValue(25)}px;

  ${(props) =>
    props.active == props.index
      ? css`
          background-color: ${({ theme }) => theme.colors.primary1};
          border-radius: 5000px;
        `
      : css`
          background-color: ${({ theme }) => theme.colors.backgroundLight};
        `}
`;
export const Icon = styled(Entypo).attrs({
  name: '500px-with-circle',
  size: 24,
})`
  text-align: center;
  color: ${(props) => props.cor};
`;
