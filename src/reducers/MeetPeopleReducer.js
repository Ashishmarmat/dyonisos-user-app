import * as ActionTypes from '../constants/ActionTypes';

const initialState = {
    ismeetpeople: false,
    hasError: false,
    isLoading: false,
};

export default (state = initialState, action) => {
    const { type } = action;

    switch (type) {
        case ActionTypes.MEETPEOPLE:
            return action.data;
        default:
            return state
    }
}