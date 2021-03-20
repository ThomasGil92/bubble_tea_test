import { SET_TAPIOCA_COLOR } from '../actions';

const initialState = "#404162"
export default function tapiocaColorReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TAPIOCA_COLOR:
            return action.tapiocaColor
        default:
            return state;
    }
}