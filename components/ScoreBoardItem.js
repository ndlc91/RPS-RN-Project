import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ScoreBoardItem = props => {
    return (
    <View style={styles.ScoreBoardContainer}>{props.children}</View>
    )
}

const styles = StyleSheet.create({
    ScoreBoardContainer: {
        paddingVertical: 10,
        marginTop: 10,
        height: 60,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
})

export default ScoreBoardItem
