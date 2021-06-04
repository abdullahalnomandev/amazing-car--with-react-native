import React from 'react';
import {  StyleSheet, Text, View } from 'react-native';
import CarsLint from './assets/Components/CarsList';
import Header from './assets/Components/Header';

export default function App() {

  return (
    <View style={styles.container}>
      
      <Header />
     <CarsLint />

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});



