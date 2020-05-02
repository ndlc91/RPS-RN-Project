import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import Colors from "../constants/Colors";
import RoundsScoreBoard from "../components/RoundsScoreBoard";
import GamePlayButtons from "../components/GamePlayButtons";
import ScoreBoardBoldText from "../components/ScoreBoardBoldText";

const GameScreen = (props) => {
  const [userGuess, setUserGuess] = useState();
  const [computerGuess, setComputerGuess] = useState();
  const [roundResult, setRoundResult] = useState();
  const winCondition = props.winCondition;

  const draw = "It's a draw";
  const win = "You won the round";
  const lose = "You lost the round";

  let userImageSource = (
    <Image source={require("../assets/blank.jpg")} style={styles.image} />
  );
  let computerImageSource = (
    <Image source={require("../assets/blank.jpg")} style={styles.image} />
  );

  const playRoundHandler = (userGuess) => {
    setUserGuess(userGuess);
    let randComputerGuess = Math.floor(Math.random() * 3);
    setComputerGuess(randComputerGuess);
    //set the user image to be displayed

    //Computer Wins Round
    if (((userGuess + 1) % 3) == randComputerGuess) {
      props.roundsHistoryHandler(lose);
      setRoundResult(lose);
    }
    //User Wins Round
    else if (((randComputerGuess + 1) % 3) == userGuess) {
      props.roundsHistoryHandler(win);
      setRoundResult(win);
    } else {
      props.roundsHistoryHandler(draw);
      setRoundResult(draw);
    }
    
    //Test for currect output
    console.log("start of round")
    console.log(userGuess)
    console.log(randComputerGuess)
    console.log("end of round")
  };

  switch (userGuess) {
    case 0:
      userImageSource = (
        <Image source={require("../assets/rock.jpg")} style={styles.image} />
      );
      break;
    case 1:
      userImageSource = (
        <Image source={require("../assets/paper.jpg")} style={styles.image} />
      );
      break;
    case 2:
      userImageSource = (
        <Image
          source={require("../assets/scissors.jpg")}
          style={styles.image}
        />
      );
      break;
    default:
      userImageSource = (
        <Image source={require("../assets/blank.jpg")} style={styles.image} />
      );
  }
  //set the computer guess to be displayed
  switch (computerGuess) {
    case 0:
      computerImageSource = (
        <Image source={require("../assets/rock.jpg")} style={styles.image} />
      );
      break;
    case 1:
      computerImageSource = (
        <Image source={require("../assets/paper.jpg")} style={styles.image} />
      );
      break;
    case 2:
      computerImageSource = (
        <Image
          source={require("../assets/scissors.jpg")}
          style={styles.image}
        />
      );
      break;
    default:
      computerImageSource = (
        <Image source={require("../assets/blank.jpg")} style={styles.image} />
      );
  }

  return (
    <View style={styles.screen}>
      <RoundsScoreBoard
        winCondition={winCondition}
        userRoundsWon={props.userRoundsWon}
        computerRoundsWon={props.computerRoundsWon}
      />
      <View style={styles.imageContainer}>
        {userImageSource}
        {computerImageSource}
      </View>
      <View style={{alignItems: "center"}}>
  <ScoreBoardBoldText>{roundResult}</ScoreBoardBoldText>
      </View>
      <GamePlayButtons playRoundHandler={playRoundHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    height: 100,
    marginBottom: 150,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
});

export default GameScreen;
