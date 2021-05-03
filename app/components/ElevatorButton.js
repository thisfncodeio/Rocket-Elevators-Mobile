import React from "react";
import {
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native"

function ElevatorButton({ navigation, item }) {
  function getStats(id, status) {
    navigation.navigate("Elevator Status", {
      id,
      status
    })
  }

  return (
    <TouchableOpacity
      onPress={() => getStats(item.id, item.status)}
      activeOpacity={0.9}
      style={styles.elevatorButton}
    >
      <Text style={styles.buttonText}>Elevator #{item.id}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  elevatorButton: {
    alignItems: "center",
    backgroundColor: "#8C92AC",
    borderRadius: 4,
    marginBottom: 10,
    padding: 8,
    width: Dimensions.get("window").width - 50,
  },
  buttonText: {
    fontSize: 28,
    color: "#fff",
  },
});

export default ElevatorButton;