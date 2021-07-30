import * as ActionTypes from '../constants/ActionTypes';

const initialState = {
    iscreatesponser: false,
    hasError: false,
    isLoading: false,
};

export default (state = initialState, action) => {
    const { type } = action;

    switch (type) {
        case ActionTypes.CREATESPONSER:
            return action.data;
        default:
            return state
    }
}