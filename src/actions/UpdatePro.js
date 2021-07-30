import * as ActionTypes from '../constants/ActionTypes';
import { BaseUrl } from '../constants/api';
import {Alert, AsyncStorage} from 'react-native';
import { Actions } from 'react-native-router-flux';

export function uploadImageRes(data) {
    return {
        type: ActionTypes.UPLOAD_IMAGE,
        data
    }
};
export function uploadImageApi(data) {
    console.log('uploadImageApi',data)
    var getFilename = data.uri.split("/");
    var imgName = getFilename[getFilename.length - 1];
    console.log("imgName",imgName);
    var imageData = new FormData();
    imageData.append('photo', {
        uri: data.uri,
        type: data.type,
        name: imgName
    });  
     console.log("imageData",imageData)
    return async (dispatch) => {
        await fetch(`http://138.68.103.248:3000/api/uploadImage`, {
            method: 'POST',
            body: imageData,
             headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
            .then((res) => res.json())
            .then(res => {
                console.log('res',res)
                if (res.success === "True")  {
                    dispatch(uploadImageRes(res));
                } else {
                    Alert.alert(res.message);
                    dispatch(uploadImageRes(res));
                }
            })
            .catch((e) => {
                console.log("error",e);
            });
    }
};

export function updateprofileRes(data) {
    return {
        type: ActionTypes.UPDATEPROFILE,
        data
    }
};
export function updateprofileAPI(data) {
    console.log("updateprofileAPI")
    return (dispatch) => {
        fetch(BaseUrl + `/api/updateUserProfile`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then((res) => res.json())
            .then(res => {
                console.log(res)
                if (res.status === "success") {
                    dispatch(updateprofileRes(res));
                //   Actions.Login()
            } else {
                    dispatch(updateprofileRes(res));
                }
            })
            .catch((e) => {
                //  console.warn(e);
            });
    }
};
