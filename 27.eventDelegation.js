/**
 * 模拟事件委托
 *
 * @param el 父元素选择器
 * @param type 事件类型
 * @param fn 回调函数
 * @param selector 子元素选择器
 */

function addEventListener(el, type, fn, selector) {
    // 如果传递过来的 el 是字符串，我们获取元素对象
    if (typeof el === 'string') el = document.querySelector(el);
    // 事件绑定 ===> 考虑两种情况即是否有传递子元素选择器
    // 1. 如果没有传递子元素选择器相当于事件委托即给父元素绑定事件
    if (!selector) {
        el.addEventListener(type, fn);
    } else {
        // 2. 如果传递了子元素选择器相当于给子元素进行绑定事件，如果不是该子元素就没有绑定事件
        el.addEventListener(type, function (e) {
            const target = e.target;
            if (target.matches(selector)) {
                // 若触发的子元素与传递的子元素相匹配则触发回调函数
                // 注意这里的 this 指向，this 应该指向触发事件的元素
                fn.call(target, e);
            }
            // 若触发的子元素与传递的子元素不匹配则不用做任何操作
        })

    }
}
