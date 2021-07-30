import * as ActionTypes from "../constants/ActionTypes";
import { BaseUrl } from "../constants/api";
import { Alert } from "react-native";
import { Actions } from "react-native-router-flux";
import AsyncStorage from "@react-native-community/async-storage";
export function signupRes(data) {
  return {
    type: ActionTypes.SIGNUP,
    data,
  };
}
export function signupAPI(data) {
  console.log("signupApi", data);
  return (dispatch) => {
    fetch(BaseUrl + `/api/Signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("signup res", res);

        if (res.success === true) {
          AsyncStorage.setItem("userId", res.data._id);
          AsyncStorage.setItem("email", res.data.email);
          AsyncStorage.setItem("country", res.data.country);
          AsyncStorage.setItem("username", res.data.username);
          AsyncStorage.setItem("aboutMe", res.data.aboutMe);
          AsyncStorage.setItem("dob", res.data.dob);
          AsyncStorage.setItem("gender", res.data.gender);
          AsyncStorage.setItem("image", res.data.image);
          AsyncStorage.setItem("contactNumber", res.data.contactNumber);
          AsyncStorage.setItem("address", res.data.address);
          AsyncStorage.setItem("interest", res.data.interest);
          AsyncStorage.setItem("token", res.data.token);
          dispatch(signupRes(res));
        } else {
          dispatch(signupRes(res));
        }
      })
      .catch((e) => {
        console.warn(e);
      });
  };
}
