'use strict';

var _component = require('./../common/component.js');

var _color = require('./../common/color.js');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DEFAULT_COLOR = '#999';
var COLOR_MAP = {
  danger: _color.RED,
  primary: _color.BLUE,
  success: _color.GREEN
};
(0, _component.VantComponent)({
  props: {
    size: String,
    type: String,
    mark: Boolean,
    color: String,
    plain: Boolean,
    round: Boolean,
    textColor: String
  },
  computed: {
    style: function style() {
      var color = this.data.color || COLOR_MAP[this.data.type] || DEFAULT_COLOR;
      var key = this.data.plain ? 'color' : 'background-color';
      var style = _defineProperty({}, key, color);

      if (this.data.textColor) {
        style.color = this.data.textColor;
      }

      return Object.keys(style).map(function (key) {
        return key + ": " + style[key];
      }).join(';');
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfQ09MT1IiLCJDT0xPUl9NQVAiLCJkYW5nZXIiLCJSRUQiLCJwcmltYXJ5IiwiQkxVRSIsInN1Y2Nlc3MiLCJHUkVFTiIsInByb3BzIiwic2l6ZSIsIlN0cmluZyIsInR5cGUiLCJtYXJrIiwiQm9vbGVhbiIsImNvbG9yIiwicGxhaW4iLCJyb3VuZCIsInRleHRDb2xvciIsImNvbXB1dGVkIiwic3R5bGUiLCJkYXRhIiwia2V5IiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImpvaW4iXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7Ozs7QUFDQSxJQUFJQSxnQkFBZ0IsTUFBcEI7QUFDQSxJQUFJQyxZQUFZO0FBQ2RDLFVBQVFDLFVBRE07QUFFZEMsV0FBU0MsV0FGSztBQUdkQyxXQUFTQztBQUhLLENBQWhCO0FBS0EsOEJBQWM7QUFDWkMsU0FBTztBQUNMQyxVQUFNQyxNQUREO0FBRUxDLFVBQU1ELE1BRkQ7QUFHTEUsVUFBTUMsT0FIRDtBQUlMQyxXQUFPSixNQUpGO0FBS0xLLFdBQU9GLE9BTEY7QUFNTEcsV0FBT0gsT0FORjtBQU9MSSxlQUFXUDtBQVBOLEdBREs7QUFVWlEsWUFBVTtBQUNSQyxXQUFPLFNBQVNBLEtBQVQsR0FBaUI7QUFDdEIsVUFBSUwsUUFBUSxLQUFLTSxJQUFMLENBQVVOLEtBQVYsSUFBbUJiLFVBQVUsS0FBS21CLElBQUwsQ0FBVVQsSUFBcEIsQ0FBbkIsSUFBZ0RYLGFBQTVEO0FBQ0EsVUFBSXFCLE1BQU0sS0FBS0QsSUFBTCxDQUFVTCxLQUFWLEdBQWtCLE9BQWxCLEdBQTRCLGtCQUF0QztBQUNBLFVBQUlJLDRCQUNERSxHQURDLEVBQ0tQLEtBREwsQ0FBSjs7QUFJQSxVQUFJLEtBQUtNLElBQUwsQ0FBVUgsU0FBZCxFQUF5QjtBQUN2QkUsY0FBTUwsS0FBTixHQUFjLEtBQUtNLElBQUwsQ0FBVUgsU0FBeEI7QUFDRDs7QUFFRCxhQUFPSyxPQUFPQyxJQUFQLENBQVlKLEtBQVosRUFBbUJLLEdBQW5CLENBQXVCLFVBQVVILEdBQVYsRUFBZTtBQUMzQyxlQUFPQSxNQUFNLElBQU4sR0FBYUYsTUFBTUUsR0FBTixDQUFwQjtBQUNELE9BRk0sRUFFSkksSUFGSSxDQUVDLEdBRkQsQ0FBUDtBQUdEO0FBZk87QUFWRSxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuaW1wb3J0IHsgUkVELCBCTFVFLCBHUkVFTiB9IGZyb20gJy4uL2NvbW1vbi9jb2xvcic7XG52YXIgREVGQVVMVF9DT0xPUiA9ICcjOTk5JztcbnZhciBDT0xPUl9NQVAgPSB7XG4gIGRhbmdlcjogUkVELFxuICBwcmltYXJ5OiBCTFVFLFxuICBzdWNjZXNzOiBHUkVFTlxufTtcblZhbnRDb21wb25lbnQoe1xuICBwcm9wczoge1xuICAgIHNpemU6IFN0cmluZyxcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgbWFyazogQm9vbGVhbixcbiAgICBjb2xvcjogU3RyaW5nLFxuICAgIHBsYWluOiBCb29sZWFuLFxuICAgIHJvdW5kOiBCb29sZWFuLFxuICAgIHRleHRDb2xvcjogU3RyaW5nXG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgc3R5bGU6IGZ1bmN0aW9uIHN0eWxlKCkge1xuICAgICAgdmFyIGNvbG9yID0gdGhpcy5kYXRhLmNvbG9yIHx8IENPTE9SX01BUFt0aGlzLmRhdGEudHlwZV0gfHwgREVGQVVMVF9DT0xPUjtcbiAgICAgIHZhciBrZXkgPSB0aGlzLmRhdGEucGxhaW4gPyAnY29sb3InIDogJ2JhY2tncm91bmQtY29sb3InO1xuICAgICAgdmFyIHN0eWxlID0ge1xuICAgICAgICBba2V5XTogY29sb3JcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLmRhdGEudGV4dENvbG9yKSB7XG4gICAgICAgIHN0eWxlLmNvbG9yID0gdGhpcy5kYXRhLnRleHRDb2xvcjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHN0eWxlKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4ga2V5ICsgXCI6IFwiICsgc3R5bGVba2V5XTtcbiAgICAgIH0pLmpvaW4oJzsnKTtcbiAgICB9XG4gIH1cbn0pOyJdfQ==