import SquareWOFF from "../assets/fonts/EuclidSquare-Regular.woff";
import SquareBoldWOFF from "../assets/fonts/EuclidSquare-Bold.woff";
import SquareSemiBoldWOFF from "../assets/fonts/EuclidSquare-SemiBold.woff";
import SquareItalicWOFF from "../assets/fonts/EuclidSquare-Italic.woff";
import SquareLightWOFF from "../assets/fonts/EuclidSquare-Light.woff";
import SquareMediumWOFF from "../assets/fonts/EuclidSquare-Medium.woff";
import Poppins from "../assets/fonts/VarinonormalRegular-1GXaM.ttf";


const varino = {
  fontFamily: "VarinoNormal",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 100,
  src: `
		local('VarinonormalRegular'),
		local('VarinonormalRegular-1GXaM'),
		url(${Poppins}) format('truetype')
	`,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const square = {
  fontFamily: "Square",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
		local('EuclidSquare'),
		local('EuclidSquare-Regular'),
		url(${SquareWOFF}) format('woff')
	`,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const squareLight = {
  fontFamily: "Square",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 300,
  src: `
		local('EuclidSquare'),
		local('EuclidSquare-Light'),
		url(${SquareLightWOFF}) format('woff')
	`,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const squareMedium = {
  fontFamily: "Square",
  fontStyle: "medium",
  fontDisplay: "swap",
  fontWeight: 500,
  src: `
		local('EuclidSquare'),
		local('EuclidSquare-Medium'),
		url(${SquareMediumWOFF}) format('woff')
	`,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const squareSemiBold = {
  fontFamily: "Square",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 600,
  src: `
		local('EuclidSquare-SemiBold'),
		local('EuclidSquare-SemiBold'),
		url(${SquareSemiBoldWOFF}) format('woff')
	`,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const squareBold = {
  fontFamily: "Square",
  fontStyle: "bold",
  fontDisplay: "swap",
  fontWeight: 700,
  src: `
		local('EuclidSquare-Bold'),
		local('EuclidSquare-Bold'),
		url(${SquareBoldWOFF}) format('woff')
	`,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const squareItalic = {
  fontFamily: "Square",
  fontStyle: "italic",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
		local('EuclidSquare-Italic'),
		local('EuclidSquare-Italic'),
		url(${SquareItalicWOFF}) format('woff')
	`,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const fonts = [varino];

export default fonts;
