/**
 * @param {array} funcList - function的列表
 * @param {object} target - this对象
 */

const bindFunction = (funcList, target) => {
    funcList.forEach((item) => { target[item] = target[item].bind(target) })
}

export default bindFunction;