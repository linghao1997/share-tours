export const CONS = {
  QuesPub: 1, // 公开
  QuesNopub: 0
}
export const Gender = ['女', '男']

export const quesPopupTextDesc = {
  title: '提示',
  descContent: '三亚301需要你的录音授权才能录音哦！', // 公开
  cancelBtnText: '我知道了',
  settingBtntext: '去设置'
}

export function pullDownRefreshHide () {
  // 隐藏加载框
  wx.hideLoading()
  // 隐藏导航栏加载框
  wx.hideNavigationBarLoading()
  // 停止下拉动作
  wx.stopPullDownRefresh()
}

export function pullDownRefreshShow () {
  wx.setBackgroundColor({
    backgroundColorTop: '#30C0AE' // 顶部窗口的背景色为白色
  })
  wx.setBackgroundTextStyle({
    textStyle: 'dark' // 下拉背景字体、loading 图的样式为dark
  })
  wx.showNavigationBarLoading()
  wx.showLoading({
    mask: true,
    title: '加载中...'
  })
}
