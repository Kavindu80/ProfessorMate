import React from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Image,
  ScrollView,
  SafeAreaView,
  Dimensions,
  StatusBar,
  Platform
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get('window');

export default function WordsStartingWithA() {
  const navigation = useNavigation();
  
  // Words data with images and audio
  const words = [
    {
      id: 1,
      word: "Apple",
      image: require("../../../assets/items/apple.png"),
      type: "Noun"
    },
    {
      id: 2,
      word: "Boy",
      image: require("../../../assets/items/boy.png"),
      type: "Noun"
    },
    {
      id: 3,
      word: "Cat",
      image: require("../../../assets/items/cat.png"),
      type: "Noun"
    },
    {
      id: 4,
      word: "Dog",
      image: require("../../../assets/items/dog.png"),
      type: "Noun"
    },
    {
      id: 5,
      word: "Elephant",
      image: require("../../../assets/items/elephant.png"),
      type: "Noun"
    }
  ];

  // Function to play audio for the word
  const playAudio = (word) => {
    // Audio playing functionality would be implemented here
    console.log(`Playing audio for ${word}`);
  };

  return (
    <LinearGradient
      colors={["#00c6ff", "#0072ff"]}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      
      {/* Header with adjusted positioning */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={30} color="#fff" />
        </TouchableOpacity>
        
        <Text style={styles.headerTitle}>English Alphabet</Text>
        
        <TouchableOpacity 
          style={styles.profileButton}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image 
            source={require("../../../assets/items/profile.jpg")} 
            style={styles.profileImage} 
          />
        </TouchableOpacity>
      </View>
      
      {/* Title with more emphasis */}
      <View style={styles.titleContainer}>
        <Text style={styles.categoryTitle}>Nouns</Text>
      </View>
      
      {/* Words List with improved spacing */}
      <ScrollView 
        contentContainerStyle={styles.wordsContainer}
        showsVerticalScrollIndicator={false}
      >
        {words.map((item) => (
          <View key={item.id} style={styles.wordItem}>
            <View style={styles.imageContainer}>
              <Image 
                source={item.image} 
                style={styles.wordImage}
                resizeMode="contain"
              />
            </View>
            
            <View style={styles.wordDetails}>
              <Text style={styles.wordText}>{item.word}</Text>
              
              <TouchableOpacity 
                style={styles.audioButton}
                onPress={() => playAudio(item.word)}
              >
                <View style={styles.audioIconContainer}>
                  <FontAwesome5 name="volume-up" size={20} color="#fff" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      
      {/* Continue Button with gradient effect */}
      <TouchableOpacity 
        style={styles.continueButton}
        onPress={() => {
          navigation.navigate("AlphabetScreen");
        }}
      >
        <Text style={styles.continueText}>Continue</Text>
        <FontAwesome5 name="arrow-right" size={16} color="#fff" style={styles.buttonIcon} />
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 10,
    paddingBottom: 30,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 5,
  },
  backButton: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  profileButton: {
    padding: 10,
  },
  profileImage: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: "#fff",
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 25,
  },
  categoryTitle: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#fff",
    letterSpacing: 1,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  wordsContainer: {
    paddingBottom: 20,
  },
  wordItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  imageContainer: {
    width: width * 0.22,
    height: width * 0.22,
    borderRadius: 16,
    backgroundColor: "#f2f5ff",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#FFD700",
  },
  wordImage: {
    width: width * 0.18,
    height: width * 0.18,
  },
  wordDetails: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 20,
  },
  wordText: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1E293B",
    letterSpacing: 0.5,
  },
  audioButton: {
    padding: 8,
  },
  audioIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#5D3FD3",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6,
  },
  continueButton: {
    backgroundColor: "#0039CB",
    paddingVertical: 18,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
    flexDirection: "row",
  },
  continueText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    letterSpacing: 0.5,
    marginRight: 10,
  },
  buttonIcon: {
    marginLeft: 5,
  }
});