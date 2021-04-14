/**
 * 第一种数组去重方法：利用 forEach() 和 indexOf()
 * 原理：双重遍历，效率较低
 *
 * @param array 数组
 * @returns {[]} 返回去重后的新数组
 */

function unique1(array) {
    let result = [];
    // 遍历当前数组的元素
    array.forEach((value, index) => {
        // 如果新数组里面找不到当前元素则将该元素存入新数组
        if (result.indexOf(value) === -1) result.push(value);
    })
    // 返回新数组
    return result;
}
