import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ReusableTitle } from "../../components";
import { COLORS } from "../../constants/theme";
import reusable from "../../components/Reusable/reusable.styles";

const TopBooking = () => {
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
  ];

  return (
    <View style={{ margin: 20 }}>
      <FlatList
        data={hotels}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item._id}
        contentContainerStyle={{ rowGap: 10 }}
        renderItem={({ item }) => (
          <View
            style={{ backgroundColor: COLORS.lightWhite, borderRadius: 16 }}
          >
            <ReusableTitle item={item} />
            <View style={reusable.rowWidthSpace("space-between")}></View>
          </View>
        )}
      />
    </View>
  );
};

export default TopBooking;

const styles = StyleSheet.create({});
