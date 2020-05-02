import React from "react";
import { View, StyleSheet, Button } from "react-native";
import ScoreBoardContainer from "../components/ScoreBoardContainer";
import ScoreBoardText from "../components/ScoreBoardText";
import ScoreBoardBoldText from "../components/ScoreBoardBoldText";
import ScoreBoardItem from "../components/ScoreBoardItem";

const GameWonScreen = props => {
  return (
    <View>
      <ScoreBoardContainer style={{height: 100,}}>
        <ScoreBoardItem>
          <ScoreBoardBoldText>
            {props.message}
          </ScoreBoardBoldText>
          </ScoreBoardItem>
      </ScoreBoardContainer>
      <View style={styles.buttonContainer}>
      <Button title="NEW GAME" color={"black"} onPress={props.newGameHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
      buttonContainer: {
        marginTop: 115,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
      },
})

export default GameWonScreen;
