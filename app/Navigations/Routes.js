import React, { useState } from "react";
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native";
import { Provider } from "react-redux";
// import StackNavigator from "./StackNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { store } from "@app/store";
import StackNavigator from "./StackNavigator";
import { PaperProvider } from "react-native-paper";

const Routes = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const authContext = React.useMemo(
    () => ({
      setDarkTheme: () => {
        setIsDarkTheme(true);
      },
      setLightTheme: () => {
        setIsDarkTheme(false);
      },
    }),
    []
  );

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      primary: "#192B4F",
      white: "#FFFFFF",
      black: "#313131",
      red: "#FF0000",
      blue: "#2D9CDB",

      grey: "#C1C5C6",
      greyDark: "#9296A1",

      greyMedium: "#F0F0F0",
      grey2: "#F4F4F4",
      grey3: "#FBFBFB",

      orange: "#DD593B",
      orange1: "#E5B561",
      orange3: "#FCEADF",
    },
  };

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      primary: "#192B4F",
      white: "#FFFFFF",
      black: "#313131",
      red: "#FF0000",
      blue: "#2D9CDB",
      grey: "#C1C5C6",
      greyDark: "#9296A1",

      greyMedium: "#F0F0F0",
      grey2: "#F4F4F4",
      grey3: "#FBFBFB",
      orange: "#DD593B",
      orange1: "#E5B561",
      orange3: "#FCEADF",
    },
  };

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  return (
    <SafeAreaProvider>
      {/* <themeContext.Provider value={authContext}> */}
      <Provider store={store}>
        <PaperProvider>
          <NavigationContainer theme={theme}>
            <StackNavigator />
          </NavigationContainer>
        </PaperProvider>
      </Provider>
      {/* </themeContext.Provider> */}
    </SafeAreaProvider>
  );
};
export default Routes;
