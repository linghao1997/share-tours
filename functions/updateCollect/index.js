const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
exports.main = async (event, context) => {
  try {
    return await db.collection(event.database).doc(event._id).update({
      data:{
        collect: event.collectArr
      }
    })
  } catch (e) {
    console.error(e)
  }
}