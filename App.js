import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header, Button, Spinner} from './src/components/common';
import Search from './src/components/Search';
import { SplashScreen } from 'expo';
class App extends React.Component {
  componentWillMount()
  {
    SplashScreen.hide();
  }
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