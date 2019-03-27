const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
exports.main = async (event, context) => {
  try {
    return await db.collection(event.collect).where({
      id:event.id
    })
      .get()
  } catch (e) {
    console.error(e)
  }
}