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
import { useItens } from '../../context/ItensContext';

export default function Dates(props) {
  const date = new Date();
  const day = date.getDay();
  const diasSem = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'];
  const daysRemove = [6, 5, 4, 3, 2, 1, 0];
  const { itens, setItens } = useItens();

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

      // console.log(retrievedData);

      // Verificar se retrievedData não é nulo antes de definir o estado
      setChecklistState(retrievedData || []);
    };

    updateData();
  }, []);

  useEffect(() => {
    const updateData = async () => {
      checklistState &&
        checklistState.map((e) => {
          verifyCheck(e);
          // console.log(checklistState);
        });

      await storeData(checklistState, 'item' + props.index);
      const retrievedData = await getData('item' + props.index);
      // console.log(retrievedData, 'im here bro');
    };

    updateData();
  }, [checklistState]);

  useEffect(() => {
    const updateData = async () => {
      await storeData(itens, 'habits');
    };

    updateData();
  }, [itens]);

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

      if (itens[props.index].tipoDeMeta == 1) {
        setItens((e) => {
          const newItens = [...e];
          newItens[props.index].days = updatedChecklistState.filter((e) => {
            return e.checked;
          }).length;

          console.log('rodou 1 stable');
          return newItens;
        });
      } else {
        setItens((e) => {
          const newItens = [...e];

          // console.log('rodou 0 stable', newItens[props.index]);
          let thisDate;
          let counter = 0;

          updatedChecklistState.sort((a, b) => {
            return new Date(a.date) - new Date(b.date);
          });

          updatedChecklistState.forEach((e) => {
            if (e.checked) {
              if (thisDate) {
                const dateNow = new Date(e.date);

                if (
                  !(
                    thisDate.getFullYear() == dateNow.getFullYear() &&
                    thisDate.getMonth() == dateNow.getMonth() &&
                    thisDate.getDate() == dateNow.getDate()
                  )
                ) {
                  counter = 1;
                } else {
                  counter++;
                }
              } else {
                counter++;
              }

              const dateBro = new Date(e.date);
              dateBro.setDate(dateBro.getDate() + 1);
              // console.log(e);
              thisDate = dateBro;

              // console.log(thisDate);
            }
          });

          newItens[props.index].days = counter;
          return newItens;
        });
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
      console.log(itens[props.index].tipoDeMeta);
      if (itens[props.index].tipoDeMeta == 1) {
        setItens((e) => {
          const newItens = [...e];
          newItens[props.index].days += 1;
          // console.log(checklistState);

          console.log('rodou 1');
          return newItens;
        });
      } else {
        setItens((e) => {
          const newItens = [...e];
          newItens[props.index].days += 1;

          console.log('rodou 0');
          return newItens;
        });
      }

      const updatedChecklistState = [...newChecklistState.concat(newItem)];

      if (itens[props.index].tipoDeMeta == 1) {
        setItens((e) => {
          const newItens = [...e];
          newItens[props.index].days = updatedChecklistState.filter((e) => {
            return e.checked;
          }).length;

          console.log('rodou 1 stable');
          return newItens;
        });
      } else {
        setItens((e) => {
          const newItens = [...e];

          // console.log('rodou 0 stable', newItens[props.index]);
          let thisDate;
          let counter = 0;

          updatedChecklistState.sort((a, b) => {
            return new Date(a.date) - new Date(b.date);
          });

          console.log(updatedChecklistState);

          updatedChecklistState.forEach((e) => {
            if (e.checked) {
              if (thisDate) {
                const dateNow = new Date(e.date);
                console.log(thisDate.getDate() == dateNow.getDate());
                if (
                  !(
                    thisDate.getFullYear() == dateNow.getFullYear() &&
                    thisDate.getMonth() == dateNow.getMonth() &&
                    thisDate.getDate() == dateNow.getDate()
                  )
                ) {
                  counter = 1;
                } else {
                  counter++;
                }
              } else {
                counter++;
              }

              const dateBro = new Date(e.date);

              dateBro.setDate(dateBro.getDate() + 1);
              // console.log(e);
              thisDate = dateBro;
              // console.log(thisDate);
            }
          });

          newItens[props.index].days = counter;
          return newItens;
        });
      }

      console.log(updatedChecklistState);

      setChecklistState(updatedChecklistState);

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
