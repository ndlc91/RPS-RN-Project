import React from "react";
import { View, StyleSheet } from "react-native";
import GamesScoreBoard from '../components/GamesScoreBoard'
import StartGameButtons from "../components/StartGameButtons";

const StartGameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <GamesScoreBoard totalGamesWon={props.totalGamesWon} totalGamesLost={props.totalGamesLost}/>
      <StartGameButtons startGameHandler={props.startGameHandler}/>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
   
  },
  
});

export default StartGameScreen;
