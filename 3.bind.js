/**
 * 实现 bind() 函数
 * bind() 与 call()、apply() 区别：可以改变 this 指向但不执行函数而是返回一个新的函数
 * 参数1：Fn 执行的函数
 * 参数2：obj 函数运行时 this 指向的对象
 * 参数3：...args 函数运行时的参数
 */

function bind(Fn, obj, ...args) {
    //返回一个新的函数并且传递新的函数的参数值 ...args2
    return function (...args2) {
        //这里也可以直接调用 return call(Fn, obj, ...args, ...args2)
        if (obj === undefined || obj === null) {
            obj = globalThis;
        }
        obj.temp = Fn;
        let result = obj.temp(...args, ...args2);
        delete obj.temp;
        return result;
    }
}
