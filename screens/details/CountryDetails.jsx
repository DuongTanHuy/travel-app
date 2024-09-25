import { View, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import {
  DescriptionText,
  HeightSpacer,
  NetworkImage,
  PopularList,
  ReusableBtn,
  ReusableText,
} from "../../components";
import AppBar from "../../components/Reusable/Appbar";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import reusable from "../../components/Reusable/reusable.styles";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const CountryDetails = ({ navigation }) => {
  const route = useRoute();
  const { item } = route.params;
  const country = {
    _id: "64c62bfc65af9f8c969a8d04",
    country: "USA",
    description:
      "The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.",
    imageUrl:
      "https://images.unsplash.com/photo-1597700959826-5dcacabee120?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8VVNBfGVufDB8fDB8fHww",
    popular: [
      {
        _id: "64c631650298a05640539adc",
        title: "Walt Disney World",
        imageUrl:
          "https://images.unsplash.com/photo-1587818658881-3015ef265894?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8V2FsdCUyMERpc25leSUyMFdvcmxkfGVufDB8fDB8fHww",
        rating: 4.7,
        review: "1204 Reviews",
        location: "Orlando, USA",
      },
      {
        _id: "64d062a3de20d7c932f1f70a",
        title: "Statue of Liberty",
        imageUrl:
          "https://images.unsplash.com/photo-1512315342380-81f12a02bd7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U3RhdHVlJTIwb2YlMjBMaWJlcnR5fGVufDB8fDB8fHww",
        rating: 4.8,
        review: "1452 Reviews",
        location: "Liberty Island, New York Harbor",
      },
    ],
    region: "North America, USA",
  };

  return (
    <ScrollView>
      <View>
        <NetworkImage
          source={country.imageUrl}
          width="100%"
          height={350}
          radius={30}
        />

        <AppBar
          title={country.country}
          color={COLORS.white}
          icon="search1"
          color1={COLORS.white}
          onPress={() => navigation.goBack()}
          onPress1={() => {}}
          top={40}
          left={20}
          right={20}
        />
      </View>

      <View style={styles.description}>
        <ReusableText
          text={country.region}
          family="medium"
          size={TEXT.large}
          color={COLORS.black}
        />

        <DescriptionText text={country.description} />

        <View style={{ alignContent: "center" }}>
          <HeightSpacer height={20} />

          <View style={reusable.rowWidthSpace("space-between")}>
            <ReusableText
              text="Popular Destinations"
              family="medium"
              size={TEXT.large}
              color={COLORS.black}
            />

            <TouchableOpacity onPress={() => {}}>
              <Feather name="list" size={20} />
            </TouchableOpacity>
          </View>

          <HeightSpacer height={20} />

          <PopularList data={country.popular} />

          <ReusableBtn
            onPress={() => navigation.navigate("HotelSearch")}
            btnText="Find Best Hotels"
            width={SIZES.width - 40}
            backgroundColor={COLORS.green}
            borderColor={COLORS.green}
            borderWidth={0}
            textColor={COLORS.white}
          />

          <HeightSpacer height={50} />
        </View>
      </View>
    </ScrollView>
  );
};

export default CountryDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f4f8",
  },
  description: {
    marginHorizontal: 20,
    paddingTop: 20,
  },
});
