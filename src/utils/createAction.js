/**
 * action的创建
 * @param {string} type - action的类别
 * @param {string[]} propNames - 附带的参数
 */

const createAction = (type, propNames) => (...args) => {
    let action = { type };

    propNames.forEach((element, i) => {
        action[element] = args[i]
    });

    return action;
}

export default createAction;