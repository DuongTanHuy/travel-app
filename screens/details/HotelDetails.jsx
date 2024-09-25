import { ScrollView, View } from "react-native";
import React from "react";
import AppBar from "../../components/Reusable/Appbar";
import { COLORS, SIZES } from "../../constants/theme";
import styles from "./hotelDetails.style";
import {
  DescriptionText,
  HeightSpacer,
  HotelMap,
  NetworkImage,
  ReusableBtn,
  ReusableText,
  ReviewsList,
} from "../../components";
import reusable from "../../components/Reusable/reusable.styles";
import { Rating } from "react-native-stock-star-rating";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const HotelDetails = ({ navigation }) => {
  const hotel = {
    availability: {
      start: "2023-08-20T00:00:00.000Z",
      end: "2023-08-25T00:00:00.000Z",
    },
    _id: "64c675793cfa5e847bcd5436",
    country_id: "64c62bfc65af9f8c969a8d04",
    title: "Urban Chic Boutique Hotel",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris sit amet massa vitae tortor condimentum lacinia quis. Elit ut aliquam purus sit amet luctus. Nunc mi ipsum faucibus vitae aliquet. Et magnis dis parturient montes nascetur ridiculus mus mauris. Vel fringilla est ullamcorper eget nulla facilisi.",
    contact: "64c5d95adc7efae2a45ec376",
    imageUrl:
      "https://images.unsplash.com/photo-1496016943515-7d33598c11e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8VXJiYW4lMjBDaGljJTIwQm91dGlxdWUlMjBIb3RlbHxlbnwwfHwwfHx8MA%3D%3D",
    rating: 4.8,
    review: "2312 Reviews",
    location: "San Francisco, CA",
    latitude: 37.7749,
    longitude: -122.4194,
    price: 400,
    facilities: [
      {
        wifi: true,
        _id: "64c675793cfa5e847bcd5437",
      },
    ],
    __v: 0,
    reviews: [
      {
        _id: "64c675793cfa5e847bcd5438",
        review:
          "Great hotel, very clean and comfortable. The staff were very friendly and helpful. The location is perfect, close to everything. I would definitely stay here again.",
        rating: 4.6,
        user: {
          _id: "64c675793cfa5e847bcd5439",
          name: "John Doe",
          imageUrl:
            "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww",
        },
        updatedAt: "2023-08-20",
      },
      {
        _id: "64c675793cfa5e847bcd543a",
        review:
          "Excellent service, the staff were very accommodating. The room was clean and comfortable. The hotel is in a great location, close to restaurants and shops. I would highly recommend this hotel.",
        rating: 4.9,
        user: {
          _id: "64c675793cfa5e847bcd543b",
          name: "Jane Doe",
          imageUrl:
            "https://images.unsplash.com/photo-1505682614136-0a12f9f7beea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        },
        updatedAt: "2023-08-21",
      },
    ],
  };

  const coordinates = {
    id: hotel._id,
    title: hotel.title,
    latitude: hotel.latitude,
    longitude: hotel.longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <ScrollView>
      <View style={{ height: 80 }}>
        <AppBar
          title={hotel.title}
          color={COLORS.white}
          icon="search1"
          color1={COLORS.white}
          onPress={() => navigation.goBack()}
          onPress1={() => {}}
          top={50}
          left={20}
          right={20}
        />
      </View>

      <View>
        <View style={styles.container}>
          <NetworkImage
            source={hotel.imageUrl}
            width="100%"
            height={220}
            radius={25}
          />

          <View style={styles.titleContainer}>
            <View style={styles.titleColumn}>
              <ReusableText
                text={hotel.title}
                family="medium"
                size={SIZES.xLarge}
                color={COLORS.black}
              />

              <HeightSpacer height={10} />

              <ReusableText
                text={hotel.location}
                family="medium"
                size={SIZES.medium}
                color={COLORS.black}
              />

              <HeightSpacer height={5} />

              <View style={reusable.rowWidthSpace("space-between")}>
                <Rating
                  maxStars={5}
                  stars={hotel.rating}
                  bordered={false}
                  color="#fd9942"
                />

                <ReusableText
                  text={`(${hotel.review})`}
                  family="medium"
                  size={SIZES.medium}
                  color={COLORS.gray}
                />
              </View>
            </View>
          </View>
        </View>

        <View style={[styles.container, { paddingTop: 90 }]}>
          <ReusableText
            text="Description"
            family="medium"
            size={SIZES.large}
            color={COLORS.black}
          />

          <HeightSpacer height={10} />

          <DescriptionText text={hotel.description} />

          <HeightSpacer height={10} />

          <ReusableText
            text="Location"
            family="medium"
            size={SIZES.large}
            color={COLORS.black}
          />

          <HeightSpacer height={15} />

          <ReusableText
            text={hotel.location}
            family="regular"
            size={SIZES.small + 2}
            color={COLORS.gray}
          />

          <HotelMap coordinates={coordinates} />

          <View style={reusable.rowWidthSpace("space-between")}>
            <ReusableText
              text="Reviews"
              family="medium"
              size={SIZES.large}
              color={COLORS.black}
            />

            <TouchableOpacity>
              <Feather name="list" />
            </TouchableOpacity>
          </View>

          <HeightSpacer height={10} />

          <ReviewsList reviews={hotel.reviews} />
        </View>
        <View style={[reusable.rowWidthSpace("space-between"), styles.bottom]}>
          <View>
            <ReusableText
              text={`\$ ${hotel.price}`}
              family="medium"
              size={SIZES.large}
              color={COLORS.black}
            />

            <HeightSpacer height={5} />

            <ReusableText
              text="Jan 01 - Dec 25"
              family="medium"
              size={SIZES.medium}
              color={COLORS.gray}
            />
          </View>

          <ReusableBtn
            onPress={() => navigation.navigate("SelectRoom")}
            btnText="Select Room"
            width={(SIZES.width - 50) / 2.2}
            backgroundColor={COLORS.green}
            borderColor={COLORS.green}
            borderWidth={0}
            textColor={COLORS.white}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default HotelDetails;
