let prefix = "myProject.dev"

const Set = (key, value) => {
  wx.setStorageSync(prefix + key, value)
}

const Get = (key) => {
  return wx.getStorageSync(prefix + key)
}
const Del = (key) => {
  wx.removeStorageSync(prefix + key)
}
module.exports = {
  Set,
  Get,
  Del,
}
