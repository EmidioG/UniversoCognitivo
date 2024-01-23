import React from 'react-native';
import List from '../../components/List';

import { Container, NewContainerList } from './style';
import { useItens } from '../../context/ItensContext';
import NavInfo from '../../NavInfo';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

export default function Home() {
  const { itens, setItens } = useItens();
  const isFocused = useIsFocused();

  const getData = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);

      // console.log(jsonValue);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.error(e);
    }
  };

  const loadData = async () => {
    try {
      const data = await getData('habits');
      setItens(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (isFocused) {
      // Atualize os dados quando a tela estiver em foco
      loadData();
    }
  }, [isFocused]);
  return (
    <>
      <Container>
        <NavInfo />
        <NewContainerList
          keyExtractor={(item) => item.nome}
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
