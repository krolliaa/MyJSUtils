/**
 * Function.prototype.call()
 * 作用：可改变函数运行时的 this 指向并得到函数执行结果
 *
 * @param Fn 要执行的函数
 * @param obj 函数运行时 this 指向对象
 * @param args 函数运行时需要的参数
 * @returns {*} 返回 Fn 函数执行结果
 */

function call(Fn, obj, ...args) {
    // 0. 根据 MDN 文档：如果这个函数处于非严格模式下，则当 obj 指定为 null 或 undefined 时会自动替换为指向全局对象 ===> globalThis
    // 关于 globalThis 详见：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/globalThis
    if (obj === undefined || obj === null) {
        obj = globalThis;
    }
    // 1.如何改变函数的 this 的指向为 obj？ ===> 通过临时方法 temp
    obj.temp = Fn;
    let result = obj.temp(...args);
    // 2.删除 obj 对象上的临时方法 temp ===> 借助 delete 关键字
    delete obj.temp;
    // 3.返回执行结果 ===> return
    return result;
}
