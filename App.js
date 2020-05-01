import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import GameHistoryScreen from './screens/GameHistoryScreen';

export default function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameLost, setGameLost] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [totalGamesLost, setTotalGamesLost] = useState(0);
  const [totalGamesWon, setTotalGamesWon] = useState(0);
  const [winCondition, setWinCondition] = useState();
  const [roundsHistory, setRoundsHistory] = useState([]); 
  const [showHistory, setShowHistory] = useState(false);
  const [userRoundsWon, setUserRoundsWon] = useState(0);
  const [computerRoundsWon, setComputerRoundsWon] = useState(0);


  

  const roundsHistoryHandler = (roundResult) => {
    if (roundResult === "You won the round") {
      setUserRoundsWon(userRoundsWon + 1);
    } else if (roundResult === "You lost the round") {
      setComputerRoundsWon(computerRoundsWon + 1)
    }
    setRoundsHistory([roundResult, ...roundsHistory]);

    if (userRoundsWon > (winCondition / 2) - 1) {
      gameOverHandler('won')
    } else if (computerRoundsWon > (winCondition / 2) - 1) {
      gameOverHandler('lost')
    }
  };


  const toggleHistoryHandler = () => {
    setShowHistory(!showHistory);
  }

  const startGameHandler = (winCondition) => {
    setGameStarted(true);
    setWinCondition(winCondition);
  };

  const gameOverHandler = (gameResult) => {

    if (gameResult == 'won') {
      setGameWon(true);
    setTotalGamesWon(totalGamesWon + 1)
    } else if (gameResult == 'lost') {
      setGameLost(true);
      setTotalGamesLost(totalGamesLost + 1)
    }
  };


  const newGameHandler = () => {
    setGameLost(false);
    setGameWon(false);
    setGameStarted(false);
    setRoundsHistory([]);
    setComputerRoundsWon(0);
    setUserRoundsWon(0);
  };

  //StartGameScreen - Init on load
  let content = (
    <StartGameScreen
      startGameHandler={startGameHandler}
      totalGamesWon={totalGamesWon} totalGamesLost={totalGamesLost}
    />
  );

  //Load GameScreen
  if (gameStarted && !gameWon && !gameLost) {
    content = (
      <GameScreen
        winCondition={winCondition}
        gameOverHandler={gameOverHandler}
        roundsHistoryHandler={roundsHistoryHandler}
        userRoundsWon={userRoundsWon}
        computerRoundsWon={computerRoundsWon}
      />
    );

  //Game Over - set win or loss screen
  } else if (gameStarted && gameWon) {
    content = <GameOverScreen message="YOU WON THE GAME" newGameHandler={newGameHandler}/>;
  } else if (gameStarted && gameLost) {
    content = <GameOverScreen message="YOU LOST THE GAME" newGameHandler={newGameHandler}/>;
  }

  if (showHistory) {
    content = <GameHistoryScreen roundsHistory={roundsHistory}/>
  }

  return (
    <View style={styles.screen}>
      <Header toggleHistoryHandler={toggleHistoryHandler}/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
});
