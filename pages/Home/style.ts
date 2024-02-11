import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #222;
  flex: 1;
`;

export const ContainerList = styled.View`
  width: 100%;
  gap: 20px;
`;

export const Nav = styled.View`
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  align-self: center;
  justify-content: space-between;
  width: 98%;
`;

export const NavBase = styled.View`
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  align-self: flex-start;
`;

export const NewContainerList = styled.FlatList`
  flex: 1;
  width: 100%;
`;
