/**
 * 实现 apply() 函数
 * 作用：可以改变运行时的 this 值，并且得到函数运行的执行结果
 * apply() 与 call() 的区别：传入的参数列表形式不同
 * 参数1：Fn 执行的函数
 * 参数2：obj 函数运行时 this 指向的对象
 * 参数3：args 函数运行时的参数 ===> 数组
 */

function apply(Fn, obj, args) {
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
