import React from 'react';
import { Text, View } from 'react-native';
import { Home } from './styles/home'

export default class App extends React.Component {
  render() {
    return (
      <View style={Home.container}>
        <Text style={Home.textfield}>Is this live?</Text>
      </View>
    );
  }
}


