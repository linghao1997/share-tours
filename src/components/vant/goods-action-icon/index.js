'use strict';

var _component = require('./../common/component.js');

var _link = require('./../mixins/link.js');

var _button = require('./../mixins/button.js');

var _openType = require('./../mixins/open-type.js');

(0, _component.VantComponent)({
  classes: ['icon-class', 'text-class'],
  mixins: [_link.link, _button.button, _openType.openType],
  props: {
    text: String,
    info: String,
    icon: String
  },
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event.detail);
      this.jumpLink();
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNsYXNzZXMiLCJtaXhpbnMiLCJsaW5rIiwiYnV0dG9uIiwib3BlblR5cGUiLCJwcm9wcyIsInRleHQiLCJTdHJpbmciLCJpbmZvIiwiaWNvbiIsIm1ldGhvZHMiLCJvbkNsaWNrIiwiZXZlbnQiLCIkZW1pdCIsImRldGFpbCIsImp1bXBMaW5rIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBLDhCQUFjO0FBQ1pBLFdBQVMsQ0FBQyxZQUFELEVBQWUsWUFBZixDQURHO0FBRVpDLFVBQVEsQ0FBQ0MsVUFBRCxFQUFPQyxjQUFQLEVBQWVDLGtCQUFmLENBRkk7QUFHWkMsU0FBTztBQUNMQyxVQUFNQyxNQUREO0FBRUxDLFVBQU1ELE1BRkQ7QUFHTEUsVUFBTUY7QUFIRCxHQUhLO0FBUVpHLFdBQVM7QUFDUEMsYUFBUyxTQUFTQSxPQUFULENBQWlCQyxLQUFqQixFQUF3QjtBQUMvQixXQUFLQyxLQUFMLENBQVcsT0FBWCxFQUFvQkQsTUFBTUUsTUFBMUI7QUFDQSxXQUFLQyxRQUFMO0FBQ0Q7QUFKTTtBQVJHLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBsaW5rIH0gZnJvbSAnLi4vbWl4aW5zL2xpbmsnO1xuaW1wb3J0IHsgYnV0dG9uIH0gZnJvbSAnLi4vbWl4aW5zL2J1dHRvbic7XG5pbXBvcnQgeyBvcGVuVHlwZSB9IGZyb20gJy4uL21peGlucy9vcGVuLXR5cGUnO1xuVmFudENvbXBvbmVudCh7XG4gIGNsYXNzZXM6IFsnaWNvbi1jbGFzcycsICd0ZXh0LWNsYXNzJ10sXG4gIG1peGluczogW2xpbmssIGJ1dHRvbiwgb3BlblR5cGVdLFxuICBwcm9wczoge1xuICAgIHRleHQ6IFN0cmluZyxcbiAgICBpbmZvOiBTdHJpbmcsXG4gICAgaWNvbjogU3RyaW5nXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGV2ZW50KSB7XG4gICAgICB0aGlzLiRlbWl0KCdjbGljaycsIGV2ZW50LmRldGFpbCk7XG4gICAgICB0aGlzLmp1bXBMaW5rKCk7XG4gICAgfVxuICB9XG59KTsiXX0=