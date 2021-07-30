import * as ActionTypes from '../constants/ActionTypes';

const initialState = {
    isuserprofile: false,
    hasError: false,
    isLoading: false,
};

export default (state = initialState, action) => {
    const { type } = action;

    switch (type) {
        case ActionTypes.USERPROFILE:
            return action.data;
        default:
            return state
    }
}