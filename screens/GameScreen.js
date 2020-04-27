import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const GameScreen = (props) => {
  const [computerGuess, setComputerGuess] = useState();
  const [userGuess, setUserGuess] = useState();
  const [userRoundsWon, setUserRoundsWon] = useState(0);
  const [computerRoundsWon, setComputerRoundsWon] = useState(0);

  const winCondition = props.winCondition;

  const computerGuessHandler = () => {
    let computerGuessGenerator = Math.floor(Math.random() * 3);

    switch (computerGuessGenerator) {
      case 0:
        setComputerGuess("rock");
        break;
      case 1:
        setComputerGuess("paper");
        break;
      case 2:
        setComputerGuess("scissors");
        break;
      default:
        setComputerGuess("error");
        break;
    }
  };

  const setUserGuessRockHandler = () => {
    setUserGuess("rock");
    computerGuessHandler();
    if (userGuess === computerGuess) {
      return;
    } else if (userGuess === "rock") {
      if (computerGuess === "paper") {
        setComputerRoundsWon(computerRoundsWon + 1);
      } else {
        setUserRoundsWon(userRoundsWon + 1);
      }
    }
    if (userRoundsWon === winCondition - 1) {
      props.gameWonHandler();
    } else if (computerRoundsWon === winCondition - 1) {
      props.gameLostHandler();
    }
  };

  const setUserGuessPaperHandler = () => {
    setUserGuess("paper");
    computerGuessHandler();

    if (userGuess === computerGuess) {
      return;
    } else if (userGuess === "paper") {
      if (computerGuess === "scissors") {
        setComputerRoundsWon(computerRoundsWon + 1);
      } else {
        setUserRoundsWon(userRoundsWon + 1);
      }
    }
    if (userRoundsWon === winCondition - 1) {
      props.gameWonHandler();
    } else if (computerRoundsWon === winCondition - 1) {
      props.gameLostHandler();
    }
  };

  const setUserGuessScissorsHandler = () => {
    setUserGuess("scissors");
    computerGuessHandler();

    if (userGuess === computerGuess) {
      return;
    } else if (userGuess === "scissors") {
      if (computerGuess === "rock") {
        setComputerRoundsWon(computerRoundsWon + 1);
      } else {
        setUserRoundsWon(userRoundsWon + 1);
      }
    }
    if (userRoundsWon === winCondition - 1) {
      props.gameWonHandler();
    } else if (computerRoundsWon === winCondition - 1) {
      props.gameLostHandler();
    }
  };

  return (
    <View>
      <Button title="ROCK" onPress={setUserGuessRockHandler} />
      <Button title="PAPER" onPress={setUserGuessPaperHandler} />
      <Button title="SCISSORS" onPress={setUserGuessScissorsHandler} />

      <View>
        <Text>User Rounds Won: {userRoundsWon}</Text>
      </View>
      <View>
        <Text>Computer Rounds Won: {computerRoundsWon}</Text>
      </View>
      <View>
        <Text>{winCondition}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default GameScreen;
