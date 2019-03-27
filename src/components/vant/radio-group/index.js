'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  field: true,
  relation: {
    name: 'radio',
    type: 'descendant',
    linked: function linked(target) {
      var _this$data = this.data,
          value = _this$data.value,
          disabled = _this$data.disabled;
      target.set({
        value: value,
        disabled: disabled || target.data.disabled
      });
    }
  },
  props: {
    value: null,
    disabled: Boolean
  },
  watch: {
    value: function value(_value) {
      var children = this.getRelationNodes('../radio/index');
      children.forEach(function (child) {
        child.set({
          value: _value
        });
      });
    },
    disabled: function disabled(_disabled) {
      var children = this.getRelationNodes('../radio/index');
      children.forEach(function (child) {
        child.set({
          disabled: _disabled || child.data.disabled
        });
      });
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwicmVsYXRpb24iLCJuYW1lIiwidHlwZSIsImxpbmtlZCIsInRhcmdldCIsIl90aGlzJGRhdGEiLCJkYXRhIiwidmFsdWUiLCJkaXNhYmxlZCIsInNldCIsInByb3BzIiwiQm9vbGVhbiIsIndhdGNoIiwiX3ZhbHVlIiwiY2hpbGRyZW4iLCJnZXRSZWxhdGlvbk5vZGVzIiwiZm9yRWFjaCIsImNoaWxkIiwiX2Rpc2FibGVkIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLDhCQUFjO0FBQ1pBLFNBQU8sSUFESztBQUVaQyxZQUFVO0FBQ1JDLFVBQU0sT0FERTtBQUVSQyxVQUFNLFlBRkU7QUFHUkMsWUFBUSxTQUFTQSxNQUFULENBQWdCQyxNQUFoQixFQUF3QjtBQUM5QixVQUFJQyxhQUFhLEtBQUtDLElBQXRCO0FBQUEsVUFDSUMsUUFBUUYsV0FBV0UsS0FEdkI7QUFBQSxVQUVJQyxXQUFXSCxXQUFXRyxRQUYxQjtBQUdBSixhQUFPSyxHQUFQLENBQVc7QUFDVEYsZUFBT0EsS0FERTtBQUVUQyxrQkFBVUEsWUFBWUosT0FBT0UsSUFBUCxDQUFZRTtBQUZ6QixPQUFYO0FBSUQ7QUFYTyxHQUZFO0FBZVpFLFNBQU87QUFDTEgsV0FBTyxJQURGO0FBRUxDLGNBQVVHO0FBRkwsR0FmSztBQW1CWkMsU0FBTztBQUNMTCxXQUFPLFNBQVNBLEtBQVQsQ0FBZU0sTUFBZixFQUF1QjtBQUM1QixVQUFJQyxXQUFXLEtBQUtDLGdCQUFMLENBQXNCLGdCQUF0QixDQUFmO0FBQ0FELGVBQVNFLE9BQVQsQ0FBaUIsVUFBVUMsS0FBVixFQUFpQjtBQUNoQ0EsY0FBTVIsR0FBTixDQUFVO0FBQ1JGLGlCQUFPTTtBQURDLFNBQVY7QUFHRCxPQUpEO0FBS0QsS0FSSTtBQVNMTCxjQUFVLFNBQVNBLFFBQVQsQ0FBa0JVLFNBQWxCLEVBQTZCO0FBQ3JDLFVBQUlKLFdBQVcsS0FBS0MsZ0JBQUwsQ0FBc0IsZ0JBQXRCLENBQWY7QUFDQUQsZUFBU0UsT0FBVCxDQUFpQixVQUFVQyxLQUFWLEVBQWlCO0FBQ2hDQSxjQUFNUixHQUFOLENBQVU7QUFDUkQsb0JBQVVVLGFBQWFELE1BQU1YLElBQU4sQ0FBV0U7QUFEMUIsU0FBVjtBQUdELE9BSkQ7QUFLRDtBQWhCSTtBQW5CSyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuVmFudENvbXBvbmVudCh7XG4gIGZpZWxkOiB0cnVlLFxuICByZWxhdGlvbjoge1xuICAgIG5hbWU6ICdyYWRpbycsXG4gICAgdHlwZTogJ2Rlc2NlbmRhbnQnLFxuICAgIGxpbmtlZDogZnVuY3Rpb24gbGlua2VkKHRhcmdldCkge1xuICAgICAgdmFyIF90aGlzJGRhdGEgPSB0aGlzLmRhdGEsXG4gICAgICAgICAgdmFsdWUgPSBfdGhpcyRkYXRhLnZhbHVlLFxuICAgICAgICAgIGRpc2FibGVkID0gX3RoaXMkZGF0YS5kaXNhYmxlZDtcbiAgICAgIHRhcmdldC5zZXQoe1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCB8fCB0YXJnZXQuZGF0YS5kaXNhYmxlZFxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICBwcm9wczoge1xuICAgIHZhbHVlOiBudWxsLFxuICAgIGRpc2FibGVkOiBCb29sZWFuXG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKF92YWx1ZSkge1xuICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5nZXRSZWxhdGlvbk5vZGVzKCcuLi9yYWRpby9pbmRleCcpO1xuICAgICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgY2hpbGQuc2V0KHtcbiAgICAgICAgICB2YWx1ZTogX3ZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBkaXNhYmxlZDogZnVuY3Rpb24gZGlzYWJsZWQoX2Rpc2FibGVkKSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLmdldFJlbGF0aW9uTm9kZXMoJy4uL3JhZGlvL2luZGV4Jyk7XG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBjaGlsZC5zZXQoe1xuICAgICAgICAgIGRpc2FibGVkOiBfZGlzYWJsZWQgfHwgY2hpbGQuZGF0YS5kaXNhYmxlZFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufSk7Il19