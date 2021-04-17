/**
 * 第一种深拷贝方式：利用 JSON 深拷贝
 * 导致问题一：无法拷贝函数属性
 * 导致问题二：循环引用会出错 ===> 具体见测试
 * @param target 被深拷贝对象
 * @returns {any} 返回深拷贝对象
 */
function deepClone1(target) {
    return JSON.parse(JSON.stringify(target));
}


/**
 * 第一种深拷贝方式：递归
 * 解决了 JSON 深拷贝的函数属性会丢失的问题，但仍然无法解决循环引用问题
 * @param target 被深拷贝对象
 * @returns {*} 返回深拷贝对象
 */
function deepClone2(target) {
    // 如果 target 是对象则进行遍历
    if (target !== null && typeof target === 'object') {
        const result = Array.isArray(target) ? [] : {};
        // 遍历 target 如果是基本数据类型直接返回并且是 target 自身属性才拷贝
        for (let key in target) {
            if (target.hasOwnProperty(key)) {
                result[key] = deepClone2(target[key]);
            }
        }
        return result;
    }
    // 如果 target 不是对象则直接返回
    return target;
}

/**
 * 第三种深拷贝方式： 通过 map() 解决循环引用问题
 * @param target 目标对象
 * @param map map 键值对
 * @returns {any}
 */
function deepClone3(target, map = new Map()) {
    if (target !== null && typeof target === 'object') {
        // 从缓存容器读取克隆对象
        const cache = map.get(target);
        // 如果存在即返回克隆对象，防止出现递归死循环导致堆栈溢出
        if (cache) return cache;
        const result = Array.isArray(target) ? [] : {};
        // 将对象缓存到 map 中
        map.set(target, result);
        for (let key in target) {
            if (target.hasOwnProperty(key)) {
                result[key] = deepClone3(target[key], map);
            }
        }
        return result;
    }
    return target;
}

/**
 * 第三种深拷贝方式：终极版本
 * 1. 不仅解决了JSON深拷贝函数丢失和循环引用问题
 * 2. 对第三个版本的深拷贝进行了性能上的优化，因为 forin 循环不止会遍历元素自身的属性，也会遍历原型的属性
 *
 * @param target
 * @param map
 * @returns {any}
 */

function deepClone4(target, map = new Map()) {

    if (target !== null && typeof target === 'object') {
        // 如果 map 里面有 target 键就直接返回，避免循环引用+递归造成的堆栈溢出
        const cloneCache = map.get(target);
        if (cloneCache) return cloneCache;
        // 判断是否是数组，因为这里 result 要判断一次， target 要判断一次所以直接抽取出来
        const isArray = Array.isArray(target);
        const result = isArray ? [] : {};
        // 为了解决 forin 也会遍历原型的问题，我们这里分开遍历
        map.set(target, result);
        if (isArray) {
            // 如果是数组使用 forEach 遍历
            target.forEach(key => {
                result[key] = deepClone4(target[key], map);
            })
        } else {
            // 如果是对象使用 Object.keys().forEach 遍历
            Object.keys(target).forEach(key => {
                result[key] = deepClone4(target[key], map);
            })
        }
    }
    return target;
}

