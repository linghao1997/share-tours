'use strict'

import axios from 'axios'
import wepyAxiosAdapter from 'wepy-plugin-axios/dist/adapter.js'

const instance = axios.create({
  adapter: wepyAxiosAdapter(axios),
  baseURL: 'https://www.syshsoft.com/zyp/',
  // baseURL: 'https://www.syshsoft.com/ch/api/wxa/',
  // baseURL: 'https://proxy.q18idc.com',
  headers: {
    'Authorization': undefined
    // 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
  },
  validateStatus: () => true
})

export default instance

let token = ''
export function getToken () { return token }
export function setToken (newToken) {
  token = newToken
  instance.defaults.headers['Authorization'] = 'Bearer ' + token
  instance.defaults.timeout = 1000
}
