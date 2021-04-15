/**
 * 删除指定元素 pull()【参数为数组和单独的元素】 || pullAll()【参数均为数组】
 * 作用：删除数组中与 value 相同的元素【改变原有数组】并返回这些删除元素所组成的数组
 * 原理：for() + splice() + push()
 *
 * @param array
 * @param values
 * @returns {[]}
 */

function pull(array, ...values) {
    // 声明空数组，用于保存删除的元素
    let result = [];
    // 遍历 array 数组，由于删除元素的原因这里不能用 forEach，因为无法获取最后一个元素
    for (let index = 0; index < array.length; index++) {
        // 如果数组元素在 values 中有，说明该元素需要被删除
        // 这里使用 values.includes() 也可以
        if (values.indexOf(array[index]) !== -1) {
            // 先将要删除的元素保存到 result 数组中
            result.push(array[index]);
            // 删除 array 中原数组该元素
            array.splice(index, 1);
            // 将索引递减，否则将跳过删除前的下一个元素
            index--;
        }
    }
    return result;
}

function pullAll(array, values) {
    return pull(array, ...values);
}
