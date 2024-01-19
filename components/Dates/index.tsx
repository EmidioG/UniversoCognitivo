import React, { useEffect, useState } from 'react';
import {
  Container,
  SessaoAbaixo,
  SessaoCheck,
  SubTexto,
  CheckIcon,
  NotCheckIcon,
} from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Dates(props) {
  const date = new Date();
  const day = date.getDay();
  const diasSem = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'];
  const daysRemove = [6, 5, 4, 3, 2, 1, 0];

  const arrumarDate = (days) => {
    const newDate = new Date();
    newDate.setDate(date.getDate() - days);

    return { date: newDate, posicao: 6 - days, checked: false };
  };

  const arrumaDay = (day) => {
    if (day < 0) {
      day = 7 + day;
    }
    return day;
  };

  const [datesPositions, setDatesPositions] = useState(
    //!                                array de objetos que terá as datas exibidas na tela com as posições
    daysRemove.map((e) => arrumarDate(e))
  );
  // console.log(datesPositions);

  function formatarDataParaString(data) {
    const newData = new Date(data);
    const ano = newData.getFullYear();
    const mes = (newData.getMonth() + 1).toString().padStart(2, '0');
    const dia = newData.getDate().toString().padStart(2, '0');

    return `${ano}-${mes}-${dia}`;
  }

  const [checklistState, setChecklistState] = useState([
    //!                                  array de objetos que terá todas as datas marcadas como check
  ]);

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

  useEffect(() => {
    const updateData = async () => {
      const retrievedData = await getData('item' + props.index);

      console.log(retrievedData);
      setChecklistState(retrievedData);
    };

    updateData();
  }, []);

  useEffect(() => {
    const updateData = async () => {
      checklistState.map((e) => {
        verifyCheck(e);
      });

      await storeData(checklistState, 'item' + props.index);
      const retrievedData = await getData('item' + props.index);
      console.log(retrievedData);
    };

    updateData();
  }, [checklistState]);

  function verifyCheck(item) {
    const newDatesPositions = [...datesPositions];

    const resultado = newDatesPositions.find(
      (objeto) =>
        formatarDataParaString(objeto.date) ===
          formatarDataParaString(item.date) && objeto.checked !== item.checked
    );

    if (resultado) {
      newDatesPositions[resultado.posicao].checked =
        !newDatesPositions[resultado.posicao].checked;

      setDatesPositions(newDatesPositions);
    }
  }

  function ToggleCheck(item) {
    const newChecklistState = [...checklistState];

    const resultado = newChecklistState.find(
      (objeto) =>
        formatarDataParaString(objeto.date) ===
        formatarDataParaString(item.date)
    );

    if (resultado) {
      const indiceCheckListState = newChecklistState.findIndex(
        (objeto) =>
          formatarDataParaString(objeto.date) ===
          formatarDataParaString(resultado.date)
      );

      const updatedChecklistState = [...newChecklistState];

      if (resultado.checked) {
        updatedChecklistState[indiceCheckListState] = {
          date: item.date,
          checked: false,
        };
      } else {
        updatedChecklistState[indiceCheckListState] = {
          date: item.date,
          checked: true,
        };
      }

      setChecklistState(updatedChecklistState);

      const updatedDatesPositions = datesPositions.map((objeto) => {
        if (
          formatarDataParaString(objeto.date) ===
          formatarDataParaString(
            updatedChecklistState[indiceCheckListState].date
          )
        ) {
          return {
            date: objeto.date,
            posicao: objeto.posicao,
            checked: updatedChecklistState[indiceCheckListState].checked,
          };
        }
        return objeto;
      });

      setDatesPositions(updatedDatesPositions);
    } else {
      const newItem = {
        date: item.date,
        checked: true,
      };

      setChecklistState((prevState) => prevState.concat(newItem));

      const updatedDatesPositions = datesPositions.map((objeto) => {
        if (
          formatarDataParaString(objeto.date) ===
          formatarDataParaString(newItem.date)
        ) {
          return {
            date: objeto.date,
            posicao: objeto.posicao,
            checked: newItem.checked,
          };
        }
        return objeto;
      });

      setDatesPositions(updatedDatesPositions);

      // console.log(checklistState);
      // console.log(datesPositions);
    }
  }

  return (
    <Container>
      <SessaoAbaixo>
        {daysRemove.map((e, i) => {
          return (
            <SessaoCheck onPress={() => ToggleCheck(datesPositions[i])} key={i}>
              <SubTexto key={i}>{`${arrumarDate(e).date.getDate()}\n${
                diasSem[arrumaDay(day - e)]
              }`}</SubTexto>

              {datesPositions[i].checked && <CheckIcon />}
              {!datesPositions[i].checked && <NotCheckIcon />}
            </SessaoCheck>
          );
        })}
      </SessaoAbaixo>
    </Container>
  );
}
