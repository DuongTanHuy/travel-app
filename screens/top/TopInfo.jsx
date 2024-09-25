import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ProfileTitle } from "../../components";

const TopInfo = ({ navigation }) => {
  return (
    <View style={{ margin: 20 }}>
      <ProfileTitle
        title="Personal Information"
        icon="user"
        onPress={() => navigation.navigate("")}
      />
      <ProfileTitle
        title="Payments"
        icon="creditcard"
        onPress={() => navigation.navigate("")}
      />
      <ProfileTitle
        title="Settings"
        icon="setting"
        onPress={() => navigation.navigate("")}
      />
    </View>
  );
};

export default TopInfo;

const styles = StyleSheet.create({});
