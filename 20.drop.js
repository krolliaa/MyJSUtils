/**
 * 过滤左边元素 drop(array, count)
 * 过滤当前数组左边count个元素并返回剩余元素组成的新数组
 * @param array 当前数组
 * @param count 过滤个数 默认为 1
 * @returns {*[]|Int32Array|*|Uint32Array|Int8Array|Float64Array|BigUint64Array|Uint8Array|Int16Array|BigInt64Array|Float32Array|Uint8ClampedArray|Uint16Array} 返回新数组
 */

function drop(array, count = 1) {
    // 若当前数组为空或者 count 不符合规则即返回 []
    if (array.length === 0 || count > array.length) return [];
    return array.filter((item, index) => index >= count);
}


/**
 * 过滤右边元素 dropRight(array, count)
 * 过滤当前数组右边count个元素并返回剩余元素组成的新数组
 * @param array 当前数组
 * @param count 过滤个数 默认为 1
 * @returns {*[]|Int32Array|*|Uint32Array|Int8Array|Float64Array|BigUint64Array|Uint8Array|Int16Array|BigInt64Array|Float32Array|Uint8ClampedArray|Uint16Array} 返回新数组
 */

function dropRight(array, count = 1) {
    // 若当前数组为空或者 count 不符合规则即返回 []
    if (array.length === 0 || count > array.length) return [];
    return array.filter((item, index) => index < array.length - count);
}
