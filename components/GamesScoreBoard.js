import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors"

const ScoreBoard = (props) => {
  

return (

    <View style={styles.ScoreBoardContainer}>
      <View style={styles.StackedText}>
        <Text style={styles.ScoreBoardText}>User Games Won</Text>
        <Text style={styles.NumberText}>{props.totalGamesWon}</Text>
      </View>
      <View style={styles.StackedText}>
        <Text style={styles.ScoreBoardText}>Computer Games Won</Text>
        <Text style={styles.NumberText}>{props.totalGamesWon}</Text>
      </View>
    </View>
);
};
const styles = StyleSheet.create({
    ScoreBoardContainer: {
      paddingVertical: 40,
      marginTop: 20,
      height: 150,
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      borderBottomColor: Colors.grey,
      backgroundColor: "#ffffff",
      borderWidth: 0.5,
      borderColor: Colors.grey,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.2,
    elevation: 8,
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
});

export default ScoreBoard;
