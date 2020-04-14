/**
 * 过滤特殊字符
 */
export function stripscript(s) {
    var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）&mdash;—|{}【】‘；：”“'。，、？]")
        var rs = "";
    for (var i = 0; i < s.length; i++) {
        rs = rs + s.substr(i, 1).replace(pattern, '');
    }
    return rs;
}
/**
 * 邮箱验证
 */
export function validateUsername_ex(val) {
    let reg = /^[A-Za-z0-9]+([_.][A-Za-z0-9]+)*@([A-Za-z0-9-]+.)+[A-Za-z]{2,6}$/;
    return !reg.test(val)
}
/**
 * 验证密码 至少包含 数字和英文，长度6-20!
 */
export function validatePassword_ex(val) {
    let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
    return !reg.test(val) 
}
/**
 * 验证验证码
 */
export function checkCode_ex(val) {
    let reg =/^\d{6}$/;
    return !reg.test(val) 
}