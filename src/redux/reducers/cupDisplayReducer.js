import { SET_CUP_ON, SET_CUP_OFF } from '../actions';

const initialState = true
export default function cupDisplayReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CUP_ON:
            return action.cupDisplay
        case SET_CUP_OFF:
            return action.cupDisplay
        default:
            return state;
    }
}