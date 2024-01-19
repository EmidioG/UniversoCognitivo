import React from 'react-native';
import Input from '../../components/Form/Input';
import {
  Container,
  FooterCompleter,
  Meta,
  RadioItens,
  Separator,
  TextCompleter,
  ColorsOrganize,
  OverflowView,
  ContainerScroll,
} from './style';
import Label from '../../components/Form/Label';
import Radio from '../../components/Form/Radio';
import CircleInput from '../../components/Form/CircleInput';
import { useState } from 'react';
import ColorsRadio from '../../components/Form/ColorsRadio';
import { useItens } from '../../context/ItensContext';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AddTask() {
  const [scrollViewWidth, setScrollViewWidth] = useState(0);

  const handleScrollViewLayout = (event) => {
    const { width } = event.nativeEvent.layout;
    setScrollViewWidth(width);
  };

  const MetaMetric = ['Dias', 'Meses', 'Anos'];

  const ColorsArr = [
    { blue: '#221155', blue_light: 'rgba(34, 17, 85, 0.5)' },
    { Purple: '#6600cc', Purple_light: 'rgba(102, 0, 204, 0.5)' },
    { Red: '#ff0000', Red_light: 'rgba(255, 0, 0, 0.5)' },
    { Magenta: '#9F2B68', Magenta_light: 'rgba(159, 43, 104, 0.5)' },
    { azure: '#007FFF', azure_light: 'rgba(0, 127, 255, 0.5)' },
    { yellow: '#e1e100', yellow_light: 'rgba(225, 225, 0, 0.5)' },
    { orange: '#ff9933', orange_light: 'rgba(255, 153, 51, 0.5)' },
    { green: '#00D000', green_light: 'rgba(0, 208, 0, 0.5)' },
    { dark_green: '#004225', dark_green_light: 'rgba(0, 66, 37, 0.5)' },
    { black: '#000000', black_light: 'rgba(0, 0, 0, 0.5)' },
    { purple_gray: '#856088', purple_gray_light: 'rgba(133, 96, 136, 0.5)' },
    { crimson: '#DC143C', crimson_light: 'rgba(220, 20, 60, 0.5)' },
    { brown: '#996633', brown_light: 'rgba(153, 102, 51, 0.5)' },
  ];

  const [metricIsSelected, setMetricIsSelected] = useState(0);

  const [colorIsSelected, setColorIsSelected] = useState();

  const [color, setColor] = useState();

  const [habitName, setHabitName] = useState('');

  const [meta, setMeta] = useState('');

  const { itens, setItens } = useItens();

  const storeData = async (value, key) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      console.error(e);
    }
  };
  const getData = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.error(e);
    }
  };

  const navigation = useNavigation();

  const handleAddTask = async () => {
    setItens((prevItens) => [
      ...prevItens,
      {
        porcent: 30,
        nome: habitName,
        i: prevItens.length,
        meta: meta,
        days: 5,
        color: color,
      },
    ]);
    navigation.navigate('Home');
    await storeData(itens, 'habits');
    const itensBro = await getData('habits');
    console.log(itensBro);
  };

  return (
    <Container>
      <ContainerScroll showsVerticalScrollIndicator={false}>
        {/* <Container>
          <Separator>
            <Separator>
              <Label name="Nome" />
              <Input place='"2 horas podcast"' setName={setHabitName} />
            </Separator>
            <Separator>
              <Label name="Meta" />
              <Meta>
                <CircleInput setMeta={setMeta} place='"75"' />

                <OverflowView width={scrollViewWidth}>
                  <RadioItens onLayout={handleScrollViewLayout}>
                    {MetaMetric.map((e, i) => (
                      <Radio
                        name={e}
                        key={i}
                        index={i}
                        whatIsSelected={metricIsSelected}
                        setIsSelected={setMetricIsSelected}
                      />
                    ))}
                  </RadioItens>
                </OverflowView>
              </Meta>
            </Separator>
            <Separator>
              <Label name="Cor" />
              <ColorsOrganize>
                <OverflowView>
                  <RadioItens>
                    {ColorsArr.map((e, i) => (
                      <ColorsRadio
                        color={e}
                        key={i}
                        index={i}
                        whatIsSelected={colorIsSelected}
                        setIsSelected={setColorIsSelected}
                        setColor={setColor}
                      />
                    ))}
                  </RadioItens>
                </OverflowView>
              </ColorsOrganize>
            </Separator>
          </Separator>
        </Container> */}
      </ContainerScroll>
      <FooterCompleter onPress={handleAddTask}>
        <TextCompleter>Criar</TextCompleter>
      </FooterCompleter>
    </Container>
  );
}
