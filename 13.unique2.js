/**
 * 第二种数组去重方法：利用 forEach() 和空对象容器
 * 原理：单重遍历，效率较高
 *
 * @param array 数组
 * @returns {[]} 返回去重后的新数组
 */

function unique2(array) {
    // 定义一个空数组
    const result = [];
    // 定义一个空对象，用于过滤重复值
    const obj = {};
    // 遍历数组
    array.forEach(item => {
        // 如果 obj[item] 为 undefined 说明该元素是第一次出现
        if (obj[item] === undefined) {
            // 更新 obj[item] 属性值
            obj[item] = true;
            // 添加元素至 result 数组
            result.push(item);
        }
    })
    // 返回新数组
    return result;
}
