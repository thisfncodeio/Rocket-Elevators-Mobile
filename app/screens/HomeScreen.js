import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity
} from "react-native"

import ElevatorButton from "../components/ElevatorButton";

function HomeScreen({ navigation }) {
  const [elevators, setElevators] = useState([]); // Initialize the elevators array to be empty

  function getElevators() {
    fetch(`https://rocket-elevators-rest-apii.herokuapp.com/elevators/inactive`)
      .then((response) => response.json())
      .then((data) => {
        setElevators(data);
      })
      .catch((err) => console.error(err));
  }

  // Equivalent to componentDidMount (will run once)
  useEffect(() => {
    getElevators()
  }, []);

  return (
    <View style={{flex: 1}}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/R2.png")}
          style={styles.image}
        />
        <Text style={styles.headingText}>Elevators Not In Operation:</Text>
      </View>
      <View style={{flex: 1}}>
        <FlatList
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={true}
          keyExtractor={(elevator) => elevator.id.toString()}
          data={elevators}
          renderItem={({ item }) => <ElevatorButton item={item} navigation={navigation} />}
        />
      </View>
      <View style={styles.logOutButtonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Start Up")}
          activeOpacity={0.9}
          style={styles.logOutButton}
        >
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    // borderWidth: 1,
    // borderColor: "#000000",
    alignItems: "center",
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
  logOutButton: {
    alignItems: "center",
    backgroundColor: "#c73030",
    borderRadius: 4,
    display: "flex",
    justifyContent: "center",
    padding: 8,
    width: Dimensions.get("window").width - 50,
  },
  logOutButtonContainer: {
    // borderWidth: 1,
    // borderColor: "#000000",
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
  },
});

export default HomeScreen;