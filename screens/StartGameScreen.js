import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const StartGameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.buttonContainer}>
        <Button
          title="BEST OF 3"
          style={styles.button}
          onPress={props.start3GameHandler}
          winCondition={props.winCondition}
        />
        <Button
          title="BEST OF 5"
          style={styles.button}
          onPress={props.start5GameHandler}
        />
        <Button
          title="BEST OF 7"
          style={styles.button}
          onPress={props.start7GameHandler}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {},
  button: {},
});

export default StartGameScreen;
