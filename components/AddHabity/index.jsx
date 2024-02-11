import { TouchableOpacity, View } from 'react-native';
import React from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation, useNavigationState } from '@react-navigation/native';
import { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useItens } from '../../context/ItensContext';

export default function AddHabity(props) {
  const { status, setStatus } = useItens();

  const navigation = useNavigation();
  const navigationState = useNavigationState((state) => state);
  //!                            não tenho certeza absoluta se esse código tá perfeito
  useEffect(() => {
    return () => {
      if (navigationState && navigationState.routes) {
        const currentRoute = navigationState.routes[navigationState.index];

        if (currentRoute.name == 'Add') {
          setStatus(['add']);
        }
      }
    };
  }, [navigationState]);

  const goToDetails = () => {
    if (!status.includes('Home')) {
      navigation.navigate('Add');
      setStatus(['Home']);
    } else {
      navigation.navigate('Home');
      setStatus(['add']);
    }
  };
  //!                          simplesmente uma gambiarra braba que eu e o gpt fizemo
  return (
    <View>
      <TouchableOpacity onPress={goToDetails}>
        {status[0] !== 'Home' ? (
          <Icon name="add-circle-outline" size={RFValue(40)} color="#a035cd" />
        ) : (
          <Icon
            name="arrow-back-circle-outline"
            size={RFValue(40)}
            color="#a035cd"
          />
        )}
      </TouchableOpacity>
    </View>
  );
}
