import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { sizes } from "@app/constants/sized";
import { useTheme } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Icon } from "@rneui/base";
import Gap from "@app/components/Gap/Gap";
import Headers from "@app/layout/Headers";
import SectionMenuDetail from "./component/SectionMenuDetail";

const DetailScreen = ({ route }) => {
  console.log({ route });
  const { colors } = useTheme();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    // Simulate a network request
    setTimeout(() => {
      // Tambahkan data baru atau refresh data di sini
      // setData([...data, `Item ${data.length + 1}`]);
      setRefreshing(false);
    }, 1000);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar barStyle="light-content" backgroundColor={colors?.orange} />
      {/* <Pressable> */}
      <Headers
        title={"Layanan " + route?.params?.title}
        backgroundColor={colors?.orange}
        icColor={colors?.white}
      />
      {/* </Pressable> */}

      <ScrollView
        contentContainerStyle={{ flexGrow: 1, backgroundColor: colors?.orange }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View
          style={{
            // backgroundColor: "red",
            flex: 1,
            height: sizes(1010),
            width: "100%",

            // padding: sizes(15),
          }}
        >
          <View
            style={{ paddingHorizontal: sizes(15), height: sizes(0) }}
          ></View>
          <View
            style={[
              {
                backgroundColor: colors.white,
                // marginTop: sizes(90),
                flex: 1,
                padding: 20,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                paddingTop: 35,
              },
            ]}
          ></View>
        </View>

        <View
          style={{
            // height: sizes(50),
            // width: sizes(50),
            width: "100%",
            flex: 1,
            // backgroundColor: "red",
            position: "absolute",
            // justifyContent: "center",
            // alignItems: "center",
            paddingHorizontal: sizes(20),
          }}
        >
          <SectionMenuDetail />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
