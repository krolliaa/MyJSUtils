/**
 * Array.prototype.find()
 * 作用：返回数组中满足回调函数的第一个元素的值，否则返回 undefined
 *
 * @param array 数组
 * @param callback 回调函数
 * @returns {undefined|*} 找到返回元素值否则返回 undefined
 */
function find(array, callback) {
    // 遍历所有元素
    for (let i = 0; i < array.length; i++) {
        // 若符合条件即返回元素值
        if (callback(array[i], i)) return array[i];
    }
    // 若没有符合条件的元素返回 undefined
    return undefined;
}
