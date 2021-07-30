import * as ActionTypes from '../constants/ActionTypes';

const initialState = {
    isupdateprofile: false,
    hasError: false,
    isLoading: false,
};

export default (state = initialState, action) => {
    const { type } = action;

    switch (type) {
        case ActionTypes.UPDATEPROFILE:
            return action.data;
        default:
            return state
    }
}