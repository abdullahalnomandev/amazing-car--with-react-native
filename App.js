import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import CarItem from './assets/Components/CarItems';

export default function App() {

  return (
    <View style={styles.container}>

    <CarItem />
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



