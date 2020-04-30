import React from "react";
import { View, Text } from "react-native";

const ScoreBoard = (props) => {
  return (
    <View>
      <View>
        <Text>Player Games Won: {props.totalGamesWon}</Text>
      </View>
      <View>
        <Text>Computer Games Won: {props.totalGamesLost}</Text>
      </View>
    </View>
  );
};

export default ScoreBoard;
