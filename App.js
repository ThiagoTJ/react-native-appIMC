import React from 'react';
import { StyleSheet, ScrollView, View, StatusBar } from 'react-native';
import Content from './src/componentes/Content';
import Header from './src/componentes/Header'

export default function App() {
  return (

    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <Content />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
