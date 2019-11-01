import React, {Component} from 'react';
import {
    View,
    Button,
    TextInput,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Text
} from 'react-native';
import TodoClass from './TodoClass'

class Form extends Component {

    state = {
        id: null,
        text: '',
        itens: []
    }

    // Lida com salvar o estado do texto.
    handleSalvaTexto = (text) => {
        this.setState({text})
    }
    

    // Lida com deletar uma tarefa.
    handleDelete = (item) => {
        const {itens} = this.state;
        const listNova = itens.filter(listItem => item.id !== listItem.id )

        this.setState({
            itens: listNova
        });
    };
    
    // Lida com salvar uma tarefa.
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

    render() {
        const keyExtractor = (item) => item.id

        return(
            <View>
                <View style={{flexDirection: 'row', margin: 5}}>
                    <FlatList 
                        data={this.state.itens}
                        keyExtractor={keyExtractor}
                        renderItem={item => (
                            <TouchableOpacity style={styles.row}>
                                <Text style={styles.texto}>{ item.item.text }</Text>
                                <Button 
                                    title="Remover" 
                                    color="red"
                                    onPress={() => this.handleDelete(item.item)} 
                                />
                            </TouchableOpacity>
                        )}    
                    />
                </View>

                <TextInput 
                    style={styles.input}
                    placeholder="Digite aqui uma nova tarefa."
                    value={this.state.text}
                    onChangeText={this.handleSalvaTexto}
                />
                <Button 
                    title="Adicionar nova tarefa"
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
      },
      row: {
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: "#d9d9d9",
        color: "black",
        fontSize: 25,
        margin: 10,
        borderRadius: 10,
        textAlign: 'center'
      },
      texto: {
          textAlign: 'center',
          fontSize: 20,
          color: 'black',
          padding: 10
      }
})

export default Form;