import React from 'react'
import { View, Text, ScrollView, Button } from 'react-native'

const GameHistoryScreen = props => {
    return (
        <View>
            <ScrollView>
        {props.roundsHistory.map((output, index) => <View key={index}><Text>{output}</Text></View>)}
      </ScrollView>
        </View>
    )
}

export default GameHistoryScreen
