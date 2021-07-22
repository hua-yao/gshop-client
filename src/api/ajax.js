/*
ajax请求函数模块
返回值 promise对象
*/
import axios from 'axios'

export default function ajax (url = '', data = {}, type = 'GET') {
  return new Promise(function (resolve, reject) {
    let promise
    if (type === 'GET') {
      let dataStr = ''
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      promise = axios.get(url)
    } else {
      promise = axios.post(url, data)
    }
    promise.then(function (response) {
      resolve(response.data)
    }).catch(function (error) {
      reject(error)
    })
  })
}

// let 声明的变量只在 let 命令所在的代码块 {} 内有效，在 {} 之外不能访问。
// Promise 是一个对象，从它可以获取异步操作的消息
// 通过 .then形式添加的回调函数，不论什么时候，都会被调
// then 方法接收两个函数作为参数，第一个参数是 Promise 执行成功时的回调，第二个参数是 Promise 执行失败时的回调，两个函数只会有一个被调用。
// promise判断，如果调用成功就调用resolve，饭返回数据，如果失败就会调用reject，返回一个error信息
