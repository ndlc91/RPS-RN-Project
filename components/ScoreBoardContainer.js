import React from 'react'
import { View, StyleSheet } from 'react-native'
import Colors from "../constants/Colors"

const ScoreBoardContainer = props => {
    return (
    <View style={{...styles.ScoreBoardContainer, ...props.styles}}>{props.children}</View>
    );
};
const styles = StyleSheet.create({
    ScoreBoardContainer: {
      justifyContent: 'center',
        marginTop: 20,
        marginBottom: 50,
        paddingBottom: 20,
      borderBottomColor: Colors.grey,
        backgroundColor: "#ffffff",
        borderWidth: 0.5,
        borderColor: Colors.grey,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.2,
    elevation: 8,
    },
    
})

export default ScoreBoardContainer
