import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Header = ({ goBack = () => {}, text }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack}>
        <Text style={styles.goBack}>Go Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingLeft: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  goBack: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#666",
  },
  title: {
    textAlign: "center",
    position: "absolute",
    left: "38%",
    fontSize: 20,
  },
});
