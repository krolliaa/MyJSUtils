/**
 * Array.prototype.map()
 * 1. 作用：返回该数组每个元素调用一次提供的函数形成一个新的数组
 * 2. 举例：[1, 2, 3, 4].map(x => x * 2) ===> [2, 4, 6, 8]
 */

function map(array, callback) {
    let result = [];
    // 遍历获取每个元素，每个元素调用一次回调函数
    for (let i = 0; i < array.length; i++) {
        // 允许返回下标
        result.push(callback(array[i], i));
    }
    return result;
}
