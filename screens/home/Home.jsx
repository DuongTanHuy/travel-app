import React from "react";
import reusable from "../../components/Reusable/reusable.styles";
import { View } from "react-native";
import {
  BestHotels,
  HeightSpacer,
  Places,
  Recommendation,
  ReusableText,
} from "../../components";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./home.style";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={reusable.container}>
      <View>
        <View style={reusable.rowWidthSpace("space-between")}>
          <ReusableText
            text="Hey User!"
            family="regular"
            size={TEXT.large}
            color={COLORS.black}
          />
          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("Search")}
          >
            <AntDesign name="search1" size={26} />
          </TouchableOpacity>
        </View>

        <HeightSpacer height={SIZES.xLarge} />

        <ReusableText
          text="Places"
          family="medium"
          size={TEXT.large}
          color={COLORS.black}
        />

        <Places />

        <HeightSpacer height={15} />

        <Recommendation />

        <HeightSpacer height={30} />

        <BestHotels />
      </View>
    </SafeAreaView>
  );
};

export default Home;
