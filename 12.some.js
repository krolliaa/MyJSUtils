/**
 * Array.prototype.some()
 * 若数组中有一个元素符合测试函数就立即返回 true，若元素全不符合测试函数返回 false
 *
 * @param array 数组
 * @param callback 测试函数
 * @returns {boolean} 返回结果为布尔值
 */

function some(array, callback) {
    for (let i = 0; i < array.length; i++) {
        // 若有一个元素符合条件就立即返回 true
        if (callback(array[i], i)) return true;
    }
    // 若元素全都不符合条件返回 false
    return false;
}
