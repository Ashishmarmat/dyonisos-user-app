import * as ActionTypes from '../constants/ActionTypes';

const initialState = {
    istraining: false,
    hasError: false,
    isLoading: false,
};

export default (state = initialState, action) => {
    const { type } = action;

    switch (type) {
        case ActionTypes.TRAINING:
            return action.data;
        default:
            return state
    }
}