'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  props: {
    info: null,
    icon: String,
    dot: Boolean
  },
  relation: {
    name: 'tabbar',
    type: 'ancestor'
  },
  data: {
    active: false
  },
  methods: {
    onClick: function onClick() {
      var parent = this.getRelationNodes('../tabbar/index')[0];

      if (parent) {
        parent.onChange(this);
      }

      this.$emit('click');
    },
    setActive: function setActive(_ref) {
      var active = _ref.active,
          color = _ref.color;

      if (this.data.active !== active) {
        this.set({
          active: active,
          color: color
        });
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwiaW5mbyIsImljb24iLCJTdHJpbmciLCJkb3QiLCJCb29sZWFuIiwicmVsYXRpb24iLCJuYW1lIiwidHlwZSIsImRhdGEiLCJhY3RpdmUiLCJtZXRob2RzIiwib25DbGljayIsInBhcmVudCIsImdldFJlbGF0aW9uTm9kZXMiLCJvbkNoYW5nZSIsIiRlbWl0Iiwic2V0QWN0aXZlIiwiX3JlZiIsImNvbG9yIiwic2V0Il0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLDhCQUFjO0FBQ1pBLFNBQU87QUFDTEMsVUFBTSxJQUREO0FBRUxDLFVBQU1DLE1BRkQ7QUFHTEMsU0FBS0M7QUFIQSxHQURLO0FBTVpDLFlBQVU7QUFDUkMsVUFBTSxRQURFO0FBRVJDLFVBQU07QUFGRSxHQU5FO0FBVVpDLFFBQU07QUFDSkMsWUFBUTtBQURKLEdBVk07QUFhWkMsV0FBUztBQUNQQyxhQUFTLFNBQVNBLE9BQVQsR0FBbUI7QUFDMUIsVUFBSUMsU0FBUyxLQUFLQyxnQkFBTCxDQUFzQixpQkFBdEIsRUFBeUMsQ0FBekMsQ0FBYjs7QUFFQSxVQUFJRCxNQUFKLEVBQVk7QUFDVkEsZUFBT0UsUUFBUCxDQUFnQixJQUFoQjtBQUNEOztBQUVELFdBQUtDLEtBQUwsQ0FBVyxPQUFYO0FBQ0QsS0FUTTtBQVVQQyxlQUFXLFNBQVNBLFNBQVQsQ0FBbUJDLElBQW5CLEVBQXlCO0FBQ2xDLFVBQUlSLFNBQVNRLEtBQUtSLE1BQWxCO0FBQUEsVUFDSVMsUUFBUUQsS0FBS0MsS0FEakI7O0FBR0EsVUFBSSxLQUFLVixJQUFMLENBQVVDLE1BQVYsS0FBcUJBLE1BQXpCLEVBQWlDO0FBQy9CLGFBQUtVLEdBQUwsQ0FBUztBQUNQVixrQkFBUUEsTUFERDtBQUVQUyxpQkFBT0E7QUFGQSxTQUFUO0FBSUQ7QUFDRjtBQXBCTTtBQWJHLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5WYW50Q29tcG9uZW50KHtcbiAgcHJvcHM6IHtcbiAgICBpbmZvOiBudWxsLFxuICAgIGljb246IFN0cmluZyxcbiAgICBkb3Q6IEJvb2xlYW5cbiAgfSxcbiAgcmVsYXRpb246IHtcbiAgICBuYW1lOiAndGFiYmFyJyxcbiAgICB0eXBlOiAnYW5jZXN0b3InXG4gIH0sXG4gIGRhdGE6IHtcbiAgICBhY3RpdmU6IGZhbHNlXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgdmFyIHBhcmVudCA9IHRoaXMuZ2V0UmVsYXRpb25Ob2RlcygnLi4vdGFiYmFyL2luZGV4JylbMF07XG5cbiAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgcGFyZW50Lm9uQ2hhbmdlKHRoaXMpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLiRlbWl0KCdjbGljaycpO1xuICAgIH0sXG4gICAgc2V0QWN0aXZlOiBmdW5jdGlvbiBzZXRBY3RpdmUoX3JlZikge1xuICAgICAgdmFyIGFjdGl2ZSA9IF9yZWYuYWN0aXZlLFxuICAgICAgICAgIGNvbG9yID0gX3JlZi5jb2xvcjtcblxuICAgICAgaWYgKHRoaXMuZGF0YS5hY3RpdmUgIT09IGFjdGl2ZSkge1xuICAgICAgICB0aGlzLnNldCh7XG4gICAgICAgICAgYWN0aXZlOiBhY3RpdmUsXG4gICAgICAgICAgY29sb3I6IGNvbG9yXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSk7Il19