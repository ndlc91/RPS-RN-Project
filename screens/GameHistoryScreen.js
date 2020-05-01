import React from 'react'
import { View, Text, ScrollView, Button, StyleSheet } from 'react-native'

const GameHistoryScreen = props => {
    return (
        <ScrollView contentContainerStyle={styles.list}>
        {props.roundsHistory.map((output, index) => <View key={index} style={styles.listItem}><Text style={styles.listText}>{output}</Text></View>)}
      </ScrollView>
    )
}

const styles = StyleSheet.create({
    list: {
        flexGrow: 1,
        justifyContent: "flex-start",
        alignItems: "center"
      },
    listItem: {
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 20,
        padding: 15,
        marginVertical: 10,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "center",
        width: "70%",
        shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    elevation: 8,
      },
      listText: {
          fontSize: 20,
      }
})

export default GameHistoryScreen
