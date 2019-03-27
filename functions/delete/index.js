// 云函数入口文件
const cloud = require('wx-server-sdk')
const db = cloud.database()
const _ = db.command

exports.main = async (event, context) => {
  let type = event.type
  try {
    return await db.collection(event.databaseName).where({
      type: event.condition
    }).remove()
  } catch (e) {
    console.error(e)
  }
}