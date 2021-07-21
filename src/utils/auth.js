import Cookies from 'js-cookie'

// 管理员信息
const USER_INFO = 'user_info'
const ACCOUNT='account'

// 获取基本信息
function getUserInfo() {
    return Cookies.getJSON(USER_INFO) || {}
}
// 存储基本信息
function setUserInfo(info) {
    //   Cookies.set('token', info.token)
    return Cookies.set(USER_INFO, info, {
        expires: new Date(new Date().getTime() + 9 * 60 * 60 * 1000)
    })
}
// 退出登录，清除所有登录信息
function logout() {
    Cookies.remove('token')
    return Cookies.remove(USER_INFO)
}
//储存登录信息
function setAccount(info) {
    return Cookies.set(ACCOUNT, info, {
        expires: new Date(new Date().getTime() + 9 * 60 * 60 * 1000)
    })
}
//获取登录信息
function getAccount() {
    
    return Cookies.getJSON(ACCOUNT) || {}
}
export {
    getUserInfo,
    setUserInfo,
    logout,
    setAccount,
    getAccount
}
