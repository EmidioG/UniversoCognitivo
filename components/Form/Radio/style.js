import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  padding: ${RFValue(5)}px;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  width: ${RFValue(50)}px;

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
export const Title = styled.Text`
  font-size: ${RFValue(10)}px;
  text-align: center;
  color: white;
`;
