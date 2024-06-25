import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Home from './src/views/Home';

function App(): JSX.Element {
  const {container} = styles;
  return (
    <SafeAreaView style={container}>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(7,26,93,255)',
  },
});

export default App;
