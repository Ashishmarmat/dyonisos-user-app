import * as ActionTypes from '../constants/ActionTypes';
import { BaseUrl } from '../constants/api';
import { Alert, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
export function meetpeopleRes(data) {
    return {
        type: ActionTypes.MEETPEOPLE,
        data
    }
};
export function meetpeopleAPI(data) {
    console.log("meetpeopleAPI", data)
    return (dispatch) => {
        fetch(BaseUrl + `/api/user_list`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then((res) => res.json())
            .then(res => {
                console.log("meetpeopleRes", res)
                if (res.success === true) {
                    dispatch(meetpeopleRes(res));
                } else {
                    dispatch(meetpeopleRes(res));
                }
            })
            .catch((e) => {
                console.warn(e);
            });
    }
}