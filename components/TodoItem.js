import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
const TodoItem = ({ todos, deletTodo }) => {
    let todosItem = <FlatList
        data={todos}
        renderItem={({ item }) => (
            <TouchableOpacity
                onPress={() => deletTodo(item.key)}
            >
                <View style={styles.item}>
                    <MaterialIcons name="delete-forever" size={24} color="black" />
                    <Text style={styles.itemText}>{item.text}</Text>
                </View>

            </TouchableOpacity>
        )}
    />
    return (
        <View style={styles.list}>
            {todosItem}
        </View>
    )
}

export default TodoItem

const styles = StyleSheet.create({
    list: {
        padding: 10,
        marginTop: 10,
        flex: 1,




    },
    item: {
        marginTop: 16,
        padding: 16,
        borderWidth: 1,
        borderColor: '#bbb',
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row'


    },
    itemText: {
        marginLeft: 10
    }
})
