/*
 * @file: Responsive Fonts.js
 * @description: contains all moderate scale calculation
 * @author: Ritu Raj
 * */
"use strict";

import {Dimensions, Platform} from "react-native";
const {width, height} = Dimensions.get("window");

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 320;
const guidelineBaseHeight = 680;
const scale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) => {
  if (Platform.OS === "web") {
    factor = 0.1;
  }
  return size + (scale(size) - size) * factor;
};
console.log("device width and height =>>>>>>>>>>", width, height);
const widthScale = Platform.OS === "ios" ? width/1.137  : width/1.137;
const heightScale = Platform.OS === "ios" ? 46 : width*0.12;
export { scale, verticalScale, moderateScale, widthScale ,heightScale, width, height };
console.log("device width and height moderateScale =>>>>>>>>>>", widthScale, heightScale);
