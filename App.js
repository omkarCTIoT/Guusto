/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Router from './src/Router';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


const App: () => React$Node = () => {
  return (
      <View style={styles.container}>
      
            <Router />
          </View>

  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    height:'100%',
    flexDirection: 'column',
  }

});

export default App;
