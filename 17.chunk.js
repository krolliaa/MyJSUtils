/**
 * 数组分块 chunk()
 * 作用：将数组分块
 * 原理：利用一个临时数组对数组进行切割
 *
 * @param array 当前数组
 * @param size 指定的分块长度
 * @returns {[]|*[]} 返回结果为数组
 */

function chunk(array, size) {
    // 如果当前数组长度为 0 直接返回 []
    if (array.length === 0) return [];

    // 如果 size 没有指定，则默认为 0
    size = size || 0;

    // 定义返回空数组，用于返回函数执行结果
    let result = [];

    // 定义临时空数组，用于构造分块数组
    let temp = [];

    // 遍历当前数组
    array.forEach((item, index) => {
        /*
          这里有一个小细节知识：
          将 temp 空数组 push 进入 result，result 形成 ===> [ [temp] ]，
          这时 result 内部的数组指向的地址与 temp 空数组指向的地址一致，
          因此当我们直接修改 temp 空数组的值的时候将直接修改 result 数组里的值，因为指向的地址是一样的。
          如果这里 temp 的长度为 0，才 push 进 result，确保 result 只有一个 temp 且可以防止分块长度不满的情况。
        */
        if (temp.length === 0) result.push(temp);
        temp.push(item);
        // 这里 temp 指向了一个新的地址，所以不会影响到 result 数组内部
        if (temp.length === size) temp = [];
    });
    return result;
}
