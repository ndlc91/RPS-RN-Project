import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const GamePlayButtons = props => {
    return (
        <View style={styles.gamePlayContainer}>
        <View style={styles.buttonContainer}>
          <Button title="ROCK" color={"black"} onPress={() => props.playRoundHandler(0)} />
          <Button title="PAPER" color={"black"} onPress={() => props.playRoundHandler(1)} />
          <Button title="SCISSORS" color={"black"} onPress={() => props.playRoundHandler(2)} />
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    gamePlayContainer: {
    alignItems: "center",
    justifyContent: "space-around",
    height: 100,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
  },
});
export default GamePlayButtons
