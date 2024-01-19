import { Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { Nav, NavBase } from '../../pages/Home/style';
import { RFValue } from 'react-native-responsive-fontsize';
import AddHabity from '../AddHabity';
import { Container, Title } from './style';

export default function Header() {
  return (
    <Container>
      <Nav>
        <NavBase>
          <Image
            style={styles.Image}
            source={require('../../assets/CABEÇOLAGRANDE.png')}
          />
          <Title>Universo Cognitivo</Title>
        </NavBase>

        <AddHabity />
      </Nav>
    </Container>
  );
}

const styles = StyleSheet.create({
  Image: {
    width: RFValue(60),
    height: RFValue(60),
    objectFit: 'contain',
  },
});
