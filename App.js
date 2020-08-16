import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { fetchAsteroidDetailsUsingId } from './util';
import ScreenNavigator from './navigator/navigator';

export default function App() {
  return (
    <ScreenNavigator />
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
