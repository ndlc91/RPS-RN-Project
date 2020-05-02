import React from "react";
import { Text, StyleSheet } from "react-native";

const ScoreBoardBoldText = (props) => {
  return <Text style={styles.BoldText}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  BoldText: {
    fontWeight: "bold",
    fontSize: 20,
    alignItems: "center",
  },
});

export default ScoreBoardBoldText;
