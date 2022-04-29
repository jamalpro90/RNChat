import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Input, Button } from "@rneui/base";
import { auth } from "../firebase";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        navigation.replace("Chat");
      } else {
        // User is signed out
        // ...
      }
    });

    return unsubscribe;
  }, []);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        navigation.replace("Chat");
      })
      .catch(err => {
        alert(err.message);
      });
  };

  return (
    <View style={styles.container}>
      {/* Email */}
      <Input
        placeholder="Enter your email"
        label="Email"
        leftIcon={{ type: "material", name: "email" }}
        value={email}
        onChangeText={text => setEmail(text)}
        inputStyle={styles.input}
      />

      {/* Password */}
      <Input
        placeholder="Enter your password"
        label="Password"
        leftIcon={{ type: "material", name: "lock" }}
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
        inputStyle={styles.input}
      />

      {/* Button */}
      <Button
        onPress={handleLogin}
        title="Sign in"
        buttonStyle={styles.button}
      />
      <Button
        onPress={() => navigation.navigate("Register")}
        title="Register"
        buttonStyle={styles.button}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  input: {
    paddingLeft: 10,
  },
  button: {
    width: 200,
    marginVertical: 20,
  },
});
