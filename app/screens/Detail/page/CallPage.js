import { View, Text, SafeAreaView, StatusBar, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { useTheme } from "@react-navigation/native";
import { Icon } from "@rneui/base";
import { sizes } from "@app/constants/sized";
import TextCustom from "@app/components/Text/TextCustom";
import { FONTS } from "@app/constants/theme";
import Gap from "@app/components/Gap/Gap";
import ContDown from "../component/ContDown";

const CallPage = ({ navigation, route }) => {
  console.log({ route });
  const { colors } = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors?.orange }}>
      <StatusBar barStyle="light-content" backgroundColor={colors?.orange} />
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          alignItems: "center",
          //   backgroundColor: "red",
          paddingBottom: sizes(50),
        }}
      >
        <Gap height={sizes(100)} />

        <View style={{ alignItems: "center" }}>
          <TextCustom
            textAlign="center"
            value={route?.params?.name}
            fontSize={sizes(25)}
            color={colors?.white}
            fontFamily={FONTS?.fontsMedium}
          />
          <Gap height={sizes(10)} />

          <View
            style={{
              width: sizes(156),
              height: sizes(156),
              borderRadius: sizes(60),
              backgroundColor: colors?.white,
              justifyContent: "center",
            }}
          >
            <Icon
              name={route?.params?.title}
              type="material-community"
              size={sizes(75)}
              color={colors?.orange}
            />
          </View>
          <Gap height={sizes(20)} />
          <ContDown />
          <TextCustom
            width={sizes(240)}
            textAlign="center"
            value={`Anda sedang terhubung dengan layanan ${route?.params?.name}`}
            fontSize={sizes(14)}
            color={colors?.white}
            fontFamily={FONTS?.fontsMedium}
          />
        </View>

        <View style={{ flexDirection: "row" }}>
          <View>
            <View
              style={{
                width: sizes(78),
                height: sizes(78),
                borderRadius: sizes(60),
                backgroundColor: colors?.orange,
                justifyContent: "center",
                borderWidth: 1,
                borderColor: colors?.grey,
                marginBottom: sizes(22),
              }}
            >
              <Icon
                name={"volume-high"}
                type="material-community"
                size={sizes(35)}
                color={colors?.white}
              />
            </View>
            <TextCustom
              textAlign="center"
              value={"Speaker"}
              fontSize={sizes(14)}
              color={colors?.white}
              fontFamily={FONTS?.fontsMedium}
            />
          </View>
          <Gap width={sizes(20)} />

          <Pressable
            onPress={() => {
              navigation?.pop();
            }}
          >
            <View
              style={{
                width: sizes(78),
                height: sizes(78),
                borderRadius: sizes(60),
                backgroundColor: colors?.primary,
                justifyContent: "center",
                borderWidth: 1,
                // borderColor: colors?.grey,
                marginBottom: sizes(22),
              }}
            >
              <Icon
                name={"phone-hangup"}
                type="material-community"
                size={sizes(35)}
                color={colors?.red}
              />
            </View>
            <TextCustom
              textAlign="center"
              value={"End Call"}
              fontSize={sizes(14)}
              color={colors?.white}
              fontFamily={FONTS?.fontsMedium}
            />
          </Pressable>
          <Gap width={sizes(20)} />

          <View>
            <View
              style={{
                width: sizes(78),
                height: sizes(78),
                borderRadius: sizes(60),
                backgroundColor: colors?.orange,
                justifyContent: "center",
                borderWidth: 1,
                borderColor: colors?.grey,
                marginBottom: sizes(22),
              }}
            >
              <Icon
                name={"dialpad"}
                type="material-community"
                size={sizes(35)}
                color={colors?.white}
              />
            </View>
            <TextCustom
              textAlign="center"
              value={"Keypad"}
              fontSize={sizes(14)}
              color={colors?.white}
              fontFamily={FONTS?.fontsMedium}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CallPage;
