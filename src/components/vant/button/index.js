'use strict';

var _component = require('./../common/component.js');

var _button = require('./../mixins/button.js');

var _openType = require('./../mixins/open-type.js');

(0, _component.VantComponent)({
  mixins: [_button.button, _openType.openType],
  classes: ['hover-class', 'loading-class'],
  props: {
    plain: Boolean,
    block: Boolean,
    round: Boolean,
    square: Boolean,
    loading: Boolean,
    disabled: Boolean,
    loadingText: String,
    type: {
      type: String,
      value: 'default'
    },
    size: {
      type: String,
      value: 'normal'
    }
  },
  methods: {
    onClick: function onClick() {
      if (!this.data.disabled && !this.data.loading) {
        this.$emit('click');
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1peGlucyIsImJ1dHRvbiIsIm9wZW5UeXBlIiwiY2xhc3NlcyIsInByb3BzIiwicGxhaW4iLCJCb29sZWFuIiwiYmxvY2siLCJyb3VuZCIsInNxdWFyZSIsImxvYWRpbmciLCJkaXNhYmxlZCIsImxvYWRpbmdUZXh0IiwiU3RyaW5nIiwidHlwZSIsInZhbHVlIiwic2l6ZSIsIm1ldGhvZHMiLCJvbkNsaWNrIiwiZGF0YSIsIiRlbWl0Il0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBOztBQUNBLDhCQUFjO0FBQ1pBLFVBQVEsQ0FBQ0MsY0FBRCxFQUFTQyxrQkFBVCxDQURJO0FBRVpDLFdBQVMsQ0FBQyxhQUFELEVBQWdCLGVBQWhCLENBRkc7QUFHWkMsU0FBTztBQUNMQyxXQUFPQyxPQURGO0FBRUxDLFdBQU9ELE9BRkY7QUFHTEUsV0FBT0YsT0FIRjtBQUlMRyxZQUFRSCxPQUpIO0FBS0xJLGFBQVNKLE9BTEo7QUFNTEssY0FBVUwsT0FOTDtBQU9MTSxpQkFBYUMsTUFQUjtBQVFMQyxVQUFNO0FBQ0pBLFlBQU1ELE1BREY7QUFFSkUsYUFBTztBQUZILEtBUkQ7QUFZTEMsVUFBTTtBQUNKRixZQUFNRCxNQURGO0FBRUpFLGFBQU87QUFGSDtBQVpELEdBSEs7QUFvQlpFLFdBQVM7QUFDUEMsYUFBUyxTQUFTQSxPQUFULEdBQW1CO0FBQzFCLFVBQUksQ0FBQyxLQUFLQyxJQUFMLENBQVVSLFFBQVgsSUFBdUIsQ0FBQyxLQUFLUSxJQUFMLENBQVVULE9BQXRDLEVBQStDO0FBQzdDLGFBQUtVLEtBQUwsQ0FBVyxPQUFYO0FBQ0Q7QUFDRjtBQUxNO0FBcEJHLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBidXR0b24gfSBmcm9tICcuLi9taXhpbnMvYnV0dG9uJztcbmltcG9ydCB7IG9wZW5UeXBlIH0gZnJvbSAnLi4vbWl4aW5zL29wZW4tdHlwZSc7XG5WYW50Q29tcG9uZW50KHtcbiAgbWl4aW5zOiBbYnV0dG9uLCBvcGVuVHlwZV0sXG4gIGNsYXNzZXM6IFsnaG92ZXItY2xhc3MnLCAnbG9hZGluZy1jbGFzcyddLFxuICBwcm9wczoge1xuICAgIHBsYWluOiBCb29sZWFuLFxuICAgIGJsb2NrOiBCb29sZWFuLFxuICAgIHJvdW5kOiBCb29sZWFuLFxuICAgIHNxdWFyZTogQm9vbGVhbixcbiAgICBsb2FkaW5nOiBCb29sZWFuLFxuICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgIGxvYWRpbmdUZXh0OiBTdHJpbmcsXG4gICAgdHlwZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICdkZWZhdWx0J1xuICAgIH0sXG4gICAgc2l6ZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICdub3JtYWwnXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgIGlmICghdGhpcy5kYXRhLmRpc2FibGVkICYmICF0aGlzLmRhdGEubG9hZGluZykge1xuICAgICAgICB0aGlzLiRlbWl0KCdjbGljaycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSk7Il19