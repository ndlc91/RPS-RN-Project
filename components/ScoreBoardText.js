import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ScoreBoardText = (props) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={styles.ScoreBoardText}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ScoreBoardText: {
    fontSize: 18,
    textDecorationLine: "underline",
  },
});

export default ScoreBoardText;
