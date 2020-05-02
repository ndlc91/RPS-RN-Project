import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Colors from "../constants/Colors";

const Header = (props) => {
  return (
    <View style={styles.Header}>
      <Text style={styles.HeaderText}>R - P - S</Text>
      <Button title="ROUND HISTORY" color={"#ff7e7e"} onPress={props.toggleHistoryHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  Header: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 52,
    paddingBottom: 20,
    backgroundColor: Colors.white,
    borderBottomColor: Colors.grey,
    borderBottomWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    elevation: 8,
  }, 
  HeaderText: {
    textAlign: "center",

    fontSize: 25,
  },
});

export default Header;
