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
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import { labeledStatement } from '@babel/types';
import Todo from './domain/Todo';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: null,
      text: "",
      itens: []
    }

    this.handleSaveTodoItem = this.handleSaveTodoItem.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleStartEdit = this.handleStartEdit.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  /**
   * Renderiza o item na listagem do Todo
   * @return HTMLElement
   */
  renderItem(todo) {
    return (
      <TouchableOpacity style={styles.row}>
        <Text>{todo.description}</Text>
        <Button title="deletar" onPress={() => this.handleDelete(todo)} />
        <Button title="editar" onPress={() => this.handleStartEdit(todo)} />
      </TouchableOpacity>
    )
  }

  /**
   * Adiciona o objeto do Todo dentro da listagem
   * @return void
   */
  handleSaveTodoItem() {
    if (this.state.text == '' || this.state.text == null) {
      alert("Você não pode salvar uma tarefa sem preencher o campo.");
      return false;
    }

    let itens = [];

    if (this.state.id) {
      itens = this.state.itens.map(todo => {
        if (todo.id === this.state.id) {
          const todoToEdit = new Todo(this.state.text)
          todoToEdit.id = todo.id;
        } else {
          return todo;
        }
      });
    } else {
      itens = [...this.state.itens, new Todo(this.state.text)];
    }
    this.setState({ itens, text: "", id: null })

    alert("Voce inseriu uma nova tarefa com sucesso!")
  }

  handleDelete(todoToDelete) {
    console.log(todoToDelete)
    // Filtra a lista todos MENOS o objeto que deseja deletar
    const filteredList = this.state.itens.filter(todo => todo !== todoToDelete);
    this.setState({ itens: filteredList });
  }

  handleStartEdit(todo) {
    this.setState({
      id: todo.id,
      text: todo.description
      
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}></View>
        <View style={styles.container}>
          <FlatList data={this.state.itens} renderItem={({item})=>this.renderItem(item)} keyExtractor={(item, index) => index} />
          <View>
            <TextInput
              style={styles.input}
              value={this.state.text}
              onChangeText={(text) => { this.setState({ text }) }}
              onSubmitEditing={this.handleSaveTodoItem}
              placeholder="Digite aqui uma nova tarefa"
            />
            <Button onPress={this.handleSaveTodoItem} title="Salvar Nova Tarefa" />
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
  row: {
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#d9d9d9",
    color: "black",
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

