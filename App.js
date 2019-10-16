/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TextInput,
  Button
} from 'react-native';
import { labeledStatement } from '@babel/types';


type Props = {};

export default class App extends Component<Props> {
  
  constructor(props){
    super(props)
    this.state = {
      text:"",
      itens: [
        {chave:0, desc:"Item1", done:false},
        {chave:1, desc:"Item2", done:false},
      ]
    }

    this.inserirItem = this.inserirItem.bind(this);
  }

  renderItem(obj){
    return(
      <Text style={styles.linha}>{obj.item.desc}</Text>
    )
  }

  inserirItem(){
    let novoItem = {
      chave: this.state.itens.length.toString(),
      desc: this.state.text,
      done: false
    }

    let itens = this.state.itens;
    itens.push(novoItem);
    this.setState({itens})

    let text = ""
    this.setState({text});

  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.lista} data={this.state.itens} renderItem={this.renderItem} extraData={this.state} />
        <TextInput style={styles.input} value={this.state.text} onChangeText={(text)=>{this.setState({text})}}/>
        <Button onPress={this.inserirItem} title="Salvar Nova Tarefa"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center',
   backgroundColor: '#F5FCFF',
 },
 lista: {
 },
 linha: {
   paddingTop: 20,
   paddingBottom: 20,
   backgroundColor: "blue",
   fontSize: 25,
   marginBottom: 2,
   textAlign: 'center',
 },
 input: {
   padding: 5,
   margin: 5,
   borderWidth: 3,
   borderColor: 'black',
   backgroundColor: 'white'
 }
});

