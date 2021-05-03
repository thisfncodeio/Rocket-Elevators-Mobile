import 'react-native-gesture-handler';
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./app/screens/HomeScreen";
import StartupScreen from "./app/screens/StartupScreen";
import ElevatorStatusScreen from "./app/screens/ElevatorStatusScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Start Up"
          component={StartupScreen}
          options={{ title: "" }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "" }}
        />
        <Stack.Screen
          name="Elevator Status"
          component={ElevatorStatusScreen}
          options={{ title: "" }}
        />
      {/* <SafeAreaView style={styles.page}>
        <StatusBar barStyle="dark-content" translucent={true} /> */}
        {/* <StartupScreen /> */}
        {/* <HomeScreen /> */}
        {/* <ElevatorStatusScreen /> */}
        {/* <View>
        <View>
          <Text>&lt;&lt; Back</Text>
        </View>
        <View style={styles.container}>
          <Image
            source={require("./assets/R2.png")}
            style={styles.image}
          />
          <Text style={styles.headingText}>Elevator #1 Details:</Text>
          <View style={styles.divider} />
          <Text style={styles.text}>Status:</Text>
          <Text style={[styles.text, styles.offline]}>Offline</Text>
          <TouchableOpacity
            onPress={() => Alert.alert("Clicked.")}
            activeOpacity={0.9}
            style={styles.statusButton}
          >
            <Text style={styles.buttonText}>Make Operational</Text>
          </TouchableOpacity>
        </View>
      </View> */}
      {/* </SafeAreaView> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  page: {
    // borderWidth: 1,
    flex: 1,
  },

  buttonText: {
    fontSize: 26,
    color: "#fff",
  },
  container: {
    alignItems: "center",
    flex: 1
  },
  divider: {
    borderBottomColor: "#000000",
    borderBottomWidth: 2,
    marginBottom: 15,
    width: Dimensions.get("window").width - 200,
  },
  headingText: {
    // borderWidth: 1,
    // borderColor: "#000000",
    color: "rgba(0,0,0,.75)",
    fontSize: 32,
    fontWeight: "bold",
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
  offline: {
    color: "red",
  },
  statusButton: {
    alignItems: "center",
    backgroundColor: "#c73030",
    borderRadius: 4,
    display: "flex",
    justifyContent: "center",
    padding: 8,
    width: Dimensions.get("window").width - 150,
  },
  text: {
    fontSize: 28,
    marginBottom: 15,
  }
});

export default App;