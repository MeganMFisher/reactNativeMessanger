import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Client from './components/client';
import Messages from './components/Messages';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.words}>Heo!</Text>
        {/* <Messages/> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray'
  },
  words: {
    color: '#000',
    fontSize: 44

  }
});
