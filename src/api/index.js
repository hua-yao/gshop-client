/**/

import ajax from './ajax.js'

export const reqAddress = (geohash) => ajax(`/position/${geohash}`)
export const reqFoodTypes = () => ajax(`/index_category`)
export const reqShops = (longitude, latitude) => ajax(`/shops`, {longitude, latitude})
export const reqSearchShops = (keyword, geohash) => ajax(`/search_shops`, {keyword, geohash})
export const reqCaptcha = () => ajax(`/reqCaptcha`)
export const reqLoginPwd = () => ajax(`/login_pwd`, '', 'POST')
export const reqSendCode = (phone) => ajax(`/position`, phone)
export const reqLoginSms = () => ajax(`/login_sms`, '', 'POST')
export const reqUserInfo = () => ajax(`/userinfo`)
export const reqLogout = () => ajax(`/logout`)

// let const var之间的区别
// export const, export deaflte, export 和import的对比
// 参数类型 params, quers ?号前面或者后面
// 实现某个功能需要的库，需要的方法，需要的步骤，还有设计结构
