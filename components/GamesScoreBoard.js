import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors"
import ScoreBoardContainer from "./ScoreBoardContainer";
import ScoreBoardItem from "./ScoreBoardItem";
import ScoreBoardText from "./ScoreBoardText";
import ScoreBoardBoldText from "./ScoreBoardBoldText";

const ScoreBoard = (props) => {
  

return (

    <ScoreBoardContainer>
      <ScoreBoardItem>
        <ScoreBoardBoldText>GAME HISTORY</ScoreBoardBoldText>
      </ScoreBoardItem>
      <ScoreBoardItem>
      <View style={styles.StackedText}>
        <ScoreBoardText>User Games Won</ScoreBoardText>
        <ScoreBoardBoldText>{props.totalGamesWon}</ScoreBoardBoldText>
        </View>
      <View style={styles.StackedText}>
        <ScoreBoardText>Computer Games Won</ScoreBoardText>
        <ScoreBoardBoldText>{props.totalGamesWon}</ScoreBoardBoldText>

      </View>
      </ScoreBoardItem>
    </ScoreBoardContainer>
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
