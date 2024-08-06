import { StyleSheet, Text, View } from "react-native";
import React, { memo, useEffect, useState } from "react";
import TextCustom from "@app/components/Text/TextCustom";
import { sizes } from "@app/constants/sized";
import { useTheme } from "@react-navigation/native";
import { FONTS } from "@app/constants/theme";

const ContDown = () => {
  const { colors } = useTheme();

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 59) {
          setMinutes((prevMinutes) => {
            if (prevMinutes === 59) {
              setHours((prevHours) => prevHours + 1);
              return 0;
            }
            return prevMinutes + 1;
          });
          return 0;
        }
        return prevSeconds + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (unit) => (unit < 10 ? `0${unit}` : unit);

  return (
    <View>
      <TextCustom
        textAlign="center"
        value={`${formatTime(hours)}:${formatTime(minutes)}:${formatTime(
          seconds
        )}`}
        fontSize={sizes(25)}
        color={colors?.white}
        fontFamily={FONTS?.fontsMedium}
      />
    </View>
  );
};

export default memo(ContDown);

const styles = StyleSheet.create({});
