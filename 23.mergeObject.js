/**
 * mergeObject()
 * 作用：合并多个对象，使用数组包含属性名中的多个属性值，否则单独呈现即可
 *
 * @param objs 多个对象
 * @returns {{}} 返回合并后的对象
 */

function mergeObject(...objs) {
    // 声明空对象 ===> 返回的结果
    const result = {};
    // 对 objs 数组进行遍历获取每一个对象
    objs.forEach(object => {
        // 使用 Object.keys() 对 object 对象进行遍历得到属性名数组
        // 对属性名数组使用 forEach 进行遍历
        Object.keys(object).forEach(key => {
            // 使用 hasOwnProperty 判断 result 对象里是否有 key 属性
            if (result.hasOwnProperty(key)) {
                // 如果该属性名已经存在，则往该属性里添加属性值
                // 因为合并的对象属性值要么是一个数组，要么就是一个单独的对象，根据此可以使用 concat 合并数组
                result[key] = [].concat(result[key], object[key]);
            } else {
                // 如果 result 对象没有该属性名则需要往 result 对象添加该属性及其属性值
                result[key] = object[key];
            }
        })
    })
    return result;
}
