'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  field: true,
  relation: {
    name: 'checkbox',
    type: 'descendant',
    linked: function linked(target) {
      var _this$data = this.data,
          value = _this$data.value,
          disabled = _this$data.disabled;
      target.set({
        value: value.indexOf(target.data.name) !== -1,
        disabled: disabled || target.data.disabled
      });
    }
  },
  props: {
    max: Number,
    value: Array,
    disabled: Boolean
  },
  watch: {
    value: function value(_value) {
      var children = this.getRelationNodes('../checkbox/index');
      children.forEach(function (child) {
        child.set({
          value: _value.indexOf(child.data.name) !== -1
        });
      });
    },
    disabled: function disabled(_disabled) {
      var children = this.getRelationNodes('../checkbox/index');
      children.forEach(function (child) {
        child.set({
          disabled: _disabled || child.data.disabled
        });
      });
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwicmVsYXRpb24iLCJuYW1lIiwidHlwZSIsImxpbmtlZCIsInRhcmdldCIsIl90aGlzJGRhdGEiLCJkYXRhIiwidmFsdWUiLCJkaXNhYmxlZCIsInNldCIsImluZGV4T2YiLCJwcm9wcyIsIm1heCIsIk51bWJlciIsIkFycmF5IiwiQm9vbGVhbiIsIndhdGNoIiwiX3ZhbHVlIiwiY2hpbGRyZW4iLCJnZXRSZWxhdGlvbk5vZGVzIiwiZm9yRWFjaCIsImNoaWxkIiwiX2Rpc2FibGVkIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLDhCQUFjO0FBQ1pBLFNBQU8sSUFESztBQUVaQyxZQUFVO0FBQ1JDLFVBQU0sVUFERTtBQUVSQyxVQUFNLFlBRkU7QUFHUkMsWUFBUSxTQUFTQSxNQUFULENBQWdCQyxNQUFoQixFQUF3QjtBQUM5QixVQUFJQyxhQUFhLEtBQUtDLElBQXRCO0FBQUEsVUFDSUMsUUFBUUYsV0FBV0UsS0FEdkI7QUFBQSxVQUVJQyxXQUFXSCxXQUFXRyxRQUYxQjtBQUdBSixhQUFPSyxHQUFQLENBQVc7QUFDVEYsZUFBT0EsTUFBTUcsT0FBTixDQUFjTixPQUFPRSxJQUFQLENBQVlMLElBQTFCLE1BQW9DLENBQUMsQ0FEbkM7QUFFVE8sa0JBQVVBLFlBQVlKLE9BQU9FLElBQVAsQ0FBWUU7QUFGekIsT0FBWDtBQUlEO0FBWE8sR0FGRTtBQWVaRyxTQUFPO0FBQ0xDLFNBQUtDLE1BREE7QUFFTE4sV0FBT08sS0FGRjtBQUdMTixjQUFVTztBQUhMLEdBZks7QUFvQlpDLFNBQU87QUFDTFQsV0FBTyxTQUFTQSxLQUFULENBQWVVLE1BQWYsRUFBdUI7QUFDNUIsVUFBSUMsV0FBVyxLQUFLQyxnQkFBTCxDQUFzQixtQkFBdEIsQ0FBZjtBQUNBRCxlQUFTRSxPQUFULENBQWlCLFVBQVVDLEtBQVYsRUFBaUI7QUFDaENBLGNBQU1aLEdBQU4sQ0FBVTtBQUNSRixpQkFBT1UsT0FBT1AsT0FBUCxDQUFlVyxNQUFNZixJQUFOLENBQVdMLElBQTFCLE1BQW9DLENBQUM7QUFEcEMsU0FBVjtBQUdELE9BSkQ7QUFLRCxLQVJJO0FBU0xPLGNBQVUsU0FBU0EsUUFBVCxDQUFrQmMsU0FBbEIsRUFBNkI7QUFDckMsVUFBSUosV0FBVyxLQUFLQyxnQkFBTCxDQUFzQixtQkFBdEIsQ0FBZjtBQUNBRCxlQUFTRSxPQUFULENBQWlCLFVBQVVDLEtBQVYsRUFBaUI7QUFDaENBLGNBQU1aLEdBQU4sQ0FBVTtBQUNSRCxvQkFBVWMsYUFBYUQsTUFBTWYsSUFBTixDQUFXRTtBQUQxQixTQUFWO0FBR0QsT0FKRDtBQUtEO0FBaEJJO0FBcEJLLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5WYW50Q29tcG9uZW50KHtcbiAgZmllbGQ6IHRydWUsXG4gIHJlbGF0aW9uOiB7XG4gICAgbmFtZTogJ2NoZWNrYm94JyxcbiAgICB0eXBlOiAnZGVzY2VuZGFudCcsXG4gICAgbGlua2VkOiBmdW5jdGlvbiBsaW5rZWQodGFyZ2V0KSB7XG4gICAgICB2YXIgX3RoaXMkZGF0YSA9IHRoaXMuZGF0YSxcbiAgICAgICAgICB2YWx1ZSA9IF90aGlzJGRhdGEudmFsdWUsXG4gICAgICAgICAgZGlzYWJsZWQgPSBfdGhpcyRkYXRhLmRpc2FibGVkO1xuICAgICAgdGFyZ2V0LnNldCh7XG4gICAgICAgIHZhbHVlOiB2YWx1ZS5pbmRleE9mKHRhcmdldC5kYXRhLm5hbWUpICE9PSAtMSxcbiAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkIHx8IHRhcmdldC5kYXRhLmRpc2FibGVkXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIHByb3BzOiB7XG4gICAgbWF4OiBOdW1iZXIsXG4gICAgdmFsdWU6IEFycmF5LFxuICAgIGRpc2FibGVkOiBCb29sZWFuXG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKF92YWx1ZSkge1xuICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5nZXRSZWxhdGlvbk5vZGVzKCcuLi9jaGVja2JveC9pbmRleCcpO1xuICAgICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgY2hpbGQuc2V0KHtcbiAgICAgICAgICB2YWx1ZTogX3ZhbHVlLmluZGV4T2YoY2hpbGQuZGF0YS5uYW1lKSAhPT0gLTFcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGRpc2FibGVkOiBmdW5jdGlvbiBkaXNhYmxlZChfZGlzYWJsZWQpIHtcbiAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMuZ2V0UmVsYXRpb25Ob2RlcygnLi4vY2hlY2tib3gvaW5kZXgnKTtcbiAgICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIGNoaWxkLnNldCh7XG4gICAgICAgICAgZGlzYWJsZWQ6IF9kaXNhYmxlZCB8fCBjaGlsZC5kYXRhLmRpc2FibGVkXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59KTsiXX0=