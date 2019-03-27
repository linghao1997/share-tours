'use strict';

var _component = require('./../common/component.js');

var FONT_COLOR = '#ed6a0c';
var BG_COLOR = '#fffbe8';
(0, _component.VantComponent)({
  props: {
    text: {
      type: String,
      value: ''
    },
    mode: {
      type: String,
      value: ''
    },
    url: {
      type: String,
      value: ''
    },
    openType: {
      type: String,
      value: 'navigate'
    },
    delay: {
      type: Number,
      value: 0
    },
    speed: {
      type: Number,
      value: 50
    },
    scrollable: {
      type: Boolean,
      value: true
    },
    leftIcon: {
      type: String,
      value: ''
    },
    color: {
      type: String,
      value: FONT_COLOR
    },
    backgroundColor: {
      type: String,
      value: BG_COLOR
    }
  },
  data: {
    show: true,
    hasRightIcon: false
  },
  watch: {
    text: function text() {
      this.set({}, this.init);
    }
  },
  created: function created() {
    if (this.data.mode) {
      this.set({
        hasRightIcon: true
      });
    }

    this.resetAnimation = wx.createAnimation({
      duration: 0,
      timingFunction: 'linear'
    });
  },
  destroyed: function destroyed() {
    this.timer && clearTimeout(this.timer);
  },
  methods: {
    init: function init() {
      var _this = this;

      Promise.all([this.getRect('.van-notice-bar__content'), this.getRect('.van-notice-bar__content-wrap')]).then(function (rects) {
        var contentRect = rects[0],
            wrapRect = rects[1];

        if (contentRect == null || wrapRect == null || !contentRect.width || !wrapRect.width) {
          return;
        }

        var _this$data = _this.data,
            speed = _this$data.speed,
            scrollable = _this$data.scrollable,
            delay = _this$data.delay;

        if (scrollable && wrapRect.width < contentRect.width) {
          var duration = contentRect.width / speed * 1000;
          _this.wrapWidth = wrapRect.width;
          _this.contentWidth = contentRect.width;
          _this.duration = duration;
          _this.animation = wx.createAnimation({
            duration: duration,
            timingFunction: 'linear',
            delay: delay
          });

          _this.scroll();
        }
      });
    },
    scroll: function scroll() {
      var _this2 = this;

      this.timer && clearTimeout(this.timer);
      this.timer = null;
      this.set({
        animationData: this.resetAnimation.translateX(this.wrapWidth).step().export()
      });
      setTimeout(function () {
        _this2.set({
          animationData: _this2.animation.translateX(-_this2.contentWidth).step().export()
        });
      }, 20);
      this.timer = setTimeout(function () {
        _this2.scroll();
      }, this.duration);
    },
    onClickIcon: function onClickIcon() {
      this.timer && clearTimeout(this.timer);
      this.timer = null;
      this.set({
        show: false
      });
    },
    onClick: function onClick(event) {
      this.$emit('click', event);
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkZPTlRfQ09MT1IiLCJCR19DT0xPUiIsInByb3BzIiwidGV4dCIsInR5cGUiLCJTdHJpbmciLCJ2YWx1ZSIsIm1vZGUiLCJ1cmwiLCJvcGVuVHlwZSIsImRlbGF5IiwiTnVtYmVyIiwic3BlZWQiLCJzY3JvbGxhYmxlIiwiQm9vbGVhbiIsImxlZnRJY29uIiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkYXRhIiwic2hvdyIsImhhc1JpZ2h0SWNvbiIsIndhdGNoIiwic2V0IiwiaW5pdCIsImNyZWF0ZWQiLCJyZXNldEFuaW1hdGlvbiIsInd4IiwiY3JlYXRlQW5pbWF0aW9uIiwiZHVyYXRpb24iLCJ0aW1pbmdGdW5jdGlvbiIsImRlc3Ryb3llZCIsInRpbWVyIiwiY2xlYXJUaW1lb3V0IiwibWV0aG9kcyIsIl90aGlzIiwiUHJvbWlzZSIsImFsbCIsImdldFJlY3QiLCJ0aGVuIiwicmVjdHMiLCJjb250ZW50UmVjdCIsIndyYXBSZWN0Iiwid2lkdGgiLCJfdGhpcyRkYXRhIiwid3JhcFdpZHRoIiwiY29udGVudFdpZHRoIiwiYW5pbWF0aW9uIiwic2Nyb2xsIiwiX3RoaXMyIiwiYW5pbWF0aW9uRGF0YSIsInRyYW5zbGF0ZVgiLCJzdGVwIiwiZXhwb3J0Iiwic2V0VGltZW91dCIsIm9uQ2xpY2tJY29uIiwib25DbGljayIsImV2ZW50IiwiJGVtaXQiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0EsSUFBSUEsYUFBYSxTQUFqQjtBQUNBLElBQUlDLFdBQVcsU0FBZjtBQUNBLDhCQUFjO0FBQ1pDLFNBQU87QUFDTEMsVUFBTTtBQUNKQyxZQUFNQyxNQURGO0FBRUpDLGFBQU87QUFGSCxLQUREO0FBS0xDLFVBQU07QUFDSkgsWUFBTUMsTUFERjtBQUVKQyxhQUFPO0FBRkgsS0FMRDtBQVNMRSxTQUFLO0FBQ0hKLFlBQU1DLE1BREg7QUFFSEMsYUFBTztBQUZKLEtBVEE7QUFhTEcsY0FBVTtBQUNSTCxZQUFNQyxNQURF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QUFMLENBQVM7QUFDUDJCLHVCQUFlLEtBQUt4QixjQUFMLENBQW9CeUIsVUFBcEIsQ0FBK0IsS0FBS04sU0FBcEMsRUFBK0NPLElBQS9DLEdBQXNEQyxNQUF0RDtBQURSLE9BQVQ7QUFHQUMsaUJBQVcsWUFBWTtBQUNyQkwsZUFBTzFCLEdBQVAsQ0FBVztBQUNUMkIseUJBQWVELE9BQU9GLFNBQVAsQ0FBaUJJLFVBQWpCLENBQTRCLENBQUNGLE9BQU9ILFlBQXBDLEVBQWtETSxJQUFsRCxHQUF5REMsTUFBekQ7QUFETixTQUFYO0FBR0QsT0FKRCxFQUlHLEVBSkg7QUFLQSxXQUFLckIsS0FBTCxHQUFhc0IsV0FBVyxZQUFZO0FBQ2xDTCxlQUFPRCxNQUFQO0FBQ0QsT0FGWSxFQUVWLEtBQUtuQixRQUZLLENBQWI7QUFHRCxLQWhETTtBQWlEUDBCLGlCQUFhLFNBQVNBLFdBQVQsR0FBdUI7QUFDbEMsV0FBS3ZCLEtBQUwsSUFBY0MsYUFBYSxLQUFLRCxLQUFsQixDQUFkO0FBQ0EsV0FBS0EsS0FBTCxHQUFhLElBQWI7QUFDQSxXQUFLVCxHQUFMLENBQVM7QUFDUEgsY0FBTTtBQURDLE9BQVQ7QUFHRCxLQXZETTtBQXdEUG9DLGFBQVMsU0FBU0EsT0FBVCxDQUFpQkMsS0FBakIsRUFBd0I7QUFDL0IsV0FBS0MsS0FBTCxDQUFXLE9BQVgsRUFBb0JELEtBQXBCO0FBQ0Q7QUExRE07QUFuRUcsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcbnZhciBGT05UX0NPTE9SID0gJyNlZDZhMGMnO1xudmFyIEJHX0NPTE9SID0gJyNmZmZiZTgnO1xuVmFudENvbXBvbmVudCh7XG4gIHByb3BzOiB7XG4gICAgdGV4dDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICcnXG4gICAgfSxcbiAgICBtb2RlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJydcbiAgICB9LFxuICAgIHVybDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICcnXG4gICAgfSxcbiAgICBvcGVuVHlwZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICduYXZpZ2F0ZSdcbiAgICB9LFxuICAgIGRlbGF5OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICB2YWx1ZTogMFxuICAgIH0sXG4gICAgc3BlZWQ6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIHZhbHVlOiA1MFxuICAgIH0sXG4gICAgc2Nyb2xsYWJsZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHZhbHVlOiB0cnVlXG4gICAgfSxcbiAgICBsZWZ0SWNvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICcnXG4gICAgfSxcbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6IEZPTlRfQ09MT1JcbiAgICB9LFxuICAgIGJhY2tncm91bmRDb2xvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6IEJHX0NPTE9SXG4gICAgfVxuICB9LFxuICBkYXRhOiB7XG4gICAgc2hvdzogdHJ1ZSxcbiAgICBoYXNSaWdodEljb246IGZhbHNlXG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgdGV4dDogZnVuY3Rpb24gdGV4dCgpIHtcbiAgICAgIHRoaXMuc2V0KHt9LCB0aGlzLmluaXQpO1xuICAgIH1cbiAgfSxcbiAgY3JlYXRlZDogZnVuY3Rpb24gY3JlYXRlZCgpIHtcbiAgICBpZiAodGhpcy5kYXRhLm1vZGUpIHtcbiAgICAgIHRoaXMuc2V0KHtcbiAgICAgICAgaGFzUmlnaHRJY29uOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnJlc2V0QW5pbWF0aW9uID0gd3guY3JlYXRlQW5pbWF0aW9uKHtcbiAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgdGltaW5nRnVuY3Rpb246ICdsaW5lYXInXG4gICAgfSk7XG4gIH0sXG4gIGRlc3Ryb3llZDogZnVuY3Rpb24gZGVzdHJveWVkKCkge1xuICAgIHRoaXMudGltZXIgJiYgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIFByb21pc2UuYWxsKFt0aGlzLmdldFJlY3QoJy52YW4tbm90aWNlLWJhcl9fY29udGVudCcpLCB0aGlzLmdldFJlY3QoJy52YW4tbm90aWNlLWJhcl9fY29udGVudC13cmFwJyldKS50aGVuKGZ1bmN0aW9uIChyZWN0cykge1xuICAgICAgICB2YXIgY29udGVudFJlY3QgPSByZWN0c1swXSxcbiAgICAgICAgICAgIHdyYXBSZWN0ID0gcmVjdHNbMV07XG5cbiAgICAgICAgaWYgKGNvbnRlbnRSZWN0ID09IG51bGwgfHwgd3JhcFJlY3QgPT0gbnVsbCB8fCAhY29udGVudFJlY3Qud2lkdGggfHwgIXdyYXBSZWN0LndpZHRoKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF90aGlzJGRhdGEgPSBfdGhpcy5kYXRhLFxuICAgICAgICAgICAgc3BlZWQgPSBfdGhpcyRkYXRhLnNwZWVkLFxuICAgICAgICAgICAgc2Nyb2xsYWJsZSA9IF90aGlzJGRhdGEuc2Nyb2xsYWJsZSxcbiAgICAgICAgICAgIGRlbGF5ID0gX3RoaXMkZGF0YS5kZWxheTtcblxuICAgICAgICBpZiAoc2Nyb2xsYWJsZSAmJiB3cmFwUmVjdC53aWR0aCA8IGNvbnRlbnRSZWN0LndpZHRoKSB7XG4gICAgICAgICAgdmFyIGR1cmF0aW9uID0gY29udGVudFJlY3Qud2lkdGggLyBzcGVlZCAqIDEwMDA7XG4gICAgICAgICAgX3RoaXMud3JhcFdpZHRoID0gd3JhcFJlY3Qud2lkdGg7XG4gICAgICAgICAgX3RoaXMuY29udGVudFdpZHRoID0gY29udGVudFJlY3Qud2lkdGg7XG4gICAgICAgICAgX3RoaXMuZHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICAgICAgICBfdGhpcy5hbmltYXRpb24gPSB3eC5jcmVhdGVBbmltYXRpb24oe1xuICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICAgICAgdGltaW5nRnVuY3Rpb246ICdsaW5lYXInLFxuICAgICAgICAgICAgZGVsYXk6IGRlbGF5XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBfdGhpcy5zY3JvbGwoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBzY3JvbGw6IGZ1bmN0aW9uIHNjcm9sbCgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB0aGlzLnRpbWVyICYmIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICAgIHRoaXMudGltZXIgPSBudWxsO1xuICAgICAgdGhpcy5zZXQoe1xuICAgICAgICBhbmltYXRpb25EYXRhOiB0aGlzLnJlc2V0QW5pbWF0aW9uLnRyYW5zbGF0ZVgodGhpcy53cmFwV2lkdGgpLnN0ZXAoKS5leHBvcnQoKVxuICAgICAgfSk7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMyLnNldCh7XG4gICAgICAgICAgYW5pbWF0aW9uRGF0YTogX3RoaXMyLmFuaW1hdGlvbi50cmFuc2xhdGVYKC1fdGhpczIuY29udGVudFdpZHRoKS5zdGVwKCkuZXhwb3J0KClcbiAgICAgICAgfSk7XG4gICAgICB9LCAyMCk7XG4gICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMi5zY3JvbGwoKTtcbiAgICAgIH0sIHRoaXMuZHVyYXRpb24pO1xuICAgIH0sXG4gICAgb25DbGlja0ljb246IGZ1bmN0aW9uIG9uQ2xpY2tJY29uKCkge1xuICAgICAgdGhpcy50aW1lciAmJiBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG4gICAgICB0aGlzLnRpbWVyID0gbnVsbDtcbiAgICAgIHRoaXMuc2V0KHtcbiAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgb25DbGljazogZnVuY3Rpb24gb25DbGljayhldmVudCkge1xuICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCBldmVudCk7XG4gICAgfVxuICB9XG59KTsiXX0=