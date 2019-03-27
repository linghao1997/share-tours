'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  props: {
    show: Boolean,
    mask: Boolean,
    message: String,
    forbidClick: Boolean,
    zIndex: {
      type: Number,
      value: 1000
    },
    type: {
      type: String,
      value: 'text'
    },
    loadingType: {
      type: String,
      value: 'circular'
    },
    position: {
      type: String,
      value: 'middle'
    }
  },
  methods: {
    clear: function clear() {
      this.set({
        show: false
      });
    },
    // for prevent touchmove
    noop: function noop() {}
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwic2hvdyIsIkJvb2xlYW4iLCJtYXNrIiwibWVzc2FnZSIsIlN0cmluZyIsImZvcmJpZENsaWNrIiwiekluZGV4IiwidHlwZSIsIk51bWJlciIsInZhbHVlIiwibG9hZGluZ1R5cGUiLCJwb3NpdGlvbiIsIm1ldGhvZHMiLCJjbGVhciIsInNldCIsIm5vb3AiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0EsOEJBQWM7QUFDWkEsU0FBTztBQUNMQyxVQUFNQyxPQUREO0FBRUxDLFVBQU1ELE9BRkQ7QUFHTEUsYUFBU0MsTUFISjtBQUlMQyxpQkFBYUosT0FKUjtBQUtMSyxZQUFRO0FBQ05DLFlBQU1DLE1BREE7QUFFTkMsYUFBTztBQUZELEtBTEg7QUFTTEYsVUFBTTtBQUNKQSxZQUFNSCxNQURGO0FBRUpLLGFBQU87QUFGSCxLQVREO0FBYUxDLGlCQUFhO0FBQ1hILFlBQU1ILE1BREs7QUFFWEssYUFBTztBQUZJLEtBYlI7QUFpQkxFLGNBQVU7QUFDUkosWUFBTUgsTUFERTtBQUVSSyxhQUFPO0FBRkM7QUFqQkwsR0FESztBQXVCWkcsV0FBUztBQUNQQyxXQUFPLFNBQVNBLEtBQVQsR0FBaUI7QUFDdEIsV0FBS0MsR0FBTCxDQUFTO0FBQ1BkLGNBQU07QUFEQyxPQUFUO0FBR0QsS0FMTTtBQU1QO0FBQ0FlLFVBQU0sU0FBU0EsSUFBVCxHQUFnQixDQUFFO0FBUGpCO0FBdkJHLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5WYW50Q29tcG9uZW50KHtcbiAgcHJvcHM6IHtcbiAgICBzaG93OiBCb29sZWFuLFxuICAgIG1hc2s6IEJvb2xlYW4sXG4gICAgbWVzc2FnZTogU3RyaW5nLFxuICAgIGZvcmJpZENsaWNrOiBCb29sZWFuLFxuICAgIHpJbmRleDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgdmFsdWU6IDEwMDBcbiAgICB9LFxuICAgIHR5cGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAndGV4dCdcbiAgICB9LFxuICAgIGxvYWRpbmdUeXBlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJ2NpcmN1bGFyJ1xuICAgIH0sXG4gICAgcG9zaXRpb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnbWlkZGxlJ1xuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGNsZWFyOiBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgIHRoaXMuc2V0KHtcbiAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLy8gZm9yIHByZXZlbnQgdG91Y2htb3ZlXG4gICAgbm9vcDogZnVuY3Rpb24gbm9vcCgpIHt9XG4gIH1cbn0pOyJdfQ==