import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameLostScreen from "./screens/GameLostScreen";
import GameWonScreen from "./screens/GameWonScreen";

export default function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameLost, setGameLost] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [winCondition, setWinCondition] = useState();

  const start3GameHandler = () => {
    setGameStarted(true);
    setWinCondition(3);
  };
  const start5GameHandler = () => {
    setGameStarted(true);
    setWinCondition(5);
  };
  const start7GameHandler = () => {
    setGameStarted(true);
    setWinCondition(7);
  };

  const gameWonHandler = () => {
    setGameWon(true);
  };

  const gameLostHandler = () => {
    setGameLost(true);
  };

  const newGameHandler = () => {
    setGameLost(false);
    setGameWon(false);
    setGameStarted(false);
  };

  let content = (
    <StartGameScreen
      start3GameHandler={start3GameHandler}
      start5GameHandler={start5GameHandler}
      start7GameHandler={start7GameHandler}
    />
  );

  if (gameStarted && !gameWon && !gameLost) {
    content = (
      <GameScreen
        winCondition={winCondition}
        gameWonHandler={gameWonHandler}
        gameLostHandler={gameLostHandler}
      />
    );
  } else if (gameStarted && gameWon) {
    content = <GameWonScreen />;
  } else if (gameStarted && gameLost) {
    content = <GameLostScreen />;
  }

  return (
    <View style={styles.screen}>
      <Header />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
