import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";

const HouseListings = () => {
  return (
    <View
      style={{
        margin: 10,
      }}
    >
      <Image
        source={{
          uri:
            "https://i0.wp.com/hooquest.com/wp-content/uploads/2019/08/indy-home-pros-listing-description.jpg?resize=750%2C343&ssl=1",
        }}
        style={{
          width: "100%",
          aspectRatio: 3 / 2,
          resizeMode: "cover",
          borderRadius: 10,
        }}
      />
      <Text
        style={{
          marginVertical: 10,
          fontSize: 14,
          color: "gray",
        }}
      >
        1 bed 1 bedroom
      </Text>
      <Text
        style={{
          fontSize: 18,
          lineHeight: 26,
        }}
        numberOfLines={2}
      >
        lSpacious is an adjective that means "roomy" or "having plenty of room."
        The adjective spacious is most commonly used to describe living quarters
        that have plenty of space, but it can be used to describe other things
        as well.
      </Text>

      <Text
        style={{
          fontSize: 18,
          marginVertical: 10,
        }}
      >
        <Text
          style={{
            color: "gray",
            textDecorationLine: "line-through",
          }}
        >
          $36
        </Text>
        <Text style={{ fontWeight: "bold" }}> $30</Text>
        /night
      </Text>
      <Text
        style={{
          color: "gray",
          textDecorationLine: "underline",
        }}
      >
        $230 total
      </Text>
    </View>
  );
};

export default HouseListings;

const styles = StyleSheet.create({});
