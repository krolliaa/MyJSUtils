/**
 * 第三种数组去重方法：利用 ES6 语法 ===> Set + 剩余参数
 * 原理：简单方便，代码简洁
 *
 * @param array 数组
 * @returns {unknown[]} 返回去重后的新数组
 */

function unique3(array) {
    return [...new Set(array)];
}
