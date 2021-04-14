/**
 * 1. 作用：函数防抖和函数节流一样，都是为了防止界面卡顿、给服务器造成不必要的请求压力
 * 2. 原理：在规定时间内，只让最后一次触发事件生效前面的都不生效
 */

function debounce(callback, time) {
    let timerId = null;
    return function (e) {
        if (timerId !== null) {
            // 清空定时器
            window.clearTimeout(timerId);
        }
        timerId = window.setTimeout(() => {
            // 启动定时器
            callback.call(this, e);
            // 如果不加这行代码，效果也是一样的
            // 加这行代码的好处：减少无用代码的执行，保证代码逻辑严谨性
            // 举例：按下 A 等待 1s，再按下 B，这时定时器并不为 null，会执行清除定时器，此时执行的就是无意义的代码
            timerId = null;
        }, time);
    }
}
