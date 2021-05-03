import React, { useState } from "react";
import {
  Text,
  View,
  Alert,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput
} from "react-native"

function StartupScreen({ navigation }) {
  const [ email, setEmail ] = useState("");

  function logIn() {
    fetch(`https://rocket-elevators-rest-apii.herokuapp.com/employees/${email}`)
      .then((result) => {
        result.status === 200 ?
          navigation.navigate("Home") :
          Alert.alert("Please enter a valid employee email")
      })
      .catch((err) => {
          console.error("My Error:", err);
        });
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/R2.png")}
        style={styles.image}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.textInput, styles.emailInput]}
          placeholder="Email"
          keyboardType="email-address"
          placeholderTextColor="rgba(0,0,0,.4)"
          onChangeText={setEmail}
        />
        {/* <TextInput
          style={[styles.textInput, styles.passwordInput]}
          placeholder="Password"
          keyboardType="default"
          secureTextEntry={true}
          placeholderTextColor="rgba(0,0,0,.4)"
          onChangeText={setPassword}
        /> */}
      </View>
      <TouchableOpacity
        onPress={logIn}
        activeOpacity={0.9}
        style={styles.loginButton}
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 28,
    color: "#fff",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fafdff",
  },
  emailInput: {
    marginBottom: 5,
  },
  image: {
    // borderWidth: 1,
    // borderColor: "#000000",
    height: 100,
    position: "absolute",
    top: 100,
    width: Dimensions.get("window").width - 100,
    resizeMode: 'contain',
  },
  inputContainer: {
    borderRadius: 10,
    // borderWidth: 1,
    // borderColor: "red",
  },
  loginButton: {
    alignItems: "center",
    backgroundColor: "#c73030",
    borderRadius: 4,
    display: "flex",
    justifyContent: "center",
    padding: 8,
    width: Dimensions.get("window").width - 50,
  },
  page: {
    borderWidth: 1,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fafdff",
  },
  passwordInput: {
    marginBottom: 10,
  },
  textInput: {
    backgroundColor: "#ffffff",
    borderColor: "rgba(0,0,0,.4)",
    borderRadius: 4,
    borderWidth: 1,
    fontSize: 26,
    height: 50,
    textAlign: "center",
    width: Dimensions.get("window").width - 50,
  },
});

export default StartupScreen;