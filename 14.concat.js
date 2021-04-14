/**
 * Array.prototype.concat()
 * 作用：将当前数组与多个数组或值进行合并形成一个新的数组进行返回
 *
 * @param array 数组
 * @param args 参数
 * @returns {*[]} 返回新数组
 */
function concat(array, ...args) {
    // 定义一个返回数组
    const result = [...array];
    // 遍历传递过来的参数
    args.forEach(item => {
        // 如果传递的是一个数组，使用剩余参数将数组转化为用逗号分隔的参数序列，添加到返回数组中
        if (Array.isArray(item)) {
            result.push(...item);
        } else {
            // 如果传递的就是一个数据，直接添加到返回数组中
            result.push(item);
        }
    })
    return result;
}
