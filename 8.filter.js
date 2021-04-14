/**
 * Array.prototype.filter()
 * 作用：返回数组中符合条件的元素所形成的新的数组
 *
 * @param array 数组
 * @param callback 回调函数
 * @returns {[]} 返回新的数组
 */

function filter(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i) && result.push(array[i]);
    }
    return result;
}
