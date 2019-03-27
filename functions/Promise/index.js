// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => new Promise((resolve, reject) => {
  // 在 1 秒后返回结果给调用方（小程序 / 其他云函数）
  setTimeout(() => {
    resolve(event.a + event.b)
  }, 1000)
})