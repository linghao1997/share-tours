'use strict'

import wepy from 'wepy'

export default class FontSizeMixin extends wepy.mixin {
  data = {
    fontSize: '',
    fontColor: ''
  }

  onLoad () {
    this.fontSize = this.$state.fontSize;
    this.fontColor = this.$state.fontColor;

    this.fontSizeChangedHandler = () => {
      this.fontSize = this.$state.fontSize  //获取字体大小
      // console.log(this.fontSize)
      this.$apply()
    }
    this.fontColorChangedHandler = () => {
      debugger
      this.fontColor = this.$state.fontColor  //获取字体颜色
      
      this.$apply()
      // console.log(this.fontColor)
    }

    this.$globalEvents.on('fontSizeChanged', this.fontSizeChangedHandler)     //接收事件  ('事件名称',方法(参数))

    this.$globalEvents.on('fontColorChanged', this.fontColorChangedHandler)   //接收事件  ('事件名称',方法(参数))
  }

  onUnload () {
    this.$globalEvents.off('fontSizeChanged', this.fontSizeChangedHandler)    //取消接收事件  ('事件名称',方法(参数))

    this.$globalEvents.off('fontColorChanged', this.fontColorChangedHandler)  //取消接收事件  ('事件名称',方法(参数))
  }
}
