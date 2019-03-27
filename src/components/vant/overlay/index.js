'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  props: {
    show: Boolean,
    mask: Boolean,
    customStyle: String,
    zIndex: {
      type: Number,
      value: 1
    }
  },
  methods: {
    onClick: function onClick() {
      this.$emit('click');
    },
    // for prevent touchmove
    noop: function noop() {}
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwic2hvdyIsIkJvb2xlYW4iLCJtYXNrIiwiY3VzdG9tU3R5bGUiLCJTdHJpbmciLCJ6SW5kZXgiLCJ0eXBlIiwiTnVtYmVyIiwidmFsdWUiLCJtZXRob2RzIiwib25DbGljayIsIiRlbWl0Iiwibm9vcCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSw4QkFBYztBQUNaQSxTQUFPO0FBQ0xDLFVBQU1DLE9BREQ7QUFFTEMsVUFBTUQsT0FGRDtBQUdMRSxpQkFBYUMsTUFIUjtBQUlMQyxZQUFRO0FBQ05DLFlBQU1DLE1BREE7QUFFTkMsYUFBTztBQUZEO0FBSkgsR0FESztBQVVaQyxXQUFTO0FBQ1BDLGFBQVMsU0FBU0EsT0FBVCxHQUFtQjtBQUMxQixXQUFLQyxLQUFMLENBQVcsT0FBWDtBQUNELEtBSE07QUFJUDtBQUNBQyxVQUFNLFNBQVNBLElBQVQsR0FBZ0IsQ0FBRTtBQUxqQjtBQVZHLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5WYW50Q29tcG9uZW50KHtcbiAgcHJvcHM6IHtcbiAgICBzaG93OiBCb29sZWFuLFxuICAgIG1hc2s6IEJvb2xlYW4sXG4gICAgY3VzdG9tU3R5bGU6IFN0cmluZyxcbiAgICB6SW5kZXg6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIHZhbHVlOiAxXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrJyk7XG4gICAgfSxcbiAgICAvLyBmb3IgcHJldmVudCB0b3VjaG1vdmVcbiAgICBub29wOiBmdW5jdGlvbiBub29wKCkge31cbiAgfVxufSk7Il19