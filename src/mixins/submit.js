'use strict'

import wepy from 'wepy'

export default class SubmitMixin extends wepy.mixin {
  methods = {
    async submit (e) {
      await this.$loading('正在提交...')

      let result
      try {
        // result = await this.submit(e.detail.value)
        result = await this.submit(e) // 返回e, 否则获取不到formId
      } catch (err) {
        await this.$modal('错误', err.message)
      }

      await this.$loading()
      if (result) {
        await wepy.showToast({
          title: '提交成功',
          icon: 'success',
          duration: 1000,
          mask: true
        })
      }
    }
  }
}
