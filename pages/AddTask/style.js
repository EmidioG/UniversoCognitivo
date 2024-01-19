import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
  padding-top: ${RFValue(10)}px;
  justify-content: space-between;
`;

export const ContainerScroll = styled.ScrollView``;

export const Meta = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${RFValue(5)}px;
`;

export const ColorsOrganize = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${RFValue(5)}px;
`;

export const RadioItens = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  flex-direction: row;
  gap: 0px;
  border-radius: 500px;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  overflow: hidden;
`;

export const OverflowView = styled.View`
  justify-content: flex-start;
  border-radius: 500px;
  overflow: hidden;
  flex: 1;
`;

export const Separator = styled.View`
  gap: ${RFValue(5)}px;
`;
export const FooterCompleter = styled.TouchableOpacity`
  height: ${RFPercentage(9)}px;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  justify-content: center;
  align-items: center;
  border-radius: ${RFValue(22.5)}px;
  margin-top: ${RFValue(10)}px;
`;

export const TextCompleter = styled.Text`
  font-size: ${RFValue(20)}px;
  color: white;
  font-weight: bold;
`;
