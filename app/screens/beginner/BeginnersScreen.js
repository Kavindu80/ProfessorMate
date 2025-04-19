import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function BeginnersScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={30} color="black" />
      </TouchableOpacity>

      {/* Speech Bubble */}
      <View style={styles.speechBubble}>
        <Text style={styles.speechText}>let’s start in the beginning</Text>
      </View>

      {/* Character Image */}
      <Image source={require("../../../assets/items/character.png")} style={styles.character} />
      
      {/* Continue Button */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate("AlphabetScreen")}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      {/* Profile Image in the top-right corner */}
      <Image source={require("../../../assets/items/profile.jpg")} style={styles.profileImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    padding: 10,
  },
  speechBubble: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    position: "absolute",
    top: 120,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  speechText: {
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  character: {
    width: 200, 
    height: 200,
    marginTop: 50,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 30,
    marginTop: 100, // Increased margin to push it further down
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  profileImage: {
    position: "absolute",
    top: 40,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 25,  // To make it a circle
    borderWidth: 2,
    borderColor: "#fff", // Optional: add a border around the profile picture
  },
});
