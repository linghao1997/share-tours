const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
exports.main = async (event, context) => {
  try {
    return await db.collection(event.database).where({
      _openid: event.userOpenId
    })
      .get()
  } catch (e) {
    console.error(e)
  }
}