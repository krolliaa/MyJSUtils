/**
 * 数组取差 difference()
 * 作用：得到当前数组即 arr1 数组中所有不在数组 arr2 中的元素组成的新的数组并返回
 *
 * @param arr1 第一个数组
 * @param arr2 第二个数组
 * @returns {any[]|BigUint64Array|Uint8ClampedArray|Uint32Array|Blob|Int16Array|Float64Array|SharedArrayBuffer|string|Uint16Array|ArrayBuffer|Int32Array|Float32Array|BigInt64Array|Uint8Array|Int8Array|*} 返回新数组
 */

// 利用 ES6 新特性，给 arr2 赋予初始值
function difference(arr1, arr2 = []) {
    if (arr1.length === 0) return [];
    // 这里不能返回 arr1 数组，因为如果返回 arr1 ，假设接收的变量名为 arr3 ，
    // 那么 arr1 和 arr3 指向的地址为同一个，此时修改 arr3 数组中的值将改变 arr1 原数组
    // 这个函数返回的是一个全新的数组
    if (arr2.length === 0) return arr1.slice();
    let result = arr1.filter(item => !arr2.includes(item));
    return result;
}
