import React from "react";
import { View, Text, StyleSheet } from "react-native";

const RoundsScoreBoard = props => {
  return (
    <View>
      <View style={styles.ScoreBoardWinContainer}>
        <Text style={styles.NumberText}>Best of {props.winCondition}</Text>
      </View>
      <View style={styles.ScoreBoardContainer}>
        <View style={styles.StackedText}>
          <Text style={styles.ScoreBoardText}>User Rounds Won</Text>
          <Text style={styles.NumberText}>{props.userRoundsWon}</Text>
        </View>
        <View style={styles.StackedText}>
          <Text style={styles.ScoreBoardText}>Computer Rounds Won</Text>
          <Text style={styles.NumberText}>{props.computerRoundsWon}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    ScoreBoardWinContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        height: 50,
        alignItems: "center",
      },
      ScoreBoardContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        height: 50,
        alignItems: "center",
      },
      ScoreBoardText: {
        fontSize: 16,
        textDecorationLine: "underline",
      },
      StackedText: {
        alignItems: "center",
      },
      NumberText: {
        fontWeight: "bold",
        fontSize: 20,
      }    
})

export default RoundsScoreBoard;
