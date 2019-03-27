'use strict'

import * as d3TimeFormat from 'd3-time-format'

/** 解析日期 */
function parseDate (date) {
  let d = new Date(date)
  if (Number.isNaN(+d)) {
    d = new Date()
  }

  return d
}

/** 只保留一个日期的年、月、日 */
export function trimDate (date) {
  const d = parseDate(date)
  return new Date(d.getFullYear(), d.getMonth(), d.getDate())
}

// 预定义的日期时间格式
const completeFormat = d3TimeFormat.timeFormat('%Y-%m-%d %H:%M')
const dateFormat = d3TimeFormat.timeFormat('%Y-%m-%d')
const dateFormat2 = d3TimeFormat.timeFormat('%m/%d')
const dateFormat3 = d3TimeFormat.timeFormat('%m')
const dateFormat4 = d3TimeFormat.timeFormat('%m-%d')
const dateFormat5 = d3TimeFormat.timeFormat('%m-%d %H:%M')
const timeFormat = d3TimeFormat.timeFormat('%H:%M')

/** 格式化日期 -- 1999-09-09 09:09 */
export function formatCompleteDate (date) {
  const d = ( typeof date != 'undefined' ) ? parseDate(new Date(date.replace(/\-/g, '/'))) : parseDate(new Date()) // 兼容iphone时间戳
  // const d = parseDate(new Date(date.replace(/\-/g, '/'))) // 兼容iphone时间戳
  // const d = parseDate(date)
  return completeFormat(d) //xx-07-05
}

/** 格式化日期 -- 1999-09-09 */
export function formatDate (date) {
  const d = ( typeof date != 'undefined' ) ? parseDate(new Date(date.replace(/\-/g, '/'))) : parseDate(new Date()) // 兼容iphone时间戳
  // const d = parseDate(new Date(date.replace(/\-/g, '/'))) // 兼容iphone时间戳
  // const d = parseDate(date) 
  return dateFormat(d) //xx-07-05
}

/** 格式化日期 -- 09/09 */
export function formatDateMD (date) {
  const d = parseDate(date) 
  return dateFormat2(d)  // 07/05
}

/** 格式化日期 -- 09-09 */
export function formatDateMD2 (date) {
  const d = parseDate(date) 
  return dateFormat4(d)  // 07-05
}

/** 格式化日期 -- 09-09 09:09 */
export function formatDateMDmd (date) {
  const d = parseDate(new Date(date.replace(/\-/g, '/'))) // 兼容iphone时间戳
  // const d = parseDate(date)
  return dateFormat5(d)  // 07-05 09:09
}

/** 格式化日期 -- 09 */
export function formatDateM (date) {
  const d = parseDate(date) 
  return dateFormat3(d) //07
}

/** 格式化时间 -- 09:09 */
export function formatTime (date) {
  const d = parseDate(date)
  return timeFormat(d)
}

/** 生成用于表单绑定的 change 函数 */
export function generateChangeMethods (parent, props) {
  const result = {}
  props.forEach(prop => {
    result[prop + 'Changed'] = function (e) {
      console.log(e.detail.value)
      this[parent][prop] = e.detail.value
    }
  })
  return result
}



/** 提交表单formId的函数 */
export async function setFormId ($this,e) {
  let formId = e.detail.formId,
      formIdList = $this.$state.formId + `${formId},`

  wx.setStorageSync('formId', formIdList)
  $this.$state.formId = formIdList
  console.log(formIdList)
}


