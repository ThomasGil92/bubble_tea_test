import { SET_TAPIOCA_ON, SET_TAPIOCA_OFF } from '../actions';

const initialState = true
export default function tapiocaDisplayReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TAPIOCA_ON:
            return action.tapiocaDisplay
        case SET_TAPIOCA_OFF:
            return action.tapiocaDisplay
        default:
            return state;
    }
}