import {
  View,
  TouchableOpacity,
  Image,
  Animated,
  Platform,
  Text,
  StyleSheet,
} from "react-native";
import { COLORS, IMAGES, SIZES, FONTS } from "../constants/theme";
import DropShadow from "react-native-drop-shadow";
import { GlobalStyleSheet } from "../constants/styleSheet";
import { useTheme } from "@react-navigation/native";
import { useEffect, useRef } from "react";
import { Icon } from "@rneui/base";
import { sizes } from "@app/constants/sized";
import Gap from "@app/components/Gap/Gap";

function BottomTab({ state, descriptors, navigation }) {
  const { colors } = useTheme();

  return (
    <>
      <View
        style={{
          height: 60,
          flexDirection: "row",
          position: "absolute",
          width: "auto",
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: colors?.white,
          borderTopWidth: 1,
          borderTopColor: colors?.greyMedium,
        }}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({ name: route.name, merge: true });
            }
          };

          return (
            <View style={styles.tabItem} key={index}>
              <TouchableOpacity style={styles.tabLink} onPress={onPress}>
                {/* <Image
                  style={[
                    {
                      height: 20,
                      width: 20,
                      resizeMode: "contain",
                      opacity: isFocused ? 1 : 0.6,
                      marginBottom: 6,
                      tintColor: isFocused ? COLORS.primary3 : colors.text,
                    },
                  ]}
                  source={
                    label === "Home"
                      ? IMAGES.pin
                      : label === "Tike"
                      ? IMAGES.cards
                      : label === "Profile" && IMAGES.avatar
                  }
                /> */}
                {console.log(label)}
                <Icon
                  type={"ionicon"}
                  name={
                    label === "Home"
                      ? "home"
                      : label === "Tiket"
                      ? "ticket"
                      : label === "Profile" && "person"
                  }
                  size={20}
                  color={isFocused ? colors.primary : colors.grey}
                />
                <Gap height={2} />
                <Text
                  style={{
                    fontSize: 12,
                    color: isFocused ? colors.primary : colors.grey,
                    marginBottom: -2,
                  }}
                >
                  {label}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  tabLink: {
    alignItems: "center",
    padding: 5,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  navText: {
    ...FONTS.fontSm,
  },
});

export default BottomTab;
