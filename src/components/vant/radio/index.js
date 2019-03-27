'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  field: true,
  relation: {
    name: 'radio-group',
    type: 'ancestor'
  },
  classes: ['icon-class', 'label-class'],
  props: {
    name: null,
    value: null,
    disabled: Boolean,
    labelDisabled: Boolean,
    labelPosition: String,
    checkedColor: String
  },
  methods: {
    emitChange: function emitChange(value) {
      var instance = this.getRelationNodes('../radio-group/index')[0] || this;
      instance.$emit('input', value);
      instance.$emit('change', value);
    },
    onChange: function onChange(event) {
      this.emitChange(event.detail.value);
    },
    onClickLabel: function onClickLabel() {
      if (!this.data.disabled && !this.data.labelDisabled) {
        this.emitChange(this.data.name);
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwicmVsYXRpb24iLCJuYW1lIiwidHlwZSIsImNsYXNzZXMiLCJwcm9wcyIsInZhbHVlIiwiZGlzYWJsZWQiLCJCb29sZWFuIiwibGFiZWxEaXNhYmxlZCIsImxhYmVsUG9zaXRpb24iLCJTdHJpbmciLCJjaGVja2VkQ29sb3IiLCJtZXRob2RzIiwiZW1pdENoYW5nZSIsImluc3RhbmNlIiwiZ2V0UmVsYXRpb25Ob2RlcyIsIiRlbWl0Iiwib25DaGFuZ2UiLCJldmVudCIsImRldGFpbCIsIm9uQ2xpY2tMYWJlbCIsImRhdGEiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0EsOEJBQWM7QUFDWkEsU0FBTyxJQURLO0FBRVpDLFlBQVU7QUFDUkMsVUFBTSxhQURFO0FBRVJDLFVBQU07QUFGRSxHQUZFO0FBTVpDLFdBQVMsQ0FBQyxZQUFELEVBQWUsYUFBZixDQU5HO0FBT1pDLFNBQU87QUFDTEgsVUFBTSxJQUREO0FBRUxJLFdBQU8sSUFGRjtBQUdMQyxjQUFVQyxPQUhMO0FBSUxDLG1CQUFlRCxPQUpWO0FBS0xFLG1CQUFlQyxNQUxWO0FBTUxDLGtCQUFjRDtBQU5ULEdBUEs7QUFlWkUsV0FBUztBQUNQQyxnQkFBWSxTQUFTQSxVQUFULENBQW9CUixLQUFwQixFQUEyQjtBQUNyQyxVQUFJUyxXQUFXLEtBQUtDLGdCQUFMLENBQXNCLHNCQUF0QixFQUE4QyxDQUE5QyxLQUFvRCxJQUFuRTtBQUNBRCxlQUFTRSxLQUFULENBQWUsT0FBZixFQUF3QlgsS0FBeEI7QUFDQVMsZUFBU0UsS0FBVCxDQUFlLFFBQWYsRUFBeUJYLEtBQXpCO0FBQ0QsS0FMTTtBQU1QWSxjQUFVLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQ2pDLFdBQUtMLFVBQUwsQ0FBZ0JLLE1BQU1DLE1BQU4sQ0FBYWQsS0FBN0I7QUFDRCxLQVJNO0FBU1BlLGtCQUFjLFNBQVNBLFlBQVQsR0FBd0I7QUFDcEMsVUFBSSxDQUFDLEtBQUtDLElBQUwsQ0FBVWYsUUFBWCxJQUF1QixDQUFDLEtBQUtlLElBQUwsQ0FBVWIsYUFBdEMsRUFBcUQ7QUFDbkQsYUFBS0ssVUFBTCxDQUFnQixLQUFLUSxJQUFMLENBQVVwQixJQUExQjtBQUNEO0FBQ0Y7QUFiTTtBQWZHLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5WYW50Q29tcG9uZW50KHtcbiAgZmllbGQ6IHRydWUsXG4gIHJlbGF0aW9uOiB7XG4gICAgbmFtZTogJ3JhZGlvLWdyb3VwJyxcbiAgICB0eXBlOiAnYW5jZXN0b3InXG4gIH0sXG4gIGNsYXNzZXM6IFsnaWNvbi1jbGFzcycsICdsYWJlbC1jbGFzcyddLFxuICBwcm9wczoge1xuICAgIG5hbWU6IG51bGwsXG4gICAgdmFsdWU6IG51bGwsXG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgbGFiZWxEaXNhYmxlZDogQm9vbGVhbixcbiAgICBsYWJlbFBvc2l0aW9uOiBTdHJpbmcsXG4gICAgY2hlY2tlZENvbG9yOiBTdHJpbmdcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGVtaXRDaGFuZ2U6IGZ1bmN0aW9uIGVtaXRDaGFuZ2UodmFsdWUpIHtcbiAgICAgIHZhciBpbnN0YW5jZSA9IHRoaXMuZ2V0UmVsYXRpb25Ob2RlcygnLi4vcmFkaW8tZ3JvdXAvaW5kZXgnKVswXSB8fCB0aGlzO1xuICAgICAgaW5zdGFuY2UuJGVtaXQoJ2lucHV0JywgdmFsdWUpO1xuICAgICAgaW5zdGFuY2UuJGVtaXQoJ2NoYW5nZScsIHZhbHVlKTtcbiAgICB9LFxuICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShldmVudCkge1xuICAgICAgdGhpcy5lbWl0Q2hhbmdlKGV2ZW50LmRldGFpbC52YWx1ZSk7XG4gICAgfSxcbiAgICBvbkNsaWNrTGFiZWw6IGZ1bmN0aW9uIG9uQ2xpY2tMYWJlbCgpIHtcbiAgICAgIGlmICghdGhpcy5kYXRhLmRpc2FibGVkICYmICF0aGlzLmRhdGEubGFiZWxEaXNhYmxlZCkge1xuICAgICAgICB0aGlzLmVtaXRDaGFuZ2UodGhpcy5kYXRhLm5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSk7Il19