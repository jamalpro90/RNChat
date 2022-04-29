import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import DolphinImg from "../assets/dolphin.svg";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#222" />
      <Text style={styles.title}>Dolphin</Text>
      <DolphinImg width={300} height={300} />

      {/* Button */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={styles.buttonBox}
      >
        <Text style={styles.buttonText}>Login</Text>
        <Icon name="arrow-right" size={25} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#900",
  },
  buttonBox: {
    borderRadius: 10,
    backgroundColor: "darkred",
    width: "90%",
    marginTop: 30,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});
