export const SET_CUP_ON = "SET_CUP_ON";
export const SET_CUP_OFF = "SET_CUP_OFF";
export const SET_TEA_OFF = "SET_TEA_OFF";
export const SET_TEA_ON = "SET_TEA_ON";
export const SET_TAPIOCA_ON = "SET_TAPIOCA_ON";
export const SET_TAPIOCA_OFF = "SET_TAPIOCA_OFF";
export const SET_CUP_COLOR = "SET_CUP_COLOR";
export const SET_TEA_COLOR = "SET_TEA_COLOR";
export const SET_TAPIOCA_COLOR = "SET_TAPIOCA_COLOR";
export const SET_SIZE = "SET_SIZE";
export const SET_TEA_NAME = "SET_TEA_NAME";

export function setCupOn() {
  return function (dispatch) {
    dispatch({ type: SET_CUP_ON, cupDisplay: true });
  };
}
export function setCupOff() {
  return function (dispatch) {
    dispatch({ type: SET_CUP_OFF, cupDisplay: false });
  };
};
export function setCupColor(newColor) {
  return function (dispatch) {
    dispatch({ type: SET_CUP_COLOR, cupColor: newColor });
  };
};

export function setTeaOn() {
  return function (dispatch) {
    dispatch({ type: SET_TEA_ON, teaDisplay: true });
  };
}
export function setTeaOff() {
  return function (dispatch) {
    dispatch({ type: SET_TEA_OFF, teaDisplay: false });
  };
};
export function setTeaColor(newColor) {
  return function (dispatch) {
    dispatch({ type: SET_TEA_COLOR, teaColor: newColor });
  };
};

export function setTapiocaOn() {
  return function (dispatch) {
    dispatch({ type: SET_TAPIOCA_ON, tapiocaDisplay: true });
  };
}
export function setTapiocaOff() {
  return function (dispatch) {
    dispatch({ type: SET_TAPIOCA_OFF, tapiocaDisplay: false });
  };
};
export function setTapiocaColor(newColor) {
  return function (dispatch) {
    dispatch({ type: SET_TAPIOCA_COLOR, tapiocaColor: newColor });
  };
};

/* GLOBAL SIZE */
export function setGlobalSize(height) {
  return function (dispatch) {
    dispatch({ type: SET_SIZE, globalSize: height });
  };
};

/* TEA NAME */
export function setTeaName(name) {
  return function (dispatch) {
    dispatch({ type: SET_TEA_NAME, teaName: name });
  };
};
