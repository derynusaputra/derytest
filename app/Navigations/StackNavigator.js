import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";

import { StatusBar } from "react-native";
import { useTheme } from "@react-navigation/native";
import MainNavigator from "./MainNavigator";
import HomeScreen from "@app/screens/Home/HomeScreen";
import DetailScreen from "@app/screens/Detail/DetailScreen";
import CallPage from "@app/screens/Detail/page/CallPage";
import Login from "@app/screens/Auth/Login";
// import DetailPage from "@app/screens/Detail/DetailPage";

const Stack = createStackNavigator();

const StackNavigator = () => {
  const theme = useTheme();

  return (
    <>
      <StatusBar
        barStyle={theme.dark ? "light-content" : "dark-content"}
        backgroundColor={theme.colors.card}
      />
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: "transparent" },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Stack.Screen
          name="Main"
          component={MainNavigator}
          options={{
            animationEnabled: false,
            gestureEnabled: false,
          }}
          // initialParams={{ link: "uriDeeplinkg" }}
        />

        <Stack.Screen name="Login" component={Login} />

        {/* test bintang aplikasi perkasa */}
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
        <Stack.Screen name="CallPage" component={CallPage} />
      </Stack.Navigator>
    </>
  );
};

export default StackNavigator;
