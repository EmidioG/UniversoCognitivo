import React from 'react-native';
import { StyleSheet, SafeAreaView } from 'react-native';

import List from '../../components/List';

import { Container, NewContainerList } from './style';
import { useItens } from '../../context/ItensContext';
import NavInfo from '../../NavInfo';

export default function Home() {
  const { itens, setItens } = useItens();
  return (
    <>
      <Container>
        <NavInfo />
        <NewContainerList
          keyExtractor={(item) => item.i}
          data={itens}
          renderItem={({ item }) => (
            <List
              index={item.i}
              porcent={item.porcent}
              name={item.nome}
              meta={item.meta}
              days={item.days}
              color={item.color}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </Container>
    </>
  );
}
