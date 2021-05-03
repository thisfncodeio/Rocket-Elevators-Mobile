import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native"

function ElevatorStatusScreen({ navigation, route }) {
  const [ status, setStatus ] = useState(route.params.status);

  async function changeElevatorStatus() {
    await fetch(`https://rocket-elevators-rest-apii.herokuapp.com/elevators/${route.params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "Active" })
    })
    .then(() => setStatus("Active"))
    .catch((err) => console.error(err));

    // await fetch(`https://rocket-elevators-rest-apii.herokuapp.com/elevators/${route.params.id}/status`)
    //   .then((_status) => { console.log(_status); setStatus(_status) })
    //   .catch((err) => console.error(err));


  }
  return (
    <View style={{alignItems: "center", flex: 1}}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/R2.png")}
          style={styles.image}
        />
        <Text style={styles.headingText}>Elevator #{route.params.id} Details:</Text>
      </View>
      <Text style={styles.text}>Status:</Text>
      {
        status.toLowerCase() !== "active" ?
          <Text style={[styles.text, styles.inactiveText]}>{status}</Text>
        :
          <Text style={[styles.text, styles.activeText]}>{status}</Text>
      }
      {
        status.toLowerCase() !== "active" ?
          <TouchableOpacity
            onPress={changeElevatorStatus}
            activeOpacity={0.9}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Make Operational</Text>
          </TouchableOpacity>
        :
          <TouchableOpacity
            onPress={() => navigation.navigate("Home", { status: "Active" })}
            activeOpacity={0.9}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Return</Text>
          </TouchableOpacity>
      }
      <View style={styles.logOutButtonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Start Up")}
          activeOpacity={0.9}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  activeText: {
    color: "green",
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#c73030",
    borderRadius: 4,
    display: "flex",
    justifyContent: "center",
    marginTop: 100,
    padding: 8,
    width: Dimensions.get("window").width - 50,
  },
  buttonText: {
    fontSize: 28,
    color: "#fff",
  },
  headingText: {
    // borderWidth: 1,
    // borderColor: "#000000",
    color: "rgba(0,0,0,.75)",
    fontSize: 32,
    marginBottom: 15,
  },
  image: {
    // borderWidth: 1,
    // borderColor: "#000000",
    height: 80,
    marginTop: 25,
    marginBottom: 15,
    width: Dimensions.get("window").width - 100,
    resizeMode: 'contain',
  },
  inactiveText: {
    color: "#c73030",
    fontWeight: "bold",
  },
  logoContainer: {
    alignItems: "center",
  },
  logOutButtonContainer: {
    // borderWidth: 1,
    // borderColor: "#000000",
    bottom: 0,
    paddingBottom: 20,
    position: "absolute",
  },
  text: {
    fontSize: 28
  }
});

export default ElevatorStatusScreen;