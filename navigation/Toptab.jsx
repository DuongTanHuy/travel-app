import { Image, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { TopBooking, TopInfo } from "../screens";
import TopTrip from "../screens/top/TopTrip";
import { COLORS, SIZES } from "../constants/theme";
import { HeightSpacer, NetworkImage, ReusableText } from "../components";
import AppBar from "../components/Reusable/Appbar";
import styles from "./topTab.style";

const Tab = createMaterialTopTabNavigator();

const Toptab = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: COLORS.lightWhite }}>
        <View>
          <NetworkImage
            source="https://images.unsplash.com/photo-1619995745882-f4128ac82ad6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fHww"
            width="100%"
            height={300}
            radius={0}
          />

          <AppBar
            top={40}
            left={20}
            right={20}
            color={COLORS.white}
            icon="logout"
            color1={COLORS.white}
            onPress={() => {}}
          />

          <View style={styles.profile}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
              }}
              style={styles.image}
            />

            <HeightSpacer height={5} />

            <View style={{ alignItems: "center" }}>
              <ReusableText
                text="John Doe"
                family="medium"
                size={SIZES.medium}
                color={COLORS.white}
              />
            </View>

            <HeightSpacer height={5} />

            <View style={styles.name}>
              <View style={{ alignItems: "center" }}>
                <ReusableText
                  text="johndoe@gmail.com"
                  family="medium"
                  size={SIZES.medium}
                  color={COLORS.white}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <Tab.Navigator>
        <Tab.Screen name="Bookings" component={TopBooking} />
        <Tab.Screen name="Trips" component={TopTrip} />
        <Tab.Screen name="Info" component={TopInfo} />
      </Tab.Navigator>
    </View>
  );
};

export default Toptab;
