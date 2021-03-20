import { combineReducers } from 'redux';
import cupDisplay from './cupDisplayReducer';
import cupColor from './cupColorReducer';
import teaDisplay from './teaDisplayReducer';
import teaColor from './teaColorReducer';
import tapiocaDisplay from './tapiocaDisplayReducer';
import tapiocaColor from './tapiocaColorReducer';
import globalSize from './globalSizeReducer';
import teaName from './teaNameReducer';


export default combineReducers({
    cupDisplay,
    cupColor,
    teaDisplay,
    teaColor,
    tapiocaDisplay,
    tapiocaColor,
    globalSize,
    teaName
});