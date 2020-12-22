import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";

const HouseListings = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            "https://i0.wp.com/hooquest.com/wp-content/uploads/2019/08/indy-home-pros-listing-description.jpg?resize=750%2C343&ssl=1",
        }}
        style={styles.image}
      />
      <Text style={styles.roomAvailabiltyText}>1 bed 1 bedroom</Text>
      <Text style={styles.description} numberOfLines={2}>
        lSpacious is an adjective that means "roomy" or "having plenty of room."
        The adjective spacious is most commonly used to describe living quarters
        that have plenty of space, but it can be used to describe other things
        as well.
      </Text>

      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>$36</Text>
        <Text style={styles.revisedPrice}> $30</Text>
        /night
      </Text>
      <Text style={styles.total}>$230 total</Text>
    </View>
  );
};

export default HouseListings;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 3 / 2,
    resizeMode: "cover",
    borderRadius: 10,
  },
  roomAvailabiltyText: {
    marginVertical: 10,
    fontSize: 14,
    color: "gray",
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
  },
  prices: {
    fontSize: 18,
    marginVertical: 10,
  },
  oldPrice: {
    color: "gray",
    textDecorationLine: "line-through",
  },
  revisedPrice: {
    fontWeight: "bold",
  },
  total: {
    color: "gray",
    textDecorationLine: "underline",
  },
});
