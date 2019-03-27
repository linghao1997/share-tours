'use strict'

import wepy from 'wepy'
import { formatDate } from '../lib/util'
import axios, { setToken } from '../lib/axios'
import { $modal, $loading } from '../lib/wepy'
import db from "../util/db"

const state = {
  code: '',
  scene: null,
  fontSize: wx.getStorageSync('font-size') || 'normal',
  fontColor: wx.getStorageSync('font-color') || 'black',
  userinfo: {},
  formId: wx.getStorageSync('formId') || '',
}

export default state
wepy.component.prototype.$state = state

export function unexceptedError (err) {
  // TODO: 上报错误
  $modal('错误', `小程序遇到了无法处理的错误，请退出再打开小程序试试。若错误持续出现，请联系我们。\n${err}`)
}

export function login () {
  return _login().catch(err => unexceptedError(err))
}

async function _login () {
  let code
  // debugger
  await $loading('正在加载...')

  if (state.code && await wepy.checkSession()) code = state.code
  else code = (await wepy.login()).code     // TODO: 错误处理
  
  const userinfo = await wepy.getUserInfo().catch(() => {})
  if (!userinfo) return false

  // 获取请求 token
  const token = (await axios.post('login', { code, userinfo })).data
  if (token.code === 0) {
    setToken(token.data)
  } else {
    throw new Error(`登录错误: ${token.message} (${token.code})`)
  }
  // 获取并储存用户信息 /wxa_user/getUserInfo
  const userinfoDetail = (await axios.get('wxa_user/getUserInfo')).data
  if (userinfoDetail.code) {
    setToken('')
    throw new Error(`无法获取用户信息: ${userinfoDetail.message} (${userinfoDetail.code})`)
  } else {
    db.Set('userType',userinfoDetail.data)
    updateUserinfo({
      ...userinfo.userInfo,
      ...userinfoDetail.data
    })
  }
  await $loading()
  return true

}

export async function updateUserinfo (userinfo) {
  const userAvatarName = (await axios.post('/wxa_user/updateUserInfo', {avatar:userinfo.avatarUrl,nickname:userinfo.nickName})).data
  userinfo.birthday = userinfo.birthday ? formatDate(userinfo.birthday) : null
  state.userinfo = userinfo
  return userinfo
}
