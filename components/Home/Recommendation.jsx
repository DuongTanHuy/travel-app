import { View, StyleSheet, FlatList } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import reusable from "../Reusable/reusable.styles";
import ReusableText from "../Reusable/ReusableText";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import ReusableTitle from "../Reusable/ReusableTitle";

const Recommendation = () => {
  const navigation = useNavigation();
  const recommendations = [
    {
      _id: "64c631650298a05640539adc",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Walt Disney World",
      location: "Orlando, Florida",
      imageUrl:
        "https://images.unsplash.com/photo-1587818658881-3015ef265894?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8V2FsdCUyMERpc25leSUyMFdvcmxkfGVufDB8fDB8fHww",
      rating: 4.7,
      review: "1204 Reviews",
    },
    {
      _id: "64d062a3de20d7c932f1f70a",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Statue of Liberty",
      location: "New York City, New York",
      imageUrl:
        "https://images.unsplash.com/photo-1590858148182-ad4bdfa495fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0YXR1ZSUyMG9mJTIwbGliZXJ0eSUyMG5hdGlvbmFsJTIwbW9udW1lbnR8ZW58MHx8MHx8fDA%3D",
      rating: 4.8,
      review: "1452 Reviews",
    },
    {
      _id: "64d09e3f364e1c37c8b4b13c",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Golden Gate Bridge",
      location: "San Francisco, California",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1673266630624-4cbef6d25ff4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R29sZGVuJTIwR2F0ZSUyMEJyaWRnZXxlbnwwfHwwfHx8MA%3D%3D",
      rating: 4.6,
      review: "2145 Reviews",
    },
    {
      _id: "64d09f90364e1c37c8b4b140",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Yellowstone National Park",
      location: "Wyoming, Montana, Idaho",
      imageUrl:
        "https://images.unsplash.com/photo-1516673069977-387ccfd9f1b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8WWVsbG93c3RvbmUlMjBOYXRpb25hbCUyMFBhcmt8ZW58MHx8MHx8fDA%3D",
      rating: 4.8,
      review: "24455 Reviews",
    },
  ];

  return (
    <View style={styles.container}>
      <View
        style={[reusable.rowWidthSpace("space-between"), { paddingBottom: 20 }]}
      >
        <ReusableText
          text="Recommendation"
          family="medium"
          size={TEXT.large}
          color={COLORS.black}
        />

        <TouchableOpacity onPress={() => navigation.navigate("Recommended")}>
          <Feather name="list" size={20} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={recommendations}
        horizontal
        keyExtractor={(item) => item._id}
        contentContainerStyle={{ columnGap: SIZES.medium }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <ReusableTitle
            item={item}
            onPress={() => navigation.navigate("PlaceDetails", item._id)}
          />
        )}
      />
    </View>
  );
};

export default Recommendation;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
});
