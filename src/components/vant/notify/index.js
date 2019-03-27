'use strict';

var _component = require('./../common/component.js');

var _color = require('./../common/color.js');

(0, _component.VantComponent)({
  props: {
    text: String,
    color: {
      type: String,
      value: '#fff'
    },
    backgroundColor: {
      type: String,
      value: _color.RED
    },
    duration: {
      type: Number,
      value: 3000
    }
  },
  methods: {
    show: function show() {
      var _this = this;

      var duration = this.data.duration;
      clearTimeout(this.timer);
      this.set({
        show: true
      });

      if (duration > 0 && duration !== Infinity) {
        this.timer = setTimeout(function () {
          _this.hide();
        }, duration);
      }
    },
    hide: function hide() {
      clearTimeout(this.timer);
      this.set({
        show: false
      });
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwidGV4dCIsIlN0cmluZyIsImNvbG9yIiwidHlwZSIsInZhbHVlIiwiYmFja2dyb3VuZENvbG9yIiwiUkVEIiwiZHVyYXRpb24iLCJOdW1iZXIiLCJtZXRob2RzIiwic2hvdyIsIl90aGlzIiwiZGF0YSIsImNsZWFyVGltZW91dCIsInRpbWVyIiwic2V0IiwiSW5maW5pdHkiLCJzZXRUaW1lb3V0IiwiaGlkZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQSw4QkFBYztBQUNaQSxTQUFPO0FBQ0xDLFVBQU1DLE1BREQ7QUFFTEMsV0FBTztBQUNMQyxZQUFNRixNQUREO0FBRUxHLGFBQU87QUFGRixLQUZGO0FBTUxDLHFCQUFpQjtBQUNmRixZQUFNRixNQURTO0FBRWZHLGFBQU9FO0FBRlEsS0FOWjtBQVVMQyxjQUFVO0FBQ1JKLFlBQU1LLE1BREU7QUFFUkosYUFBTztBQUZDO0FBVkwsR0FESztBQWdCWkssV0FBUztBQUNQQyxVQUFNLFNBQVNBLElBQVQsR0FBZ0I7QUFDcEIsVUFBSUMsUUFBUSxJQUFaOztBQUVBLFVBQUlKLFdBQVcsS0FBS0ssSUFBTCxDQUFVTCxRQUF6QjtBQUNBTSxtQkFBYSxLQUFLQyxLQUFsQjtBQUNBLFdBQUtDLEdBQUwsQ0FBUztBQUNQTCxjQUFNO0FBREMsT0FBVDs7QUFJQSxVQUFJSCxXQUFXLENBQVgsSUFBZ0JBLGFBQWFTLFFBQWpDLEVBQTJDO0FBQ3pDLGFBQUtGLEtBQUwsR0FBYUcsV0FBVyxZQUFZO0FBQ2xDTixnQkFBTU8sSUFBTjtBQUNELFNBRlksRUFFVlgsUUFGVSxDQUFiO0FBR0Q7QUFDRixLQWZNO0FBZ0JQVyxVQUFNLFNBQVNBLElBQVQsR0FBZ0I7QUFDcEJMLG1CQUFhLEtBQUtDLEtBQWxCO0FBQ0EsV0FBS0MsR0FBTCxDQUFTO0FBQ1BMLGNBQU07QUFEQyxPQUFUO0FBR0Q7QUFyQk07QUFoQkcsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcbmltcG9ydCB7IFJFRCB9IGZyb20gJy4uL2NvbW1vbi9jb2xvcic7XG5WYW50Q29tcG9uZW50KHtcbiAgcHJvcHM6IHtcbiAgICB0ZXh0OiBTdHJpbmcsXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnI2ZmZidcbiAgICB9LFxuICAgIGJhY2tncm91bmRDb2xvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6IFJFRFxuICAgIH0sXG4gICAgZHVyYXRpb246IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIHZhbHVlOiAzMDAwXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgc2hvdzogZnVuY3Rpb24gc2hvdygpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHZhciBkdXJhdGlvbiA9IHRoaXMuZGF0YS5kdXJhdGlvbjtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICAgIHRoaXMuc2V0KHtcbiAgICAgICAgc2hvdzogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChkdXJhdGlvbiA+IDAgJiYgZHVyYXRpb24gIT09IEluZmluaXR5KSB7XG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpcy5oaWRlKCk7XG4gICAgICAgIH0sIGR1cmF0aW9uKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGhpZGU6IGZ1bmN0aW9uIGhpZGUoKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG4gICAgICB0aGlzLnNldCh7XG4gICAgICAgIHNob3c6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn0pOyJdfQ==