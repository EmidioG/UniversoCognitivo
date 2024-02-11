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
          background-color: ${props.cor};
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

  /* ${(props) =>
    props.active == props.index
      ? css`
          transform: scale(1.3);
        `
      : css`
          transform: scale(1.3);
        `} */
`;
