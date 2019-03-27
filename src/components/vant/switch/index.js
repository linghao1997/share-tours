'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  field: true,
  classes: ['node-class'],
  props: {
    checked: null,
    loading: Boolean,
    disabled: Boolean,
    activeColor: String,
    inactiveColor: String,
    size: {
      type: String,
      value: '30px'
    },
    activeValue: {
      type: null,
      value: true
    },
    inactiveValue: {
      type: null,
      value: false
    }
  },
  watch: {
    checked: function checked(value) {
      this.set({
        value: value
      });
    }
  },
  created: function created() {
    this.set({
      value: this.data.checked
    });
  },
  methods: {
    onClick: function onClick() {
      var _this$data = this.data,
          activeValue = _this$data.activeValue,
          inactiveValue = _this$data.inactiveValue;

      if (!this.data.disabled && !this.data.loading) {
        var checked = this.data.checked === activeValue;
        var value = checked ? inactiveValue : activeValue;
        this.$emit('input', value);
        this.$emit('change', value);
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwiY2xhc3NlcyIsInByb3BzIiwiY2hlY2tlZCIsImxvYWRpbmciLCJCb29sZWFuIiwiZGlzYWJsZWQiLCJhY3RpdmVDb2xvciIsIlN0cmluZyIsImluYWN0aXZlQ29sb3IiLCJzaXplIiwidHlwZSIsInZhbHVlIiwiYWN0aXZlVmFsdWUiLCJpbmFjdGl2ZVZhbHVlIiwid2F0Y2giLCJzZXQiLCJjcmVhdGVkIiwiZGF0YSIsIm1ldGhvZHMiLCJvbkNsaWNrIiwiX3RoaXMkZGF0YSIsIiRlbWl0Il0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLDhCQUFjO0FBQ1pBLFNBQU8sSUFESztBQUVaQyxXQUFTLENBQUMsWUFBRCxDQUZHO0FBR1pDLFNBQU87QUFDTEMsYUFBUyxJQURKO0FBRUxDLGFBQVNDLE9BRko7QUFHTEMsY0FBVUQsT0FITDtBQUlMRSxpQkFBYUMsTUFKUjtBQUtMQyxtQkFBZUQsTUFMVjtBQU1MRSxVQUFNO0FBQ0pDLFlBQU1ILE1BREY7QUFFSkksYUFBTztBQUZILEtBTkQ7QUFVTEMsaUJBQWE7QUFDWEYsWUFBTSxJQURLO0FBRVhDLGFBQU87QUFGSSxLQVZSO0FBY0xFLG1CQUFlO0FBQ2JILFlBQU0sSUFETztBQUViQyxhQUFPO0FBRk07QUFkVixHQUhLO0FBc0JaRyxTQUFPO0FBQ0xaLGFBQVMsU0FBU0EsT0FBVCxDQUFpQlMsS0FBakIsRUFBd0I7QUFDL0IsV0FBS0ksR0FBTCxDQUFTO0FBQ1BKLGVBQU9BO0FBREEsT0FBVDtBQUdEO0FBTEksR0F0Qks7QUE2QlpLLFdBQVMsU0FBU0EsT0FBVCxHQUFtQjtBQUMxQixTQUFLRCxHQUFMLENBQVM7QUFDUEosYUFBTyxLQUFLTSxJQUFMLENBQVVmO0FBRFYsS0FBVDtBQUdELEdBakNXO0FBa0NaZ0IsV0FBUztBQUNQQyxhQUFTLFNBQVNBLE9BQVQsR0FBbUI7QUFDMUIsVUFBSUMsYUFBYSxLQUFLSCxJQUF0QjtBQUFBLFVBQ0lMLGNBQWNRLFdBQVdSLFdBRDdCO0FBQUEsVUFFSUMsZ0JBQWdCTyxXQUFXUCxhQUYvQjs7QUFJQSxVQUFJLENBQUMsS0FBS0ksSUFBTCxDQUFVWixRQUFYLElBQXVCLENBQUMsS0FBS1ksSUFBTCxDQUFVZCxPQUF0QyxFQUErQztBQUM3QyxZQUFJRCxVQUFVLEtBQUtlLElBQUwsQ0FBVWYsT0FBVixLQUFzQlUsV0FBcEM7QUFDQSxZQUFJRCxRQUFRVCxVQUFVVyxhQUFWLEdBQTBCRCxXQUF0QztBQUNBLGFBQUtTLEtBQUwsQ0FBVyxPQUFYLEVBQW9CVixLQUFwQjtBQUNBLGFBQUtVLEtBQUwsQ0FBVyxRQUFYLEVBQXFCVixLQUFyQjtBQUNEO0FBQ0Y7QUFaTTtBQWxDRyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuVmFudENvbXBvbmVudCh7XG4gIGZpZWxkOiB0cnVlLFxuICBjbGFzc2VzOiBbJ25vZGUtY2xhc3MnXSxcbiAgcHJvcHM6IHtcbiAgICBjaGVja2VkOiBudWxsLFxuICAgIGxvYWRpbmc6IEJvb2xlYW4sXG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgYWN0aXZlQ29sb3I6IFN0cmluZyxcbiAgICBpbmFjdGl2ZUNvbG9yOiBTdHJpbmcsXG4gICAgc2l6ZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICczMHB4J1xuICAgIH0sXG4gICAgYWN0aXZlVmFsdWU6IHtcbiAgICAgIHR5cGU6IG51bGwsXG4gICAgICB2YWx1ZTogdHJ1ZVxuICAgIH0sXG4gICAgaW5hY3RpdmVWYWx1ZToge1xuICAgICAgdHlwZTogbnVsbCxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBjaGVja2VkOiBmdW5jdGlvbiBjaGVja2VkKHZhbHVlKSB7XG4gICAgICB0aGlzLnNldCh7XG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICBjcmVhdGVkOiBmdW5jdGlvbiBjcmVhdGVkKCkge1xuICAgIHRoaXMuc2V0KHtcbiAgICAgIHZhbHVlOiB0aGlzLmRhdGEuY2hlY2tlZFxuICAgIH0pO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgIHZhciBfdGhpcyRkYXRhID0gdGhpcy5kYXRhLFxuICAgICAgICAgIGFjdGl2ZVZhbHVlID0gX3RoaXMkZGF0YS5hY3RpdmVWYWx1ZSxcbiAgICAgICAgICBpbmFjdGl2ZVZhbHVlID0gX3RoaXMkZGF0YS5pbmFjdGl2ZVZhbHVlO1xuXG4gICAgICBpZiAoIXRoaXMuZGF0YS5kaXNhYmxlZCAmJiAhdGhpcy5kYXRhLmxvYWRpbmcpIHtcbiAgICAgICAgdmFyIGNoZWNrZWQgPSB0aGlzLmRhdGEuY2hlY2tlZCA9PT0gYWN0aXZlVmFsdWU7XG4gICAgICAgIHZhciB2YWx1ZSA9IGNoZWNrZWQgPyBpbmFjdGl2ZVZhbHVlIDogYWN0aXZlVmFsdWU7XG4gICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgdmFsdWUpO1xuICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59KTsiXX0=