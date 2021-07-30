import * as ActionTypes from '../constants/ActionTypes';
import { BaseUrl } from '../constants/api';
import { Alert, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
export function alleventsRes(data) {
    return {
        type: ActionTypes.ALLEVENTS,
        data
    }
};
export function alleventsAPI(data) {
    console.log("alleventsAPI", data)
    return (dispatch) => {
        fetch(BaseUrl + `/api/listAllEvents`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then((res) => res.json())
            .then(res => {
                console.log("alleventsRes", res)
                if (res.success === true) {
                    dispatch(alleventsRes(res));
                } else {
                    dispatch(alleventsRes(res));
                }
            })
            .catch((e) => {
                console.warn(e);
            });
    }
}