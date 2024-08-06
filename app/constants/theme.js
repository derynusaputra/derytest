import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");

export const COLORS = {
  primary: "#2979F8",
  primary3: "#8810f7",
  primaryLight: "#7BAEFF",

  // pesantren
};

export const FONTS = {
  fontsRegular: "Poppins-Regular",
  fontsMedium: "Poppins-Medium",
  fontsSemiBold: "Poppins-SemiBold",
  fontsBold: "Poppins-Bold",
};

export const IMAGES = {
  // pesantren
  // icTopup: require("../assets/images/icons/ic_topup.png"),
  // gbr
  // gbrBayarBerulang: require("../assets/images/icons/gbr-pembayaran-berulang.png"),

  bgKursi: require("../assets/images/bgKursi.png"),
  bgLogo: require("../assets/images/logotest.png"),

  gbrUri1:
    "https://media.21cineplex.com/webcontent/gallery/pictures/172170432120007_925x527.jpg",
  gbrUri2: "https://web3.21cineplex.com/mobile-banner/apps.tarot.jpeg",
  gbrUri3: "https://web3.21cineplex.com/mobile-banner/apps.flymetothemoon.jpeg",
  gbrItem1:
    "https://nos.jkt-1.neo.id/media.cinema21.co.id/movie-images/14RDBK.jpg",
  gbrItem2:
    "https://nos.jkt-1.neo.id/media.cinema21.co.id/movie-images/14UPI2.jpg",
  gbrItem3:
    "https://nos.jkt-1.neo.id/media.cinema21.co.id/movie-images/14SMAT.jpg",
  gbrItem4:
    "https://nos.jkt-1.neo.id/media.cinema21.co.id/movie-images/14BISI.jpg",
  gbrItem5:
    "https://nos.jkt-1.neo.id/media.cinema21.co.id/movie-images/14JRIA.jpg",
};

export const VIDEO = {
  // video1: require("../assets/video/video1.mp4"),
};

const appTheme = { COLORS, FONTS, IMAGES, VIDEO };

export default appTheme;
