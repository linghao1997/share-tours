
import { trimDate, formatDate, formatTime, formatCompleteDate, formatDateMD, formatDateM, formatDateMD2, formatDateMDmd } from './util'

// --- 血压 & 脉搏 start ---
export function pressureGrade (systolic) {  // 血压等级
  if ( systolic >= 160 ) {
    return "血压过高"
  }
  if ( systolic < 159 && systolic >= 140 ) {
    return "血压偏高"
  }
  if ( systolic < 139 && systolic >= 60 ) {
    return "血压正常"
  }
  if ( systolic < 59 ) {
    return "血压偏低"
  }
}
export function pressureGradeColor (systolic) { // 血压等级颜色
  if ( systolic >= 160 ) {
    return "high-pressure"
  }
  if ( systolic < 159 && systolic >= 140 ) {
    return "slightly-pressure"
  }
  if ( systolic < 139 && systolic >= 60 ) {
    return "normal-pressure"
  }
  if ( systolic < 59 ) {
    return "low-pressure"
  }
}
export function formatSystolicList (data) {
  var fData = [{month: '', summary: {}, data: []}],
      a = 0

  fData[a].month = formatDateM(data[0].measuretime)
  fData[a].data = [{
    id: data[0].id,                                                  // id
    systolic: data[0].systolic,                                   // 收缩压
    diastolic: data[0].diastolic,                                 // 舒张压
    heart_rate: data[0].heart_rate,                                 // 脉搏
    device_no: null,                                             // 设备编号
    source: '',                                                  // 数据来源
    measuretime: formatCompleteDate(data[0].measuretime),        // 测量日期
    measuretimetxt: formatDateMDmd(data[0].measuretime), // 测量日期-用于显示
    measurehourtxt: formatDateMDmd(data[0].measuretime).substring(6, data[0].measuretime.length), // 测量日期-用于显示 00:00
    comment: data[0].comment,                                       // 备注
    month: formatDateM(data[0].measuretime),                     // 月份标识
    grade: pressureGrade(data[0].systolic),                     // 血压等级
    gradeColor: pressureGradeColor(data[0].systolic)         // 血压等级颜色
  }]
  for (var i = 1; i < data.length; i++) { // 从 i=1 开始比较
    if (fData[a].month === formatDateM(data[i].measuretime)) { // 判断是否是同月份
      var fDataObject = {id: null, systolic: 0, diastolic: 0, heart_rate: 0, device_no: null, source: '数据来源', measuretime: '', measuretimetxt: '', comment: '', month: '', grade: '', gradeColor: ''}

      fDataObject.id = data[i].id
      fDataObject.systolic = data[i].systolic
      fDataObject.diastolic = data[i].diastolic
      fDataObject.heart_rate = data[i].heart_rate
      fDataObject.device_no = null   // data[i].device_no
      fDataObject.source = '' // data[i].source
      fDataObject.measuretime = formatCompleteDate(data[i].measuretime)
      fDataObject.measuretimetxt = formatDateMDmd(data[i].measuretime)
      fDataObject.measurehourtxt = formatDateMDmd(data[0].measuretime).substring(6, data[0].measuretime.length) // 测量日期-用于显示 00:00
      fDataObject.comment = data[0].comment
      fDataObject.month = formatDateM(data[i].measuretime)
      fDataObject.grade = pressureGrade(fDataObject.systolic) // 血压等级
      fDataObject.gradeColor = pressureGradeColor(fDataObject.systolic) // 血压等级颜色
      // 添加进数组
      fData[a].data.push(fDataObject)
    } else { // 新建月份  添加新数组  添加新属性和值
      fData.push({month: '', summary: {}, data: []})
      fData[++a].month = formatDateM(data[i].measuretime)
      fData[a].data = [{
        id: data[i].id,
        systolic: data[i].systolic,
        diastolic: data[i].diastolic,
        heart_rate: data[i].heart_rate,
        device_no: null,
        source: '',
        measuretime: formatCompleteDate(data[i].measuretime),
        measuretimetxt: formatDateMDmd(data[i].measuretime),
        measurehourtxt: formatDateMDmd(data[0].measuretime).substring(6, data[0].measuretime.length), // 测量日期-用于显示 00:00
        comment: data[i].comment,
        month: formatDateM(data[i].measuretime),
        grade: pressureGrade(data[i].systolic), // 血压等级
        gradeColor: pressureGradeColor(data[i].systolic) // 血压等级颜色
      }]
    }
  }
  // 计算-总结summary
  for (var i = 0; i < fData.length; i++) {
    var summary = {  // 每次重新声明定义
      systolicmax: fData[i].data[0].systolic,
      diastolicmax: fData[i].data[0].diastolic,
      heart_ratemax: fData[i].data[0].heart_rate,

      systolicmin: fData[i].data[0].systolic,
      diastolicmin: fData[i].data[0].diastolic,
      heart_ratemin: fData[i].data[0].heart_rate,

      systolicaverage: 0,
      diastolicaverage: 0,
      heart_rateaverage: 0
    }

    for (var j = 0; j < fData[i].data.length; j++) {
      summary.systolicmax = Math.max(summary.systolicmax, fData[i].data[j].systolic)        // 最高
      summary.diastolicmax = Math.max(summary.diastolicmax, fData[i].data[j].diastolic)     // 最高
      summary.heart_ratemax = Math.max(summary.heart_ratemax, fData[i].data[j].heart_rate)  // 最高

      summary.systolicmin = Math.min(summary.systolicmin, fData[i].data[j].systolic)        // 最低
      summary.diastolicmin = Math.min(summary.diastolicmin, fData[i].data[j].diastolic)     // 最低
      summary.heart_ratemin = Math.min(summary.heart_ratemin, fData[i].data[j].heart_rate)  // 最低

      summary.systolicaverage += fData[i].data[j].systolic                                  // 总和
      summary.diastolicaverage += fData[i].data[j].diastolic                                // 总和
      summary.heart_rateaverage += fData[i].data[j].heart_rate                              // 总和
    }

    summary.systolicaverage = Math.round(summary.systolicaverage / fData[i].data.length)    // 平均
    summary.diastolicaverage = Math.round(summary.diastolicaverage / fData[i].data.length)  // 平均
    summary.heart_rateaverage = Math.round(summary.heart_rateaverage / fData[i].data.length)// 平均

    fData[i].summary = summary
  }
  console.log(fData)
  return fData
}
// --- 血压 end ---


