/**
 * Array.prototype.findIndex()
 * 作用：返回数组中满足回调函数的第一个元素的下标，找不到则返回 -1
 *
 * @param array 数组
 * @param callback 回调函数
 * @returns {number} 找到返回元素下标找不到则返回 -1
 */
function findIndex(array, callback) {
    // 遍历所有元素
    for (let i = 0; i < array.length; i++) {
        // 若符合条件即返回元素下标
        if (callback(array[i], i)) return i;
    }
    // 若没有符合条件的元素返回 -1
    return -1;
}
