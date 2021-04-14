/**
 * Array.prototype.every()
 * 若数组中每个元素都符合测试函数则返回 true，有一个不符合就返回 false
 *
 * @param array 数组
 * @param callback 测试函数
 * @returns {boolean} 返回结果为布尔值
 */

function every(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i], i)) return false;
    }
    return true;
}
