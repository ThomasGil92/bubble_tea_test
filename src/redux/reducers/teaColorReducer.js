import { SET_TEA_COLOR } from '../actions';

const initialState = "#F99C7B"
export default function teaColorReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TEA_COLOR:
            return action.teaColor
        default:
            return state;
    }
}