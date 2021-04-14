/**
 * Array.prototype.map()
 * 1. 作用：数组每个元素都将调用一次回调函数并返回一个新的数组
 * 2. 举例：[1, 2, 3, 4].map(x => x * 2) ===> [2, 4, 6, 8]
 *
 * @param array 数组
 * @param callback 回调函数
 * @returns {[]} 返回一个新的数组
 */

function map(array, callback) {
    let result = [];
    // 遍历获取每个元素，每个元素调用一次回调函数
    for (let i = 0; i < array.length; i++) {
        // 可返回下标
        result.push(callback(array[i], i));
    }
    return result;
}
