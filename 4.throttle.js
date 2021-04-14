/**
 * 函数节流 throttle
 *
 * 1. 为什么需要函数节流 throttle：
 * (1) 一些浏览器事件如：window.mousemove、window.scroll、window.resize 等触发频率非常高，会造成界面卡顿
 * (2) 若有向后台发送请求则会频繁发送请求触发事件，给服务器造成不小且不必要的压力
 *
 * 2. 函数节流 throttle 的原理： 函数执行一次之后，在设定内的周期不会再执行第二次，直到时间超过设定内的周期才执行第二次
 *
 * 3. 应用场景： DOM元素拖拽、页面滚动、秒杀活动点击、窗口大小调整等适合平分时间作为触发事件的条件之一
 *
 * @param callback 回调函数
 * @param wait 设定的周期
 * @returns {function(...[*]=)} 返回结果为函数
 */

function throttle(callback, wait) {
    // 定义初始时间
    let start = 0;
    // 返回结果为函数
    return function (event) {
        // 接收触发当前时间
        let now = new Date();
        // 若接收触发当前时间与初始时间的差大于等于设定的周期才可执行下一次并更改初始时间
        // 若小于则不继续执行下一次直到大于等于设定的周期
        if (now - start >= wait) {
            callback.call(this, event);
            start = now;
        }
    }
}
