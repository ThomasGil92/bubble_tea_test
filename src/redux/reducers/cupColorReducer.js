import { SET_CUP_COLOR } from '../actions';

const initialState = "#fe8261"
export default function cupColorReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CUP_COLOR:
            return action.cupColor
        default:
            return state;
    }
}