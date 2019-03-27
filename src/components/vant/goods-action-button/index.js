'use strict';

var _component = require('./../common/component.js');

var _link = require('./../mixins/link.js');

var _button = require('./../mixins/button.js');

var _openType = require('./../mixins/open-type.js');

(0, _component.VantComponent)({
  mixins: [_link.link, _button.button, _openType.openType],
  props: {
    text: String,
    loading: Boolean,
    disabled: Boolean,
    type: {
      type: String,
      value: 'danger'
    }
  },
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event.detail);
      this.jumpLink();
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1peGlucyIsImxpbmsiLCJidXR0b24iLCJvcGVuVHlwZSIsInByb3BzIiwidGV4dCIsIlN0cmluZyIsImxvYWRpbmciLCJCb29sZWFuIiwiZGlzYWJsZWQiLCJ0eXBlIiwidmFsdWUiLCJtZXRob2RzIiwib25DbGljayIsImV2ZW50IiwiJGVtaXQiLCJkZXRhaWwiLCJqdW1wTGluayJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQSw4QkFBYztBQUNaQSxVQUFRLENBQUNDLFVBQUQsRUFBT0MsY0FBUCxFQUFlQyxrQkFBZixDQURJO0FBRVpDLFNBQU87QUFDTEMsVUFBTUMsTUFERDtBQUVMQyxhQUFTQyxPQUZKO0FBR0xDLGNBQVVELE9BSEw7QUFJTEUsVUFBTTtBQUNKQSxZQUFNSixNQURGO0FBRUpLLGFBQU87QUFGSDtBQUpELEdBRks7QUFXWkMsV0FBUztBQUNQQyxhQUFTLFNBQVNBLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCO0FBQy9CLFdBQUtDLEtBQUwsQ0FBVyxPQUFYLEVBQW9CRCxNQUFNRSxNQUExQjtBQUNBLFdBQUtDLFFBQUw7QUFDRDtBQUpNO0FBWEcsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcbmltcG9ydCB7IGxpbmsgfSBmcm9tICcuLi9taXhpbnMvbGluayc7XG5pbXBvcnQgeyBidXR0b24gfSBmcm9tICcuLi9taXhpbnMvYnV0dG9uJztcbmltcG9ydCB7IG9wZW5UeXBlIH0gZnJvbSAnLi4vbWl4aW5zL29wZW4tdHlwZSc7XG5WYW50Q29tcG9uZW50KHtcbiAgbWl4aW5zOiBbbGluaywgYnV0dG9uLCBvcGVuVHlwZV0sXG4gIHByb3BzOiB7XG4gICAgdGV4dDogU3RyaW5nLFxuICAgIGxvYWRpbmc6IEJvb2xlYW4sXG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgdHlwZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICdkYW5nZXInXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25DbGljazogZnVuY3Rpb24gb25DbGljayhldmVudCkge1xuICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCBldmVudC5kZXRhaWwpO1xuICAgICAgdGhpcy5qdW1wTGluaygpO1xuICAgIH1cbiAgfVxufSk7Il19