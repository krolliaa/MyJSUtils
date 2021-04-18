/**
 * 截取字符串
 * @param str
 * @param size
 * @returns {any[] | BigUint64Array | Uint8ClampedArray | Uint32Array | Blob | Int16Array | Float64Array | SharedArrayBuffer | string | Uint16Array | ArrayBuffer | Int32Array | Float32Array | BigInt64Array | Uint8Array | Int8Array}
 */

function truncate(str, size) {
    return str.slice(0, size);
}
