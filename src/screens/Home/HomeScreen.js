import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Pressable,
  SafeAreaView,
  StatusBar,
} from "react-native";

import { Fontisto } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const HomeScreen = () => {
  return (
    <View>
      <StatusBar style="light-content" />
      <ImageBackground
        source={require("../../../assets/images/wallpaper.jpg")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <SafeAreaView />
        <Pressable
          onPress={() => console.log("Search  Pressed")}
          style={styles.searchArea}
        >
          <Fontisto name="search" size={25} color="#f15454" />
          <Text style={styles.searchAreaText}>Where are you going?</Text>
        </Pressable>
        <Text style={styles.text}>Go Near</Text>

        <Pressable
          onPress={() => console.log("Pressed")}
          style={styles.exploreButton}
        >
          <Text style={styles.exploreButtonText}>Explore Nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    height: height,
    width: width,
  },
  searchArea: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    marginHorizontal: 10,
    borderRadius: 30,
    paddingVertical: 15,
    backgroundColor: "#fff",
  },
  searchAreaText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  text: {
    fontSize: 80,
    fontWeight: "bold",
    color: "white",
    width: "70%",
    marginLeft: 20,
    marginTop: "40%",
  },
  exploreButton: {
    backgroundColor: "white",
    marginLeft: 20,
    height: 40,
    borderRadius: 15,
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
  exploreButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
