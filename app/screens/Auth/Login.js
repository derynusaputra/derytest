import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StatusBar,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import HomeScreen from "../Home/HomeScreen";
import { onLoginSucces } from "@app/store/auth/Account";
import { sizes } from "@app/constants/sized";
import Gap from "@app/components/Gap/Gap";
import LoadingComp from "@app/components/Loading/LoadingComp";
import { FONTS, IMAGES } from "@app/constants/theme";
import TextCustom from "@app/components/Text/TextCustom";
const Login = ({ navigation }) => {
  const JWT = useSelector((state) => state.account.token);

  const [valUser, setValUser] = useState("");
  const [valPass, setValPass] = useState("");

  const dispatch = useDispatch();
  const { colors } = useTheme();

  const [show, setshow] = useState(true);
  const [loading, setLoading] = useState(false);

  const [inputFocus, setFocus] = useState({
    onFocus1: false,
    onFocus2: false,
  });

  const timer = setTimeout(() => {
    setLoading(false);
  }, 5000);

  const LoginButton = async () => {
    setLoading(true);
    // setMessage('');

    setTimeout(() => {
      setLoading(false);
      dispatch(onLoginSucces(true));
    }, 800); // 5 seconds delay
  };

  useEffect(() => {
    if (JWT) {
      setValUser("");
      setValPass("");
    }
  }, [JWT]);

  if (JWT) {
    return (
      <>
        <HomeScreen navigation={navigation} />
      </>
    );
  }

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" backgroundColor={colors?.orange} />

        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : ""}
        >
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={{ backgroundColor: colors?.orange, flex: 1 }}>
              <View style={{ alignItems: "center" }}>
                <View
                  style={{
                    paddingTop: 40,
                    paddingBottom: 20,
                  }}
                >
                  <Image
                    style={{
                      width: 150,
                      height: 150,
                      borderRadius: sizes(200),
                    }}
                    source={IMAGES.bgLogo}
                  />
                </View>
                <Text style={{ color: colors.white, marginBottom: 5 }}>
                  Login Akun
                </Text>
                <Text
                  style={{
                    color: "rgba(255, 255, 255, 0.80)",
                    width: 285,
                    textAlign: "center",
                    marginBottom: 30,
                  }}
                >
                  Dery Ahmad Kamalino
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: colors.card,
                  position: "relative",
                  flex: 1,
                  padding: 20,
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                  paddingTop: 35,
                }}
              >
                <Text style={{ marginBottom: 5, color: colors.black }}>
                  Username
                </Text>

                <View
                  style={[
                    {
                      height: 48,
                      borderRadius: 12,
                      paddingLeft: 20,
                      justifyContent: "center",
                      marginBottom: 15,
                      borderWidth: 1,
                      borderColor: "transparent",
                      backgroundColor: colors.orange3,
                    },
                    inputFocus.onFocus1 && {
                      borderColor: colors.green,
                    },
                  ]}
                >
                  <TextInput
                    style={{ padding: 0, height: 48, color: colors.black }}
                    placeholder="Masukkan Username"
                    placeholderTextColor={colors.grey}
                    onFocus={() => setFocus({ ...inputFocus, onFocus1: true })}
                    onBlur={() => setFocus({ ...inputFocus, onFocus1: false })}
                    keyboardType="number-pad"
                    onChangeText={(val) => {
                      setValUser(val);
                    }}
                  />
                </View>

                <Text style={{ marginBottom: 5, color: colors.black }}>
                  Kata Sandi
                </Text>
                <View
                  style={[
                    {
                      height: 48,
                      borderRadius: 12,
                      paddingLeft: 20,
                      justifyContent: "center",
                      marginBottom: 15,
                      borderWidth: 1,
                      borderColor: "transparent",
                      backgroundColor: colors.orange3,
                    },
                    inputFocus.onFocus2 && {
                      borderColor: colors.green,
                    },
                  ]}
                >
                  <TextInput
                    style={[
                      {
                        padding: 0,
                        height: 48,

                        color: colors.black,
                      },
                    ]}
                    placeholder="Masukkan Kata Sandi"
                    placeholderTextColor={colors.grey}
                    secureTextEntry={show}
                    onFocus={() => setFocus({ ...inputFocus, onFocus2: true })}
                    onBlur={() => setFocus({ ...inputFocus, onFocus2: false })}
                    onChangeText={(val) => {
                      setValPass(val);
                    }}
                  />
                </View>
                <Gap height={sizes(10)} />
                <Pressable
                  onPress={() => {
                    LoginButton();
                  }}
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
                <Gap height={sizes(50)} />
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
      {loading ? <LoadingComp /> : null}
    </>
  );
};

export default Login;
