import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "@react-navigation/native";
import BottomTab from "@app/layout/BottomTab";
import HomeScreen from "@app/screens/Home/HomeScreen";

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  const theme = useTheme();
  const { colors } = theme;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      {/* // <View></View> */}
      <Tab.Navigator
        tabBar={(props) => <BottomTab {...props} />}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Tiket" component={HomeScreen} />
        <Tab.Screen name="Profile" component={HomeScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
