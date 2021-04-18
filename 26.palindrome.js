/**
 * 判断字符串是否为回文
 * @param str 需要判断的字符串
 * @returns {boolean} 返回布尔值
 */

function palindrome(str) {
    return reverseString(str) === str ? true : false;
}
