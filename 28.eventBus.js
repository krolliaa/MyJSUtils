/**
 * 事件总线 eventBus
 * 模拟：绑定事件、触发事件、解绑事件
 * @type {{callback: {}}}
 */

const eventBus = {
    callback: {}
}

// 绑定事件
eventBus.on = function (type, callback) {
    // 判断当前 callback 属性是否存在 type，若不存在则直接传递回调函数
    // 若类型已经存在则传递已存在类型的数组中
    if (this.callback[type]) {
        this.callback[type].push(callback);
    } else {
        this.callback[type] = [callback];
    }
}

// 触发事件
eventBus.emit = function (type, data) {
    // 如果 callback 属性存在该事件类型，该事件类型内有回调函数才去执行
    if (this.callback[type] && this.callback[type].length > 0) {
        // 遍历数组去触发该事件类型的每一个回调函数
        this.callback[type].forEach(callback => {
            callback(data);
        })
    }
}

// 解绑事件
eventBus.off = function (eventName) {
    // 若有传递 type 事件类型，则清除指定事件类型否则清除全部事件类型
    if (eventName) {
        // 其实就是删除 this.callback 的 eventName 属性
        delete this.callback[eventName];
    } else {
        // 如果没有传递直接让 this.callback = {} 即可
        this.callback = {};
    }
}
