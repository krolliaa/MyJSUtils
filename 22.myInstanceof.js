/**
 * myInstanceof()
 * 作用：判断 obj 是否是 Type 类型的实例
 *
 * @param obj 传递对象
 * @param Type 被比对的类型
 * @returns {boolean} 返回结果为布尔值
 */

function myInstanceof(obj, Type) {
    /*
        要想弄明白 instanceof() 的原理，需要深入了解原型和原型链：
        每个对象都有 __proto__ 属性，也叫隐式原型，指向构造函数原型对象 prototype，
        比如这里有个实例化对象：new Person()，它具有 __Proto__ 隐式原型，指向 Person.prototype 原型对象
        这个原型对象也是对象，也具有 __proto__ 属性，那它又指向谁呢？指向构造函数的原型对象，
        谁是它的构造函数？ ===> Object ，所以指向的就是 Object.prototype
        那 Object.prototype 也有 __proto__ 隐式原型，它又指向谁呢？ ===> null 这就形成了原型链
        所以我们要想知道 obj 的对象类型是不是 Type，我们只要看它的原型链上有没有 Type，
        在 null 之前找到就表明 obj 属于 Type 类型，返回 true，若最后找到的是 null 表示没有就返回 false
     */

    // 获取 obj 指向的隐式原型，其指向构造函数的 prototype
    let objProto = obj.__proto__;

    // 1. 如果 objProto 指向的就是 Type.prototype 表明比对类型成功，返回 true
    // 2. 没有的话，我们就让 objProto 指向它所指向的 prototype 的隐式原型，然后再重复上一步操作
    // 因为重复，所以这里我们给个循环，只要 objProto 指向的不是 null 表明还有下一环
    while (objProto !== null) {
        if (objProto === Type.prototype) return true;
        objProto = objProto.__proto__;
    }

    // 若函数执行到这一步说明 objProto 指向 null，表示类型不匹配返回 false
    return false;
}
