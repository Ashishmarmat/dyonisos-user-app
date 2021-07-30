import * as ActionTypes from '../constants/ActionTypes';
import { BaseUrl } from '../constants/api';
import {Alert, AsyncStorage} from 'react-native';
import { Actions } from 'react-native-router-flux';
export function createsponserRes(data) {
    return {
        type: ActionTypes.CREATESPONSER,
        data
    }
};

export function createsponserAPI(data) {
    console.log("createsponserAPI")
    return (dispatch) => {
        fetch(BaseUrl + `/api/createSponsor`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then((res) => res.json())
            .then(res => {
                console.log("createsponserRes",res)
                if (res.status === "success") {
                    dispatch(createsponserRes(res));
                   
                } else {
                   
                    dispatch(createsponserRes(res));
                }
            })
            .catch((e) => {
                //  console.warn(e);
            });
    }
};

