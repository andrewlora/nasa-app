if (__DEV__) {
  require('./ReactotronConfig');
}
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Routes from './src/routes';

function App(): JSX.Element {
  const {container} = styles;
  return (
    <SafeAreaView style={container}>
      <Routes />
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
