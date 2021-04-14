/**
 * Array.prototype.reduce()
 *
 * 作用： 数组中的每个元素都将执行一次回调函数，
 *       前一个元素的执行结果将保存到一个暂存器传递给下一个回调函数，
 *       最后返回最后一次调用回调函数返回的结果【可传递初始值】
 *
 * @param array 数组
 * @param callback 回调函数
 * @param initValue 初始值
 * @returns {*} 返回结果
 */

function reduce(array, callback, initValue) {
    // 获取初始自
    let result = initValue;
    for (let i = 0; i < array.length; i++) {
        // 上一次回调函数的结果传递给下一次回调函数
        result = callback(result, array[i]);
    }
    // 返回结果
    return result;
}
