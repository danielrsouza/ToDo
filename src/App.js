/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  style
} from 'react-native';
import Form from './domain/Form'

export default class App extends Component {

  render(){
    return(
      <View>
        <View style={styles.header}></View>
        <Form />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#02abe8',
    height: 85,
  }
})
