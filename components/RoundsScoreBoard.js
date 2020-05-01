import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors"

const RoundsScoreBoard = props => {
  return (
    <View style={styles.ScoreBoardShadowContainer}>
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
    ScoreBoardShadowContainer: {
      marginTop: 20,
      borderBottomColor: Colors.grey,
        backgroundColor: "#ffffff",
        borderWidth: 0.5,
        borderColor: Colors.grey,
        borderColor: Colors.grey,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.2,
    elevation: 8,
    },
    ScoreBoardWinContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingTop: 10,
        alignItems: "center",
      },
      ScoreBoardContainer: {
        paddingVertical: 10,
        marginTop: 10,
        height: 100,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
      ScoreBoardText: {
        fontSize: 18,
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
