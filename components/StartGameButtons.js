import React from 'react'
import { View, Button, StyleSheet } from 'react-native'

const StartGameButtons = props => {
    return (
        <View style={styles.buttonContainer}>
        <Button
          title="BEST OF 3"
          style={styles.button}
          onPress={() => props.startGameHandler(3)}
        />
        <Button
          title="BEST OF 5"
          style={styles.button}
          
          onPress={() => props.startGameHandler(5)}
        />
        <Button
          title="BEST OF 7"
          style={styles.button}
          onPress={() => props.startGameHandler(7)}
        />
      </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: "row",
        alignItems: 'center',
        marginBottom: 60,
        justifyContent: "space-around",
        width: 400,
        maxWidth: '90%',
      },
})

export default StartGameButtons
