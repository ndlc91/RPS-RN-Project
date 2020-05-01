import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Colors from "../constants/Colors";

const Header = (props) => {
  return (
    <View style={styles.Header}>
      <Text style={styles.HeaderText}>R - P - S</Text>
      <View style={styles.HeaderNav}>
      <Button title="GAME HISTORY" color={"navy"} onPress={props.toggleHistoryHandler} />
      </View>
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
  HeaderNav: {

    justifyContent: "flex-end",
  },  
  HeaderText: {
    textAlign: "center",

    fontSize: 25,
  },
});

export default Header;
