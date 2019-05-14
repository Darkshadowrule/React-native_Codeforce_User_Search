import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header, Button, Spinner} from './src/components/common';
import Search from './src/components/Search';

class App extends React.Component {
  render() {
    return (
      <View>
       <Header headerText="Codeforces"/>
       <Search/>
      </View>
    );
  }
}

export default App;