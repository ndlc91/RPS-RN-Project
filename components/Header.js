import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.Header}>
      <Text style={styles.HeaderText}>ROCK PAPER SCISSORS</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Header: {
    paddingTop: 52,
    backgroundColor: "grey",
    paddingBottom: 20,
  },
  HeaderText: {
    textAlign: "center",
    fontSize: 25,
  },
});

export default Header;
