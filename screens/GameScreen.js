import React from "react";
import { View, StyleSheet } from "react-native";

import Colors from "../constants/Colors";
import RoundsScoreBoard from "../components/RoundsScoreBoard";
import GamePlayButtons from "../components/GamePlayButtons";

const GameScreen = (props) => {
  const winCondition = props.winCondition;

  const draw = "It's a draw";
  const win = "You won the round";
  const lose = "You lost the round";

  const playRoundHandler = (userGuess) => {
    computerGuess = Math.floor(Math.random() * 3);

    //Computer Wins Round
    if ((userGuess + 1) % 3 == computerGuess) {
      props.roundsHistoryHandler(lose);
    }
    //User Wins Round
    else if ((computerGuess + 1) % 3 == userGuess) {
      props.roundsHistoryHandler(win);
    } else {
      props.roundsHistoryHandler(draw);
    }
  };

  return (
    <View style={styles.screen}>
      <RoundsScoreBoard 
        winCondition={winCondition}
        userRoundsWon={props.userRoundsWon}
        computerRoundsWon={props.computerRoundsWon}
      />
      <GamePlayButtons playRoundHandler={playRoundHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default GameScreen;
