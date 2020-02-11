import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import { loadResourcesAsync, handleLoadingError, handleFinishLoading } from './LoadAppHelpers';
import { Body } from './components/StyledText';

export default function App() {
  const [loggedin, setLoggedin] = useState(false)
  const [isLoadingComplete, setLoadingComplete] = useState(false)

  function login() {
    setLoggedin(true)
  }

  function logout() {
    setLoggedin(false)
  }

  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  }
  return (
    <View style={styles.container}>
      <Body>Open up App.js to start working on your app!</Body>
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
