import React, {Component} from 'react';
import {
    View,
    FlatList,
    Text,
    TouchableOpacity,
    StyleSheet,
    Button
} from 'react-native';

class Todo extends Component {

    static defaultProps = {
        list: [],
        handleDelete: () => {}
    }
    

    
    handleMostrarTarefas = ({item}) => {
        return(
            <TouchableOpacity style={styles.row}>
                <Text style={styles.texto}>{ item.text}</Text>
                <Button 
                    title="X" 
                    color="red"
                    onPress={() => this.props.handleDelete(item)} 
                />
            </TouchableOpacity>
        );
    }

    render(){
        const {props} = this;
        const keyExtractor = (item) => item.id
        return(
            <View style={{flexDirection: 'row', margin: 5}}>
                <FlatList 
                    data={props.list}
                    keyExtractor={keyExtractor}
                    renderItem={this.handleMostrarTarefas}    
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
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
export default Todo;