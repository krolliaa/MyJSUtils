/**
 * 第一种浅拷贝方式：使用 ES6 剩余参数
 * 第二种浅拷贝方式：使用 ES5 遍历循环
 * 浅拷贝和直接赋值的区别就在于：浅拷贝不影响原对象的基本数据类型，但是直接赋值会影响
 *
 * @param target
 * @returns {*[]|*}
 */

function clone1(target) {
    // 如果目标是对象且不是 null 则可以进行拷贝，否则直接返回
    if (target !== null && typeof (target) === 'object') {
        // 如果是数组
        if (Array.isArray(target)) return [...target];
        // 如果是对象
        else return {...target};
    }
    return target;
}

function clone2(target) {
    if (target !== null && typeof (target) === 'object') {
        // 如果 target 是数组返回数组类型，如果 target 是对象返回对象类型
        const result = Array.isArray(target) ? [] : {};
        // target 是数组可以使用 forEach，是对象可以使用 Object.keys() 这里使用通用的 for...in
        for (let key in target) {
            // 只拷贝 target 自身具有的属性，其它属性不拷贝
            if (target.hasOwnProperty(key)) {
                result[key] = target[key];
            }
        }
        return result;
    }
    // 如果不是引用数据类型就直接返回目标
    return target;
}
