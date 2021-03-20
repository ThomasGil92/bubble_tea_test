import { SET_TEA_NAME } from '../actions';

const initialState = "Bubble Tea"
export default function teaNameReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TEA_NAME:
            return action.teaName
        default:
            return state;
    }
}