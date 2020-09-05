import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

const AddTodo = ({ addTodo }) => {
    const [todo, setTodo] = useState('')

    const handleChang = (v) => {
        console.log(v)
        setTodo(v);
    }
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='new todo ...'
                onChangeText={(v) => handleChang(v)}
            />
            <Button title='add todo' onPress={() => addTodo(todo)} color='coral' />
        </View>
    )
}

export default AddTodo

const styles = StyleSheet.create({
    input: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        marginVertical: 10,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,


    }
})
