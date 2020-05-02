import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors"
import ScoreBoardContainer from "./ScoreBoardContainer";
import ScoreBoardText from "./ScoreBoardText";
import ScoreBoardBoldText from "./ScoreBoardBoldText";
import ScoreBoardItem from "./ScoreBoardItem";

const RoundsScoreBoard = props => {
  return (
    <ScoreBoardContainer>
      <ScoreBoardItem>
        <ScoreBoardBoldText>BEST OF {props.winCondition}</ScoreBoardBoldText>
      </ScoreBoardItem>
      <ScoreBoardItem>
        <View style={styles.StackedText}>
          <ScoreBoardText>User Rounds Won</ScoreBoardText>
          <ScoreBoardBoldText>{props.userRoundsWon}</ScoreBoardBoldText>
        </View>
        <View style={styles.StackedText}>
          <ScoreBoardText>Computer Rounds Won</ScoreBoardText>
          <ScoreBoardBoldText>{props.computerRoundsWon}</ScoreBoardBoldText>
        </View>
      </ScoreBoardItem>
    </ScoreBoardContainer>
  );
};
const styles = StyleSheet.create({
      StackedText: {
        alignItems: "center",
      },
})

export default RoundsScoreBoard;
