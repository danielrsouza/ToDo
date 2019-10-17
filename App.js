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
  Button,
  Header,
  SafeAreaView,
  StatusBar,
  SwipeView
} from 'react-native';
import { labeledStatement } from '@babel/types';


type Props = {};

export default class App extends Component<Props> {
  
  constructor(props){
    super(props)
    this.state = {
      text:"",
      itens: [
      ],
    }

    this.inserirItem = this.inserirItem.bind(this);
  }

  renderItem(obj){
    return(
      <Text style={styles.linha}>{obj.item.desc}</Text>
    )
  }

  inserirItem() {
    
    if (this.state.text == '' || this.state.text == null) {
      alert("Você não pode salvar uma tarefa sem preencher o campo.");
      return false;
    }
    let novoItem = {
      chave: this.state.itens.length.toString(),
      desc: this.state.text,
    }

    let itens = this.state.itens;
    itens.push(novoItem);
    this.setState({itens})

    let text = ""
    this.setState({text});

    alert("Voce inseriu uma nova tarefa com sucesso!")

  }

  deletarItem() {
    let itens = this.state.itens.slice();
    itens.splice(index, 1),
    this.setState({itens});
  }

  render() {
    return (
      
    <SafeAreaView style={styles.container}>
      <View style={styles.header}></View>
        <View style={styles.container}>
            <FlatList data={this.state.itens} renderItem={this.renderItem} extraData={this.state} />
          <View>
            <TextInput style={styles.input} value={this.state.text} onChangeText={(text)=>{this.setState({text})}} placeholder="Digite aqui uma nova tarefa" style={styles.texto}/>
            <Button onPress={this.inserirItem} title="Salvar Nova Tarefa" />
          </View>
        </View>
    </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center',
   backgroundColor: 'white',
 },
 linha: {
   paddingTop: 20,
   paddingBottom: 20,
   backgroundColor: "#d9d9d9",
   fontSize: 25,
   margin: 10,
   borderRadius: 10,
   textAlign: 'center',
 },
 input: {
   padding: 5,
   margin: 5,
 },
 texto: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'white',
    textAlign: 'center',
 },
 header: {
   backgroundColor: '#02abe8',
   height: 85,
 },
});

