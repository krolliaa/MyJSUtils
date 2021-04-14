/**
 * Array.prototype.slice()
 * 作用：返回一个由 begin 和 end 决定的新的数组
 *
 * @param array 数组
 * @param begin 起始下标(包含)【可选参数】
 * @param end 结束下标（不包含）【可选参数】
 * @returns {[]|*[]} 返回结果为数组
 */

function slice(array, begin, end) {
    // 数组为空返回 []
    if (array.length === 0) return [];

    // begin 参数是可选的，默认为 0
    begin = begin || 0;

    // begin大于等于最大下标返回 []
    if (begin >= array.length) return [];

    // end 参数是可选的，默认为数组长度
    end = end || array.length;

    // end 不大于 begin 返回 []
    if (end <= begin) return [];

    // end 大于最大下标返回 []
    if (end > array.length) return [];

    const result = [];
    for (let index = begin; index < end; index++) {
        result.push(array[index]);
    }
    return result;
}
