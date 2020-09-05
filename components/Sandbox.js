import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Sandbox = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>one</Text>
            <Text style={styles.boxTwo}>two</Text>
            <Text style={styles.boxThree}>three</Text>
            <Text style={styles.boxFour}>four</Text>
        </View>
    )
}

export default Sandbox

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        paddingTop: 40,
        backgroundColor: '#ddd',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'

    },
    boxOne: {
        backgroundColor: 'violet',
        padding: 10


    },
    boxTwo: {
        backgroundColor: 'gold',
        padding: 20

    },
    boxThree: {
        backgroundColor: 'coral',
        padding: 30

    },
    boxFour: {
        backgroundColor: 'skyblue',
        padding: 35

    }

})
