import React, {Component} from 'react';
import {
    View,
    Button,
    TextInput,
    StyleSheet,
    style
} from 'react-native';
import Todo from './Todo';
import TodoClass from './TodoClass'

class Form extends Component {

    state = {
        id: null,
        text: '',
        itens: []
    }

    handleSalvaTexto = (text) => {
        this.setState({text})
    }
    
    handleSalvaTarefa = () => {
        let itens;

        if (this.state.text != '') {
            itens = [...this.state.itens, new TodoClass(this.state.text)];
        
            this.setState({
                itens: itens
            });
            
        } else {
            alert("Você não pode inserir uma tarefa em branco.");
            return;
        }

        this.setState({ itens, text: '', id: null})        
    }

    handleDelete = (item) => {
        const filteredList = this.state.itens.filter(itens => itens !== item);
        this.setState({ itens: filteredList });
    }


    render() {

        return(
            <View>
                <Todo list={this.state.itens} handleDelete={handleDelete()} />

                <TextInput 
                    style={styles.input}
                    placeholder="Digite aqui uma nova tarefa."
                    value={this.state.text}
                    onChangeText={this.handleSalvaTexto}
                />
                <Button 
                    title="Adicionar uma Nova Tarefa"
                    color="red"
                    onPress={this.handleSalvaTarefa}
                />
            </View>
        )
    }
    
}
const styles = StyleSheet.create({
    input: {
        padding: 5,
        margin: 5,
      }
})

export default Form;