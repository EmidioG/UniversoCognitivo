import { TouchableOpacity, View } from 'react-native';
import React from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation, useNavigationState } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export default function AddHabity(props) {
  const [status, setStatus] = useState(['add']);

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
    if (status.includes('add')) {
      navigation.navigate('Add');
      setStatus(['back']);
    } else {
      navigation.goBack();
      setStatus(['add']);
    }
  };
  //!                          simplesmente uma gambiarra braba que eu e o gpt fizemo
  return (
    <View>
      <TouchableOpacity onPress={goToDetails}>
        {status[0] == 'add' ? (
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