// --- 体重 start ---
export function formatWeightList (data) {    // 格式化体重数据--用于列表显示  **传入的数据格式需要是按日期倒序排序 (如：7月、6月、5月)
  var fData = [{month: '', summary: {}, data: []}],
    a = 0
  fData[a].month = formatDateM(data[0].measuretime)
  fData[a].data = [{
    id: data[0].id,                                      // 体重id
    weight: data[0].weight,                              // 体重
    source: '',                                          // 数据来源
    measuretime: formatDate(data[0].measuretime),        // 测量日期
    measuretimetxt: formatDateMDmd(data[0].measuretime).substring(0, 5), // 测量日期-用于显示 (兼容iphone)
    comment: data[0].comment,                            // 备注
    month: formatDateM(data[0].measuretime)              // 月份标识
  }]
  for (var i = 1; i < data.length; i++) { // 从i=1开始比较
    if (fData[a].month === formatDateM(data[i].measuretime)) { // 判断是否是同月份
      var fDataObject = {id: null, weight: 0, source: '', measuretime: '', measuretimetxt: '', comment: '', month: ''}
      fDataObject.id = data[i].id
      fDataObject.weight = data[i].weight
      fDataObject.source = '' // data[i].source
      fDataObject.measuretime = formatDate(data[i].measuretime)
      fDataObject.measuretimetxt = formatDateMDmd(data[i].measuretime).substring(0, 5) // 兼容iphone
      fDataObject.comment = data[0].comment
      fDataObject.month = formatDateM(data[i].measuretime)
      // 添加进数组
      fData[a].data.push(fDataObject)
    } else { // 新建月份  添加新数组  添加新属性和值
      fData.push({month: '', summary: {}, data: []})
      fData[++a].month = formatDateM(data[i].measuretime)
      fData[a].data = [{
        id: data[i].id,
        weight: data[i].weight,
        source: '',
        measuretime: formatDate(data[i].measuretime),
        measuretimetxt: formatDateMDmd(data[i].measuretime).substring(0, 5), // 兼容iphone
        comment: data[i].comment,
        month: formatDateM(data[i].measuretime)
      }]
    }
  }

  // 计算-总结summary
  for (var i = 0; i < fData.length; i++) {
    var summary = {  // 每次重新声明定义
      max: fData[i].data[0].weight,
      min: fData[i].data[0].weight,
      average: 0
    }
    for (var j = 0; j < fData[i].data.length; j++) {
      summary.max = Math.max(summary.max, fData[i].data[j].weight)  // 最重
      summary.min = Math.min(summary.min, fData[i].data[j].weight)  // 最轻
      summary.average += fData[i].data[j].weight                    // 总和
    }
    summary.average = Math.round(summary.average / fData[i].data.length * 100) / 100  // 平均
    fData[i].summary = summary
  }
  return fData
}
// --- 体重 end ---