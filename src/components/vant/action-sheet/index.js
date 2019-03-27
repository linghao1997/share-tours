'use strict';

var _component = require('./../common/component.js');

var _iphonex = require('./../mixins/iphonex.js');

(0, _component.VantComponent)({
  mixins: [_iphonex.iphonex],
  props: {
    show: Boolean,
    title: String,
    cancelText: String,
    zIndex: {
      type: Number,
      value: 100
    },
    actions: {
      type: Array,
      value: []
    },
    overlay: {
      type: Boolean,
      value: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      value: true
    }
  },
  methods: {
    onSelect: function onSelect(event) {
      var index = event.currentTarget.dataset.index;
      var item = this.data.actions[index];

      if (item && !item.disabled && !item.loading) {
        this.$emit('select', item);
      }
    },
    onCancel: function onCancel() {
      this.$emit('cancel');
    },
    onClose: function onClose() {
      this.$emit('close');
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1peGlucyIsImlwaG9uZXgiLCJwcm9wcyIsInNob3ciLCJCb29sZWFuIiwidGl0bGUiLCJTdHJpbmciLCJjYW5jZWxUZXh0IiwiekluZGV4IiwidHlwZSIsIk51bWJlciIsInZhbHVlIiwiYWN0aW9ucyIsIkFycmF5Iiwib3ZlcmxheSIsImNsb3NlT25DbGlja092ZXJsYXkiLCJtZXRob2RzIiwib25TZWxlY3QiLCJldmVudCIsImluZGV4IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJpdGVtIiwiZGF0YSIsImRpc2FibGVkIiwibG9hZGluZyIsIiRlbWl0Iiwib25DYW5jZWwiLCJvbkNsb3NlIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBLDhCQUFjO0FBQ1pBLFVBQVEsQ0FBQ0MsZ0JBQUQsQ0FESTtBQUVaQyxTQUFPO0FBQ0xDLFVBQU1DLE9BREQ7QUFFTEMsV0FBT0MsTUFGRjtBQUdMQyxnQkFBWUQsTUFIUDtBQUlMRSxZQUFRO0FBQ05DLFlBQU1DLE1BREE7QUFFTkMsYUFBTztBQUZELEtBSkg7QUFRTEMsYUFBUztBQUNQSCxZQUFNSSxLQURDO0FBRVBGLGFBQU87QUFGQSxLQVJKO0FBWUxHLGFBQVM7QUFDUEwsWUFBTUwsT0FEQztBQUVQTyxhQUFPO0FBRkEsS0FaSjtBQWdCTEkseUJBQXFCO0FBQ25CTixZQUFNTCxPQURhO0FBRW5CTyxhQUFPO0FBRlk7QUFoQmhCLEdBRks7QUF1QlpLLFdBQVM7QUFDUEMsY0FBVSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUNqQyxVQUFJQyxRQUFRRCxNQUFNRSxhQUFOLENBQW9CQyxPQUFwQixDQUE0QkYsS0FBeEM7QUFDQSxVQUFJRyxPQUFPLEtBQUtDLElBQUwsQ0FBVVgsT0FBVixDQUFrQk8sS0FBbEIsQ0FBWDs7QUFFQSxVQUFJRyxRQUFRLENBQUNBLEtBQUtFLFFBQWQsSUFBMEIsQ0FBQ0YsS0FBS0csT0FBcEMsRUFBNkM7QUFDM0MsYUFBS0MsS0FBTCxDQUFXLFFBQVgsRUFBcUJKLElBQXJCO0FBQ0Q7QUFDRixLQVJNO0FBU1BLLGNBQVUsU0FBU0EsUUFBVCxHQUFvQjtBQUM1QixXQUFLRCxLQUFMLENBQVcsUUFBWDtBQUNELEtBWE07QUFZUEUsYUFBUyxTQUFTQSxPQUFULEdBQW1CO0FBQzFCLFdBQUtGLEtBQUwsQ0FBVyxPQUFYO0FBQ0Q7QUFkTTtBQXZCRyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuaW1wb3J0IHsgaXBob25leCB9IGZyb20gJy4uL21peGlucy9pcGhvbmV4JztcblZhbnRDb21wb25lbnQoe1xuICBtaXhpbnM6IFtpcGhvbmV4XSxcbiAgcHJvcHM6IHtcbiAgICBzaG93OiBCb29sZWFuLFxuICAgIHRpdGxlOiBTdHJpbmcsXG4gICAgY2FuY2VsVGV4dDogU3RyaW5nLFxuICAgIHpJbmRleDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgdmFsdWU6IDEwMFxuICAgIH0sXG4gICAgYWN0aW9uczoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICB2YWx1ZTogW11cbiAgICB9LFxuICAgIG92ZXJsYXk6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogdHJ1ZVxuICAgIH0sXG4gICAgY2xvc2VPbkNsaWNrT3ZlcmxheToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHZhbHVlOiB0cnVlXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25TZWxlY3Q6IGZ1bmN0aW9uIG9uU2VsZWN0KGV2ZW50KSB7XG4gICAgICB2YXIgaW5kZXggPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICB2YXIgaXRlbSA9IHRoaXMuZGF0YS5hY3Rpb25zW2luZGV4XTtcblxuICAgICAgaWYgKGl0ZW0gJiYgIWl0ZW0uZGlzYWJsZWQgJiYgIWl0ZW0ubG9hZGluZykge1xuICAgICAgICB0aGlzLiRlbWl0KCdzZWxlY3QnLCBpdGVtKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2FuY2VsOiBmdW5jdGlvbiBvbkNhbmNlbCgpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ2NhbmNlbCcpO1xuICAgIH0sXG4gICAgb25DbG9zZTogZnVuY3Rpb24gb25DbG9zZSgpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ2Nsb3NlJyk7XG4gICAgfVxuICB9XG59KTsiXX0=