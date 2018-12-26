/**
 * @param {any} defaultState - state的默认值
 * @param {Object} hanlders - 处理每一个接收到的action的function
 */

let createReducer = (defaultState, hanlders = {}) => {
    let actionTypes = Object.keys(hanlders);
    let len = actionTypes.length;
    return function reducer(state = defaultState, action) {
        for (var i = 0; i < len; i++) {
            var actionType = actionTypes[i];
            if (actionType === action.type) {
                return hanlders[actionType](state, action);
            }
        }
        return state;
    }
}

export default createReducer;