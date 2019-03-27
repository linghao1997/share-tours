'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var basic = exports.basic = Behavior({
  methods: {
    $emit: function $emit() {
      this.triggerEvent.apply(this, arguments);
    },
    getRect: function getRect(selector, all) {
      var _this = this;

      return new Promise(function (resolve) {
        wx.createSelectorQuery().in(_this)[all ? 'selectAll' : 'select'](selector).boundingClientRect(function (rect) {
          if (all && Array.isArray(rect) && rect.length) {
            resolve(rect);
          }

          if (!all && rect) {
            resolve(rect);
          }
        }).exec();
      });
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2ljLmpzIl0sIm5hbWVzIjpbImJhc2ljIiwiQmVoYXZpb3IiLCJtZXRob2RzIiwiJGVtaXQiLCJ0cmlnZ2VyRXZlbnQiLCJhcHBseSIsImFyZ3VtZW50cyIsImdldFJlY3QiLCJzZWxlY3RvciIsImFsbCIsIl90aGlzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ3eCIsImNyZWF0ZVNlbGVjdG9yUXVlcnkiLCJpbiIsImJvdW5kaW5nQ2xpZW50UmVjdCIsInJlY3QiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJleGVjIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFPLElBQUlBLHdCQUFRQyxTQUFTO0FBQzFCQyxXQUFTO0FBQ1BDLFdBQU8sU0FBU0EsS0FBVCxHQUFpQjtBQUN0QixXQUFLQyxZQUFMLENBQWtCQyxLQUFsQixDQUF3QixJQUF4QixFQUE4QkMsU0FBOUI7QUFDRCxLQUhNO0FBSVBDLGFBQVMsU0FBU0EsT0FBVCxDQUFpQkMsUUFBakIsRUFBMkJDLEdBQTNCLEVBQWdDO0FBQ3ZDLFVBQUlDLFFBQVEsSUFBWjs7QUFFQSxhQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFVQyxPQUFWLEVBQW1CO0FBQ3BDQyxXQUFHQyxtQkFBSCxHQUF5QkMsRUFBekIsQ0FBNEJMLEtBQTVCLEVBQW1DRCxNQUFNLFdBQU4sR0FBb0IsUUFBdkQsRUFBaUVELFFBQWpFLEVBQTJFUSxrQkFBM0UsQ0FBOEYsVUFBVUMsSUFBVixFQUFnQjtBQUM1RyxjQUFJUixPQUFPUyxNQUFNQyxPQUFOLENBQWNGLElBQWQsQ0FBUCxJQUE4QkEsS0FBS0csTUFBdkMsRUFBK0M7QUFDN0NSLG9CQUFRSyxJQUFSO0FBQ0Q7O0FBRUQsY0FBSSxDQUFDUixHQUFELElBQVFRLElBQVosRUFBa0I7QUFDaEJMLG9CQUFRSyxJQUFSO0FBQ0Q7QUFDRixTQVJELEVBUUdJLElBUkg7QUFTRCxPQVZNLENBQVA7QUFXRDtBQWxCTTtBQURpQixDQUFULENBQVoiLCJmaWxlIjoiYmFzaWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdmFyIGJhc2ljID0gQmVoYXZpb3Ioe1xuICBtZXRob2RzOiB7XG4gICAgJGVtaXQ6IGZ1bmN0aW9uICRlbWl0KCkge1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9LFxuICAgIGdldFJlY3Q6IGZ1bmN0aW9uIGdldFJlY3Qoc2VsZWN0b3IsIGFsbCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgIHd4LmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5pbihfdGhpcylbYWxsID8gJ3NlbGVjdEFsbCcgOiAnc2VsZWN0J10oc2VsZWN0b3IpLmJvdW5kaW5nQ2xpZW50UmVjdChmdW5jdGlvbiAocmVjdCkge1xuICAgICAgICAgIGlmIChhbGwgJiYgQXJyYXkuaXNBcnJheShyZWN0KSAmJiByZWN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgcmVzb2x2ZShyZWN0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIWFsbCAmJiByZWN0KSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlY3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkuZXhlYygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59KTsiXX0=