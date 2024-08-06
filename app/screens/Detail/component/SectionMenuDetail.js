import { View, Text, Pressable } from "react-native";
import React from "react";
import { sizes } from "@app/constants/sized";
import { useNavigation, useTheme } from "@react-navigation/native";
import { Icon } from "@rneui/base";
import Gap from "@app/components/Gap/Gap";
import TextCustom from "@app/components/Text/TextCustom";
import { FONTS } from "@app/constants/theme";

const SectionMenuDetail = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const MenuCustom = ({
    icName = "",
    icColor = "blacK",
    title = "",
    onPress,
  }) => {
    return (
      <Pressable
        onPress={() => {
          navigation?.navigate("CallPage", { title: icName, name: title });
        }}
        style={{
          borderRadius: sizes(13),
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: sizes(20),
          //   backgroundColor: "red",
        }}
      >
        <View
          style={{
            width: sizes(115),
            height: sizes(115),
            borderRadius: sizes(15),
            justifyContent: "center",
            // shadow
            backgroundColor: colors?.white,
            backgroundColor: "white",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 5,
            marginBottom: sizes(10),
          }}
        >
          <Icon
            name={icName}
            type="material-community"
            size={sizes(50)}
            color={icColor}
          />
        </View>
        <TextCustom
          value={title}
          fontSize={sizes(11)}
          color={colors?.primary}
          fontFamily={FONTS?.fontsSemiBold}
        />
      </Pressable>
    );
  };
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: sizes(25),
      }}
    >
      <View>
        <MenuCustom
          icName="bank"
          icColor={colors?.orange}
          onPress={() => {}}
          title="Bank"
        />
        <MenuCustom
          icName="bitcoin"
          icColor={colors?.orange}
          onPress={() => {}}
          title="Bitcoin"
        />
        <MenuCustom
          icName="cash-100"
          icColor={colors?.orange}
          onPress={() => {}}
          title="Cash"
        />
        <MenuCustom
          icName="credit-card"
          icColor={colors?.orange}
          onPress={() => {}}
          title="Credit"
        />
        <MenuCustom
          icName="finance"
          icColor={colors?.orange}
          onPress={() => {}}
          title="Finance"
        />
        <MenuCustom
          icName="wallet"
          icColor={colors?.orange}
          onPress={() => {}}
          title="Wallet"
        />
      </View>
      <View>
        <MenuCustom
          icName="barcode-scan"
          icColor={colors?.orange}
          onPress={() => {}}
          title="Barcode"
        />
        <MenuCustom
          icName="basket"
          icColor={colors?.orange}
          onPress={() => {}}
          title="Market"
        />
        <MenuCustom
          icName="bed"
          icColor={colors?.orange}
          onPress={() => {}}
          title="Travel"
        />
        <MenuCustom
          icName="bell"
          icColor={colors?.orange}
          onPress={() => {}}
          title="Notification"
        />
        <MenuCustom
          icName="billiards-rack"
          icColor={colors?.orange}
          onPress={() => {}}
          title="Holiday"
        />
        <MenuCustom
          icName="bookshelf"
          icColor={colors?.orange}
          onPress={() => {}}
          title="Arsip"
        />
      </View>
      <View>
        <MenuCustom
          icName="briefcase-outline"
          icColor={colors?.orange}
          onPress={() => {}}
          title="Work"
        />
        <MenuCustom
          icName="cards-heart"
          icColor={colors?.orange}
          onPress={() => {}}
          title="Happy"
        />
        <MenuCustom
          icName="car-wireless"
          icColor={colors?.orange}
          onPress={() => {}}
          title="Insurance"
        />
        <MenuCustom
          icName="calendar-blank"
          icColor={colors?.orange}
          onPress={() => {}}
          title="Calendar"
        />
        <MenuCustom
          icName="calculator"
          icColor={colors?.orange}
          onPress={() => {}}
          title="Calculator"
        />
        <MenuCustom
          icName="bus"
          icColor={colors?.orange}
          onPress={() => {}}
          title="Ticket"
        />
      </View>
    </View>
  );
};

export default SectionMenuDetail;
