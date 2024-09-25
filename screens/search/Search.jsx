import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import reusable from "../../components/Reusable/reusable.styles";
import styles from "./search.style";
import { Feather } from "@expo/vector-icons";
import { COLORS } from "../../constants/theme";
import { HeightSpacer, ReusableTitle } from "../../components";

const Search = ({ navigation }) => {
  const [searchKey, setSearchKey] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const search = [
    {
      _id: "64c674d23cfa5e847bcd5430",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Seaside Resort",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1676517030737-5ac484676ea7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U2Vhc2lkZSUyMFJlc29ydHxlbnwwfHwwfHx8MA%3D%3D",
      rating: 4.9,
      review: "1204 Reviews",
      location: "Miami Beach, FL",
    },
    {
      _id: "64c675183cfa5e847bcd5433",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Mountain Lodge",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1673621247833-825a713a82fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TW91bnRhaW4lMjBMb2RnZXxlbnwwfHwwfHx8MA%3D%3D",
      rating: 4.5,
      review: "12024 Reviews",
      location: "Aspen, CO",
    },
    {
      _id: "64d0b5a4d3cb4985a76ac1aa",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Hotel Alpha",
      imageUrl:
        "https://images.unsplash.com/photo-1507486673731-8e2cb2d8f106?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SG90ZWwlMjBBbHBoYXxlbnwwfHwwfHx8MA%3D%3D",
      rating: 4.7,
      review: "1204 Reviews",
      location: "City Center, USA",
    },
    {
      _id: "64c675be3cfa5e847bcd5439",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Family-Friendly Resort",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1661673749940-17f38cb747d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RmFtaWx5JTIwRnJpZW5kbHklMjBSZXNvcnR8ZW58MHx8MHx8fDA%3D",
      rating: 4.6,
      review: "12854 Reviews",
      location: "Orlando, FL",
    },
    {
      _id: "64c67442776ed29f19727fd7",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Luxury Hotel 1",
      imageUrl:
        "https://images.unsplash.com/photo-1528154291023-a6525fabe5b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8THV4dXJ5JTIwSG90ZWwlMjAxfGVufDB8fDB8fHww",
      rating: 4.7,
      review: "1204 Reviews",
      location: "New York City, NY",
    },
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
    <SafeAreaView style={reusable.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.input}
            value={searchKey}
            onChangeText={setSearchKey}
            placeholder="Where do you want to visit?"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn}>
          <Feather name="search" size={24} color={COLORS.white} />
        </TouchableOpacity>
      </View>

      {search.length === 0 ? (
        <View>
          <HeightSpacer height="20%" />

          <Image
            source={require("../../assets/images/search.png")}
            style={styles.searchImage}
          />
        </View>
      ) : (
        <FlatList
          data={search}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View style={styles.title}>
              <ReusableTitle
                item={item}
                onPress={() => navigation.navigate("PlaceDetails", item._id)}
              />
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;
