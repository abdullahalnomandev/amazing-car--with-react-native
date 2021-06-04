import React from 'react';
import {  StyleSheet, Text, View } from 'react-native';
import CarsLint from './assets/Components/CarsList';


export default function App() {

  return (
    <View style={styles.container}>
      
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



