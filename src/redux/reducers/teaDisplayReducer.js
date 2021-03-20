import { SET_TEA_ON, SET_TEA_OFF } from '../actions';

const initialState = true
export default function teaDisplayReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TEA_ON:
            return action.teaDisplay
        case SET_TEA_OFF:
            return action.teaDisplay
        default:
            return state;
    }
}