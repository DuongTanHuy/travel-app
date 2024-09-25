import { View, Text, FlatList } from "react-native";
import React from "react";
import reusable from "../Reusable/reusable.styles";
import ReusableText from "../Reusable/ReusableText";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import HotelCard from "../Titles/Hotels/HotelCard";

const BestHotels = () => {
  const navigation = useNavigation();
  const hotels = [
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
  ];

  return (
    <View>
      <View
        style={[reusable.rowWidthSpace("space-between"), { paddingBottom: 20 }]}
      >
        <ReusableText
          text="Nearby Hotels"
          family="medium"
          size={TEXT.large}
          color={COLORS.black}
        />

        <TouchableOpacity onPress={() => navigation.navigate("HotelList")}>
          <Feather name="list" size={20} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={hotels}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ columnGap: SIZES.medium + 10 }}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <HotelCard
            item={item}
            margin={0}
            onPress={() => navigation.navigate("HotelDetails")}
          />
        )}
      />
    </View>
  );
};

export default BestHotels;
