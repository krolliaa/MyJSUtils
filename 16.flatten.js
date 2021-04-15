/**
 * 扁平化数组 flatten
 * 作用：将嵌套的数组变成一维数组
 * 原理：递归 + concat()
 *
 * @param array 数组
 * @returns {[]} 返回扁平化数组
 */

// 1. 纯递归扁平化数组
function flatten1(array) {
    let result = [];
    array.forEach(item => {
        // 这里不能直接使用剩余参数转换成参数序列，因为数组嵌套可能有多环
        if (Array.isArray(item)) {
            // 使用递归并且连接返回的数组
            result = result.concat(flatten1(item));
        } else {
            // 如果是元素，连接到数组中
            result = result.concat(item);
        }
    })
    // 递归出口：返回数组
    return result;
}

// 2. 剩余参数 + some() + concat()
function flatten2(array) {
    // 将最外层的元素和内嵌第一层数组连接起来
    let result = [].concat(...array);
    // 遍历获取 result 数组内部嵌套的的数组并进行连接, 使用 some() 内有数组立即返回 true
    while (result.some(item => Array.isArray(item))) {
        result = [].concat(...result);
    }
    return result;
}
