import React from "react";
import { View, Text, Button } from "react-native";

const GameWonScreen = props => {
  return (
    <View>
      <Text>{props.message}</Text>
      <Button title="NEW GAME" color={"black"} onPress={props.newGameHandler} />
    </View>
  );
};

export default GameWonScreen;
