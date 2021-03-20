import { SET_SIZE } from '../actions';

const initialState = 350
export default function globalSizeReducer(state = initialState, action) {
    switch (action.type) {
        case SET_SIZE:
            return action.globalSize
        default:
            return state;
    }
}