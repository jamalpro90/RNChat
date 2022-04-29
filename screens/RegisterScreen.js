import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Input, Button } from "@rneui/base";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleRegister = () => {
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      return alert("Only profile picture can be empty!");
    }
    if (password !== confirmPassword) {
      return alert("Password and Confirm Password not same!");
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        // Update User Profile
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: imageUrl
            ? imageUrl
            : "https://img.favpng.com/25/13/19/samsung-galaxy-a8-a8-user-login-telephone-avatar-png-favpng-dqKEPfX7hPbc6SMVUCteANKwj.jpg",
        })
          .then(() => {
            // Profile updated!
            // navigation.navigate("Login");
          })
          .catch(error => {
            // An error occurred
            // ...
          });
      })
      .catch(err => {
        alert(err.message);
      });
  };

  return (
    <View style={styles.container}>
      {/* Name */}
      <Input
        placeholder="Enter your name"
        label="Name"
        leftIcon={{ type: "material", name: "badge" }}
        value={name}
        onChangeText={text => setName(text)}
        inputStyle={styles.input}
      />

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

      {/* Confirm Password */}
      <Input
        placeholder="Enter your confirm password"
        label="Confirm Password"
        leftIcon={{ type: "material", name: "lock" }}
        value={confirmPassword}
        onChangeText={text => setConfirmPassword(text)}
        secureTextEntry
        inputStyle={styles.input}
      />

      {/* Image Profile */}
      <Input
        placeholder="Enter your image url"
        label="Profile Picture"
        leftIcon={{ type: "material", name: "face" }}
        value={imageUrl}
        onChangeText={text => setImageUrl(text)}
        inputStyle={styles.input}
      />

      {/* Button */}
      <Button
        onPress={handleRegister}
        title="Register"
        buttonStyle={styles.button}
      />
    </View>
  );
};

export default RegisterScreen;

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
