import { ScrollView, StyleSheet, View } from "react-native";
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
import { TouchableOpacity } from "react-native";
import reusable from "../../components/Reusable/reusable.styles";
import { Feather } from "@expo/vector-icons";

const PlaceDetails = ({ navigation }) => {
  const route = useRoute();
  const id = route.params;
  const place = {
    _id: "64d062a3de20d7c932f1f70a",
    country_id: "64c62bfc65af9f8c969a8d04",
    title: "Statue of Liberty",
    description:
      "The Statue of Liberty is an iconic symbol of freedom and democracy, located on Liberty Island in New York Harbor. This colossal statue was a gift from France to the United States and was dedicated in 1886. Standing at 305 feet tall, the statue represents Libertas, the Roman goddess of liberty, holding a torch and a tablet inscribed with the date of the American Declaration of Independence. The Statue of Liberty has welcomed countless immigrants to the USA, serving as a symbol of hope and opportunity.",
    contact_id: "64c5d95adc7efae2a45ec376",
    imageUrl:
      "https://images.unsplash.com/photo-1515081774057-84dcf72d0cf1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFN0YXR1ZSUyMG9mJTIwTGliZXJ0eXxlbnwwfHwwfHx8MA%3D%3D",
    rating: 4.8,
    review: "1452 Reviews",
    latitude: 40.689247,
    longitude: -74.044502,
    location: "Liberty Island, New York Harbor",
    popular: [
      {
        _id: "64c675be3cfa5e847bcd5439",
        title: "Family-Friendly Resort",
        imageUrl:
          "https://images.unsplash.com/photo-1482235225574-c37692835cf3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RmFtaWx5JTIwRnJpZW5kbHklMjBSZXNvcnR8ZW58MHx8MHx8fDA%3D",
        rating: 4.6,
        review: "12854 Reviews",
        location: "Orlando, FL",
      },
      {
        _id: "64c675793cfa5e847bcd5436",
        title: "Urban Chic Boutique Hotel",
        imageUrl:
          "https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VXJiYW4lMjBDaGljJTIwQm91dGlxdWUlMjBIb3RlbHxlbnwwfHwwfHx8MA%3D%3D",
        rating: 4.8,
        review: "2312 Reviews",
        location: "San Francisco, CA",
      },
    ],
  };

  return (
    <ScrollView>
      <View>
        <NetworkImage
          source={place.imageUrl}
          width="100%"
          height={350}
          radius={30}
        />

        <AppBar
          title={place.title}
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
          text={place.location}
          family="medium"
          size={TEXT.large}
          color={COLORS.black}
        />

        <DescriptionText text={place.description} />

        <View style={{ alignContent: "center" }}>
          <HeightSpacer height={20} />

          <View style={reusable.rowWidthSpace("space-between")}>
            <ReusableText
              text="Popular Hotels"
              family="medium"
              size={TEXT.large}
              color={COLORS.black}
            />

            <TouchableOpacity onPress={() => {}}>
              <Feather name="list" size={20} />
            </TouchableOpacity>
          </View>

          <HeightSpacer height={20} />

          <PopularList data={place.popular} />

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

export default PlaceDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f4f8",
  },
  description: {
    marginHorizontal: 20,
    paddingTop: 20,
  },
});
