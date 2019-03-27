'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function setAsync(context, data) {
  return new Promise(function (resolve) {
    context.setData(data, resolve);
  });
}

;
var behavior = exports.behavior = Behavior({
  created: function created() {
    var _this = this;

    if (!this.$options) {
      return;
    }

    var cache = {};

    var _this$$options = this.$options(),
        computed = _this$$options.computed;

    var keys = Object.keys(computed);

    this.calcComputed = function () {
      var needUpdate = {};
      keys.forEach(function (key) {
        var value = computed[key].call(_this);

        if (cache[key] !== value) {
          cache[key] = needUpdate[key] = value;
        }
      });
      return needUpdate;
    };
  },
  attached: function attached() {
    this.set();
  },
  methods: {
    // set data and set computed data
    set: function set(data, callback) {
      var _this2 = this;

      var stack = [];

      if (data) {
        stack.push(setAsync(this, data));
      }

      if (this.calcComputed) {
        stack.push(setAsync(this, this.calcComputed()));
      }

      return Promise.all(stack).then(function (res) {
        if (callback && typeof callback === 'function') {
          callback.call(_this2);
        }

        return res;
      });
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlaGF2aW9yLmpzIl0sIm5hbWVzIjpbInNldEFzeW5jIiwiY29udGV4dCIsImRhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldERhdGEiLCJiZWhhdmlvciIsIkJlaGF2aW9yIiwiY3JlYXRlZCIsIl90aGlzIiwiJG9wdGlvbnMiLCJjYWNoZSIsIl90aGlzJCRvcHRpb25zIiwiY29tcHV0ZWQiLCJrZXlzIiwiT2JqZWN0IiwiY2FsY0NvbXB1dGVkIiwibmVlZFVwZGF0ZSIsImZvckVhY2giLCJrZXkiLCJ2YWx1ZSIsImNhbGwiLCJhdHRhY2hlZCIsInNldCIsIm1ldGhvZHMiLCJjYWxsYmFjayIsIl90aGlzMiIsInN0YWNrIiwicHVzaCIsImFsbCIsInRoZW4iLCJyZXMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsU0FBU0EsUUFBVCxDQUFrQkMsT0FBbEIsRUFBMkJDLElBQTNCLEVBQWlDO0FBQy9CLFNBQU8sSUFBSUMsT0FBSixDQUFZLFVBQVVDLE9BQVYsRUFBbUI7QUFDcENILFlBQVFJLE9BQVIsQ0FBZ0JILElBQWhCLEVBQXNCRSxPQUF0QjtBQUNELEdBRk0sQ0FBUDtBQUdEOztBQUVEO0FBQ08sSUFBSUUsOEJBQVdDLFNBQVM7QUFDN0JDLFdBQVMsU0FBU0EsT0FBVCxHQUFtQjtBQUMxQixRQUFJQyxRQUFRLElBQVo7O0FBRUEsUUFBSSxDQUFDLEtBQUtDLFFBQVYsRUFBb0I7QUFDbEI7QUFDRDs7QUFFRCxRQUFJQyxRQUFRLEVBQVo7O0FBRUEsUUFBSUMsaUJBQWlCLEtBQUtGLFFBQUwsRUFBckI7QUFBQSxRQUNJRyxXQUFXRCxlQUFlQyxRQUQ5Qjs7QUFHQSxRQUFJQyxPQUFPQyxPQUFPRCxJQUFQLENBQVlELFFBQVosQ0FBWDs7QUFFQSxTQUFLRyxZQUFMLEdBQW9CLFlBQVk7QUFDOUIsVUFBSUMsYUFBYSxFQUFqQjtBQUNBSCxXQUFLSSxPQUFMLENBQWEsVUFBVUMsR0FBVixFQUFlO0FBQzFCLFlBQUlDLFFBQVFQLFNBQVNNLEdBQVQsRUFBY0UsSUFBZCxDQUFtQlosS0FBbkIsQ0FBWjs7QUFFQSxZQUFJRSxNQUFNUSxHQUFOLE1BQWVDLEtBQW5CLEVBQTBCO0FBQ3hCVCxnQkFBTVEsR0FBTixJQUFhRixXQUFXRSxHQUFYLElBQWtCQyxLQUEvQjtBQUNEO0FBQ0YsT0FORDtBQU9BLGFBQU9ILFVBQVA7QUFDRCxLQVZEO0FBV0QsR0ExQjRCO0FBMkI3QkssWUFBVSxTQUFTQSxRQUFULEdBQW9CO0FBQzVCLFNBQUtDLEdBQUw7QUFDRCxHQTdCNEI7QUE4QjdCQyxXQUFTO0FBQ1A7QUFDQUQsU0FBSyxTQUFTQSxHQUFULENBQWFyQixJQUFiLEVBQW1CdUIsUUFBbkIsRUFBNkI7QUFDaEMsVUFBSUMsU0FBUyxJQUFiOztBQUVBLFVBQUlDLFFBQVEsRUFBWjs7QUFFQSxVQUFJekIsSUFBSixFQUFVO0FBQ1J5QixjQUFNQyxJQUFOLENBQVc1QixTQUFTLElBQVQsRUFBZUUsSUFBZixDQUFYO0FBQ0Q7O0FBRUQsVUFBSSxLQUFLYyxZQUFULEVBQXVCO0FBQ3JCVyxjQUFNQyxJQUFOLENBQVc1QixTQUFTLElBQVQsRUFBZSxLQUFLZ0IsWUFBTCxFQUFmLENBQVg7QUFDRDs7QUFFRCxhQUFPYixRQUFRMEIsR0FBUixDQUFZRixLQUFaLEVBQW1CRyxJQUFuQixDQUF3QixVQUFVQyxHQUFWLEVBQWU7QUFDNUMsWUFBSU4sWUFBWSxPQUFPQSxRQUFQLEtBQW9CLFVBQXBDLEVBQWdEO0FBQzlDQSxtQkFBU0osSUFBVCxDQUFjSyxNQUFkO0FBQ0Q7O0FBRUQsZUFBT0ssR0FBUDtBQUNELE9BTk0sQ0FBUDtBQU9EO0FBdEJNO0FBOUJvQixDQUFULENBQWYiLCJmaWxlIjoiYmVoYXZpb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBzZXRBc3luYyhjb250ZXh0LCBkYXRhKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgIGNvbnRleHQuc2V0RGF0YShkYXRhLCByZXNvbHZlKTtcbiAgfSk7XG59XG5cbjtcbmV4cG9ydCB2YXIgYmVoYXZpb3IgPSBCZWhhdmlvcih7XG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uIGNyZWF0ZWQoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGlmICghdGhpcy4kb3B0aW9ucykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjYWNoZSA9IHt9O1xuXG4gICAgdmFyIF90aGlzJCRvcHRpb25zID0gdGhpcy4kb3B0aW9ucygpLFxuICAgICAgICBjb21wdXRlZCA9IF90aGlzJCRvcHRpb25zLmNvbXB1dGVkO1xuXG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhjb21wdXRlZCk7XG5cbiAgICB0aGlzLmNhbGNDb21wdXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBuZWVkVXBkYXRlID0ge307XG4gICAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBjb21wdXRlZFtrZXldLmNhbGwoX3RoaXMpO1xuXG4gICAgICAgIGlmIChjYWNoZVtrZXldICE9PSB2YWx1ZSkge1xuICAgICAgICAgIGNhY2hlW2tleV0gPSBuZWVkVXBkYXRlW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmVlZFVwZGF0ZTtcbiAgICB9O1xuICB9LFxuICBhdHRhY2hlZDogZnVuY3Rpb24gYXR0YWNoZWQoKSB7XG4gICAgdGhpcy5zZXQoKTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIC8vIHNldCBkYXRhIGFuZCBzZXQgY29tcHV0ZWQgZGF0YVxuICAgIHNldDogZnVuY3Rpb24gc2V0KGRhdGEsIGNhbGxiYWNrKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIHN0YWNrID0gW107XG5cbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIHN0YWNrLnB1c2goc2V0QXN5bmModGhpcywgZGF0YSkpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5jYWxjQ29tcHV0ZWQpIHtcbiAgICAgICAgc3RhY2sucHVzaChzZXRBc3luYyh0aGlzLCB0aGlzLmNhbGNDb21wdXRlZCgpKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBQcm9taXNlLmFsbChzdGFjaykudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIGlmIChjYWxsYmFjayAmJiB0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjYWxsYmFjay5jYWxsKF90aGlzMik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59KTsiXX0=