import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { sizes } from "@app/constants/sized";
import { useNavigation, useTheme } from "@react-navigation/native";
import Gap from "@app/components/Gap/Gap";
import TextCustom from "@app/components/Text/TextCustom";
import { FONTS } from "@app/constants/theme";
import { Icon } from "@rneui/base";

const SectionMenu = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  const MenuCustom = ({
    icName = "",
    icColor = "blacK",
    title = "",
    desc,
    onPress,
  }) => {
    return (
      <Pressable
        onPress={onPress}
        style={{
          flexDirection: "row",
          backgroundColor: colors?.white,
          backgroundColor: "white",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 5,
          borderRadius: sizes(13),
          padding: sizes(20),
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: sizes(20),
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Icon
            name={icName}
            type="material-community"
            size={sizes(32)}
            color={icColor}
          />
          <Gap width={sizes(15)} />
          <View>
            <TextCustom
              value={title}
              fontSize={sizes(17)}
              color={colors?.primary}
              fontFamily={FONTS?.fontsSemiBold}
            />
            <TextCustom
              value={desc}
              width={sizes(230)}
              fontSize={sizes(13)}
              color={colors?.grey}
              fontFamily={FONTS?.fontsMedium}
            />
          </View>
        </View>
        <Icon
          //   name={""}
          name={"keyboard-arrow-right"}
          //   icName
          type="material"
          size={sizes(27)}
          color={colors?.orange}
        />
      </Pressable>
    );
  };

  //
  return (
    <View
      style={{
        // padding: sizes(10),
        // backgroundColor: "red",
        marginTop: sizes(30),
        paddingTop: sizes(25),
      }}
    >
      <TextCustom
        value={"Halo, silakan pilih layanan kami"}
        fontSize={sizes(16)}
        color={colors?.orange}
        fontFamily={FONTS?.fontsSemiBold}
      />
      <Gap height={sizes(20)} />
      <MenuCustom
        icName="phone"
        icColor={"#045AA6"}
        onPress={() => {
          navigation?.navigate("DetailScreen", { title: "Phone" });
        }}
        title="Call"
        desc={"Telepon bebas pulsa ke CS berbasis internet."}
      />
      <MenuCustom
        icName="forum-outline"
        icColor={colors?.orange}
        onPress={() => {
          navigation?.navigate("DetailScreen", { title: "Halo" });
        }}
        title="Halo"
        desc={"Konsultasi melalui WhatsApp resmi atau fitur chat."}
      />
      <MenuCustom
        icName="email-open-multiple-outline"
        icColor={"#29BAB5"}
        onPress={() => {
          navigation?.navigate("DetailScreen", { title: "Email" });
        }}
        title="Email"
        desc={"Kirim pertanyaan melalui email."}
      />
      <MenuCustom
        icName="twitter"
        icColor={colors?.blue}
        onPress={() => {
          navigation?.navigate("DetailScreen", { title: "Twitter" });
        }}
        title="X (Twitter)"
        desc={"Kirim pertanyaan ke akun X (Twitter)."}
      />

      <View
        style={{
          backgroundColor: colors?.orange3,
          paddingVertical: sizes(15),
          paddingLeft: sizes(20),
          borderRadius: sizes(13),
          marginVertical: sizes(10),
        }}
      >
        <TextCustom
          value={"Silakan registrasi untuk proses lebih mudah"}
          fontSize={sizes(14)}
          color={colors?.orange}
          fontFamily={FONTS?.fontsMedium}
        />
      </View>

      <Pressable
        style={{
          backgroundColor: colors?.orange,
          paddingVertical: sizes(20),
          paddingHorizontal: sizes(20),
          borderRadius: sizes(30),
          marginVertical: sizes(10),

          alignItems: "center",
        }}
      >
        <TextCustom
          value={"Registrasi"}
          fontSize={sizes(14)}
          color={colors?.white}
          fontFamily={FONTS?.fontsMedium}
        />
      </Pressable>
      <View
        style={{
          backgroundColor: colors?.white,
          borderWidth: 1,
          borderColor: colors?.orange,
          paddingVertical: sizes(20),
          paddingHorizontal: sizes(20),
          borderRadius: sizes(30),
          marginVertical: sizes(10),
          alignItems: "center",
        }}
      >
        <TextCustom
          value={"Pengkinian Data"}
          fontSize={sizes(14)}
          color={colors?.orange}
          fontFamily={FONTS?.fontsMedium}
        />
      </View>
    </View>
  );
};

export default SectionMenu;

const styles = StyleSheet.create({});
