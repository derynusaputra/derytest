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
import SectionMenu from "./component/SectionMenu";
import Gap from "@app/components/Gap/Gap";
import { onLoginSucces } from "@app/store/auth/Account";
import { useDispatch } from "react-redux";
import LoadingComp from "@app/components/Loading/LoadingComp";

const HomeScreen = () => {
  const { colors } = useTheme();
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    // Simulate a network request
    setTimeout(() => {
      // Tambahkan data baru atau refresh data di sini
      // setData([...data, `Item ${data.length + 1}`]);
      setRefreshing(false);
    }, 800);
  };

  const LogOutButton = async () => {
    setLoading(true);
    // setMessage('');

    setTimeout(() => {
      setLoading(false);
      dispatch(onLoginSucces(false));

      // setMessage('The operation is complete!');
    }, 800); // 5 seconds delay
  };

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <StatusBar barStyle="light-content" backgroundColor={colors?.orange} />

        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            backgroundColor: colors?.orange,
          }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View
            style={{
              // backgroundColor: "red",
              flex: 1,
              height: sizes(1000),
              width: "100%",

              // padding: sizes(15),
            }}
          >
            <View
              style={{ paddingHorizontal: sizes(15), height: sizes(140) }}
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
            <View
              style={{
                paddingTop: sizes(30),
                flexDirection: "row",
                width: sizes(380),
                justifyContent: "space-between",
                //   backgroundColor: "red",
              }}
            >
              <View
                style={{
                  paddingBottom: sizes(25),
                }}
              >
                <Text
                  style={{
                    color: colors.white,
                    fontSize: sizes(14),
                    fontFamily: "Poppins-Regular",
                  }}
                >
                  Selamat Datang
                </Text>
                <Text
                  style={{
                    color: colors.white,
                    fontSize: sizes(20),
                    fontFamily: "Poppins-SemiBold",
                  }}
                >
                  Dery Ahmad Kamalino
                </Text>
              </View>
              <Pressable
                onPress={() => {
                  LogOutButton();
                }}
                style={{
                  padding: sizes(5),
                  // backgroundColor: "red",
                  alignSelf: "flex-start",
                  borderRadius: sizes(50),
                }}
              >
                <Icon
                  name={"logout"}
                  type="material-community"
                  size={sizes(27)}
                  color={colors?.white}
                />
              </Pressable>
            </View>

            <SectionMenu />
          </View>
        </ScrollView>
      </SafeAreaView>
      {loading ? <LoadingComp /> : null}
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
