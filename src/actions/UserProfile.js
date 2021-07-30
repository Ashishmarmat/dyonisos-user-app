import * as ActionTypes from "../constants/ActionTypes";
import { BaseUrl } from "../constants/api";
import { Alert, AsyncStorage } from "react-native";
import { Actions } from "react-native-router-flux";
export function userprofileRes(data) {
  return {
    type: ActionTypes.USERPROFILE,
    data,
  };
}
export function userprofileAPI(data) {
  console.log("userprofileAPI",data);
  return (dispatch) => {
    fetch(BaseUrl + `/api/userProfile`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("userprofileRes", res);
        if (res.success === true) {

          dispatch(userprofileRes(res));
        } else {
          dispatch(userprofileRes(res));
        }
      })
      .catch((e) => {
        console.warn(e);
      });
  };
}
