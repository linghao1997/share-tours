'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  classes: ['title-class', 'content-class'],
  relation: {
    name: 'collapse',
    type: 'ancestor',
    linked: function linked(parent) {
      this.parent = parent;
    }
  },
  props: {
    name: null,
    title: null,
    value: null,
    icon: String,
    label: String,
    disabled: Boolean,
    border: {
      type: Boolean,
      value: true
    },
    isLink: {
      type: Boolean,
      value: true
    }
  },
  data: {
    contentHeight: 0,
    expanded: false
  },
  beforeCreate: function beforeCreate() {
    this.animation = wx.createAnimation({
      duration: 300,
      timingFunction: 'ease-in-out'
    });
  },
  methods: {
    updateExpanded: function updateExpanded() {
      if (!this.parent) {
        return null;
      }

      var _this$parent$data = this.parent.data,
          value = _this$parent$data.value,
          accordion = _this$parent$data.accordion,
          items = _this$parent$data.items;
      var name = this.data.name;
      var index = items.indexOf(this);
      var currentName = name == null ? index : name;
      var expanded = accordion ? value === currentName : value.some(function (name) {
        return name === currentName;
      });

      if (expanded !== this.data.expanded) {
        this.updateStyle(expanded);
      }

      this.set({
        expanded: expanded
      });
    },
    updateStyle: function updateStyle(expanded) {
      var _this = this;

      this.getRect('.van-collapse-item__content').then(function (res) {
        var animationData = _this.animation.height(expanded ? res.height : 0).step().export();

        if (expanded) {
          _this.set({
            animationData: animationData
          });
        } else {
          _this.set({
            contentHeight: res.height + 'px'
          }, function () {
            setTimeout(function () {
              _this.set({
                animationData: animationData
              });
            }, 20);
          });
        }
      });
    },
    onClick: function onClick() {
      if (this.data.disabled) {
        return;
      }

      var _this$data = this.data,
          name = _this$data.name,
          expanded = _this$data.expanded;
      var index = this.parent.data.items.indexOf(this);
      var currentName = name == null ? index : name;
      this.parent.switch(currentName, !expanded);
    },
    onTransitionEnd: function onTransitionEnd() {
      if (this.data.expanded) {
        this.set({
          contentHeight: 'auto'
        });
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNsYXNzZXMiLCJyZWxhdGlvbiIsIm5hbWUiLCJ0eXBlIiwibGlua2VkIiwicGFyZW50IiwicHJvcHMiLCJ0aXRsZSIsInZhbHVlIiwiaWNvbiIsIlN0cmluZyIsImxhYmVsIiwiZGlzYWJsZWQiLCJCb29sZWFuIiwiYm9yZGVyIiwiaXNMaW5rIiwiZGF0YSIsImNvbnRlbnRIZWlnaHQiLCJleHBhbmRlZCIsImJlZm9yZUNyZWF0ZSIsImFuaW1hdGlvbiIsInd4IiwiY3JlYXRlQW5pbWF0aW9uIiwiZHVyYXRpb24iLCJ0aW1pbmdGdW5jdGlvbiIsIm1ldGhvZHMiLCJ1cGRhdGVFeHBhbmRlZCIsIl90aGlzJHBhcmVudCRkYXRhIiwiYWNjb3JkaW9uIiwiaXRlbXMiLCJpbmRleCIsImluZGV4T2YiLCJjdXJyZW50TmFtZSIsInNvbWUiLCJ1cGRhdGVTdHlsZSIsInNldCIsIl90aGlzIiwiZ2V0UmVjdCIsInRoZW4iLCJyZXMiLCJhbmltYXRpb25EYXRhIiwiaGVpZ2h0Iiwic3RlcCIsImV4cG9ydCIsInNldFRpbWVvdXQiLCJvbkNsaWNrIiwiX3RoaXMkZGF0YSIsInN3aXRjaCIsIm9uVHJhbnNpdGlvbkVuZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSw4QkFBYztBQUNaQSxXQUFTLENBQUMsYUFBRCxFQUFnQixlQUFoQixDQURHO0FBRVpDLFlBQVU7QUFDUkMsVUFBTSxVQURFO0FBRVJDLFVBQU0sVUFGRTtBQUdSQyxZQUFRLFNBQVNBLE1BQVQsQ0FBZ0JDLE1BQWhCLEVBQXdCO0FBQzlCLFdBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNEO0FBTE8sR0FGRTtBQVNaQyxTQUFPO0FBQ0xKLFVBQU0sSUFERDtBQUVMSyxXQUFPLElBRkY7QUFHTEMsV0FBTyxJQUhGO0FBSUxDLFVBQU1DLE1BSkQ7QUFLTEMsV0FBT0QsTUFMRjtBQU1MRSxjQUFVQyxPQU5MO0FBT0xDLFlBQVE7QUFDTlgsWUFBTVUsT0FEQTtBQUVOTCxhQUFPO0FBRkQsS0FQSDtBQVdMTyxZQUFRO0FBQ05aLFlBQU1VLE9BREE7QUFFTkwsYUFBTztBQUZEO0FBWEgsR0FUSztBQXlCWlEsUUFBTTtBQUNKQyxtQkFBZSxDQURYO0FBRUpDLGNBQVU7QUFGTixHQXpCTTtBQTZCWkMsZ0JBQWMsU0FBU0EsWUFBVCxHQUF3QjtBQUNwQyxTQUFLQyxTQUFMLEdBQWlCQyxHQUFHQyxlQUFILENBQW1CO0FBQ2xDQyxnQkFBVSxHQUR3QjtBQUVsQ0Msc0JBQWdCO0FBRmtCLEtBQW5CLENBQWpCO0FBSUQsR0FsQ1c7QUFtQ1pDLFdBQVM7QUFDUEMsb0JBQWdCLFNBQVNBLGNBQVQsR0FBMEI7QUFDeEMsVUFBSSxDQUFDLEtBQUtyQixNQUFWLEVBQWtCO0FBQ2hCLGVBQU8sSUFBUDtBQUNEOztBQUVELFVBQUlzQixvQkFBb0IsS0FBS3RCLE1BQUwsQ0FBWVcsSUFBcEM7QUFBQSxVQUNJUixRQUFRbUIsa0JBQWtCbkIsS0FEOUI7QUFBQSxVQUVJb0IsWUFBWUQsa0JBQWtCQyxTQUZsQztBQUFBLFVBR0lDLFFBQVFGLGtCQUFrQkUsS0FIOUI7QUFJQSxVQUFJM0IsT0FBTyxLQUFLYyxJQUFMLENBQVVkLElBQXJCO0FBQ0EsVUFBSTRCLFFBQVFELE1BQU1FLE9BQU4sQ0FBYyxJQUFkLENBQVo7QUFDQSxVQUFJQyxjQUFjOUIsUUFBUSxJQUFSLEdBQWU0QixLQUFmLEdBQXVCNUIsSUFBekM7QUFDQSxVQUFJZ0IsV0FBV1UsWUFBWXBCLFVBQVV3QixXQUF0QixHQUFvQ3hCLE1BQU15QixJQUFOLENBQVcsVUFBVS9CLElBQVYsRUFBZ0I7QUFDNUUsZUFBT0EsU0FBUzhCLFdBQWhCO0FBQ0QsT0FGa0QsQ0FBbkQ7O0FBSUEsVUFBSWQsYUFBYSxLQUFLRixJQUFMLENBQVVFLFFBQTNCLEVBQXFDO0FBQ25DLGFBQUtnQixXQUFMLENBQWlCaEIsUUFBakI7QUFDRDs7QUFFRCxXQUFLaUIsR0FBTCxDQUFTO0FBQ1BqQixrQkFBVUE7QUFESCxPQUFUO0FBR0QsS0F4Qk07QUF5QlBnQixpQkFBYSxTQUFTQSxXQUFULENBQXFCaEIsUUFBckIsRUFBK0I7QUFDMUMsVUFBSWtCLFFBQVEsSUFBWjs7QUFFQSxXQUFLQyxPQUFMLENBQWEsNkJBQWIsRUFBNENDLElBQTVDLENBQWlELFVBQVVDLEdBQVYsRUFBZTtBQUM5RCxZQUFJQyxnQkFBZ0JKLE1BQU1oQixTQUFOLENBQWdCcUIsTUFBaEIsQ0FBdUJ2QixXQUFXcUIsSUFBSUUsTUFBZixHQUF3QixDQUEvQyxFQUFrREMsSUFBbEQsR0FBeURDLE1BQXpELEVBQXBCOztBQUVBLFlBQUl6QixRQUFKLEVBQWM7QUFDWmtCLGdCQUFNRCxHQUFOLENBQVU7QUFDUkssMkJBQWVBO0FBRFAsV0FBVjtBQUdELFNBSkQsTUFJTztBQUNMSixnQkFBTUQsR0FBTixDQUFVO0FBQ1JsQiwyQkFBZXNCLElBQUlFLE1BQUosR0FBYTtBQURwQixXQUFWLEVBRUcsWUFBWTtBQUNiRyx1QkFBVyxZQUFZO0FBQ3JCUixvQkFBTUQsR0FBTixDQUFVO0FBQ1JLLCtCQUFlQTtBQURQLGVBQVY7QUFHRCxhQUpELEVBSUcsRUFKSDtBQUtELFdBUkQ7QUFTRDtBQUNGLE9BbEJEO0FBbUJELEtBL0NNO0FBZ0RQSyxhQUFTLFNBQVNBLE9BQVQsR0FBbUI7QUFDMUIsVUFBSSxLQUFLN0IsSUFBTCxDQUFVSixRQUFkLEVBQXdCO0FBQ3RCO0FBQ0Q7O0FBRUQsVUFBSWtDLGFBQWEsS0FBSzlCLElBQXRCO0FBQUEsVUFDSWQsT0FBTzRDLFdBQVc1QyxJQUR0QjtBQUFBLFVBRUlnQixXQUFXNEIsV0FBVzVCLFFBRjFCO0FBR0EsVUFBSVksUUFBUSxLQUFLekIsTUFBTCxDQUFZVyxJQUFaLENBQWlCYSxLQUFqQixDQUF1QkUsT0FBdkIsQ0FBK0IsSUFBL0IsQ0FBWjtBQUNBLFVBQUlDLGNBQWM5QixRQUFRLElBQVIsR0FBZTRCLEtBQWYsR0FBdUI1QixJQUF6QztBQUNBLFdBQUtHLE1BQUwsQ0FBWTBDLE1BQVosQ0FBbUJmLFdBQW5CLEVBQWdDLENBQUNkLFFBQWpDO0FBQ0QsS0EzRE07QUE0RFA4QixxQkFBaUIsU0FBU0EsZUFBVCxHQUEyQjtBQUMxQyxVQUFJLEtBQUtoQyxJQUFMLENBQVVFLFFBQWQsRUFBd0I7QUFDdEIsYUFBS2lCLEdBQUwsQ0FBUztBQUNQbEIseUJBQWU7QUFEUixTQUFUO0FBR0Q7QUFDRjtBQWxFTTtBQW5DRyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuVmFudENvbXBvbmVudCh7XG4gIGNsYXNzZXM6IFsndGl0bGUtY2xhc3MnLCAnY29udGVudC1jbGFzcyddLFxuICByZWxhdGlvbjoge1xuICAgIG5hbWU6ICdjb2xsYXBzZScsXG4gICAgdHlwZTogJ2FuY2VzdG9yJyxcbiAgICBsaW5rZWQ6IGZ1bmN0aW9uIGxpbmtlZChwYXJlbnQpIHtcbiAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgIH1cbiAgfSxcbiAgcHJvcHM6IHtcbiAgICBuYW1lOiBudWxsLFxuICAgIHRpdGxlOiBudWxsLFxuICAgIHZhbHVlOiBudWxsLFxuICAgIGljb246IFN0cmluZyxcbiAgICBsYWJlbDogU3RyaW5nLFxuICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgIGJvcmRlcjoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHZhbHVlOiB0cnVlXG4gICAgfSxcbiAgICBpc0xpbms6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgZGF0YToge1xuICAgIGNvbnRlbnRIZWlnaHQ6IDAsXG4gICAgZXhwYW5kZWQ6IGZhbHNlXG4gIH0sXG4gIGJlZm9yZUNyZWF0ZTogZnVuY3Rpb24gYmVmb3JlQ3JlYXRlKCkge1xuICAgIHRoaXMuYW5pbWF0aW9uID0gd3guY3JlYXRlQW5pbWF0aW9uKHtcbiAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICB0aW1pbmdGdW5jdGlvbjogJ2Vhc2UtaW4tb3V0J1xuICAgIH0pO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgdXBkYXRlRXhwYW5kZWQ6IGZ1bmN0aW9uIHVwZGF0ZUV4cGFuZGVkKCkge1xuICAgICAgaWYgKCF0aGlzLnBhcmVudCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIF90aGlzJHBhcmVudCRkYXRhID0gdGhpcy5wYXJlbnQuZGF0YSxcbiAgICAgICAgICB2YWx1ZSA9IF90aGlzJHBhcmVudCRkYXRhLnZhbHVlLFxuICAgICAgICAgIGFjY29yZGlvbiA9IF90aGlzJHBhcmVudCRkYXRhLmFjY29yZGlvbixcbiAgICAgICAgICBpdGVtcyA9IF90aGlzJHBhcmVudCRkYXRhLml0ZW1zO1xuICAgICAgdmFyIG5hbWUgPSB0aGlzLmRhdGEubmFtZTtcbiAgICAgIHZhciBpbmRleCA9IGl0ZW1zLmluZGV4T2YodGhpcyk7XG4gICAgICB2YXIgY3VycmVudE5hbWUgPSBuYW1lID09IG51bGwgPyBpbmRleCA6IG5hbWU7XG4gICAgICB2YXIgZXhwYW5kZWQgPSBhY2NvcmRpb24gPyB2YWx1ZSA9PT0gY3VycmVudE5hbWUgOiB2YWx1ZS5zb21lKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHJldHVybiBuYW1lID09PSBjdXJyZW50TmFtZTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZXhwYW5kZWQgIT09IHRoaXMuZGF0YS5leHBhbmRlZCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0eWxlKGV4cGFuZGVkKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXQoe1xuICAgICAgICBleHBhbmRlZDogZXhwYW5kZWRcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgdXBkYXRlU3R5bGU6IGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKGV4cGFuZGVkKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB0aGlzLmdldFJlY3QoJy52YW4tY29sbGFwc2UtaXRlbV9fY29udGVudCcpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICB2YXIgYW5pbWF0aW9uRGF0YSA9IF90aGlzLmFuaW1hdGlvbi5oZWlnaHQoZXhwYW5kZWQgPyByZXMuaGVpZ2h0IDogMCkuc3RlcCgpLmV4cG9ydCgpO1xuXG4gICAgICAgIGlmIChleHBhbmRlZCkge1xuICAgICAgICAgIF90aGlzLnNldCh7XG4gICAgICAgICAgICBhbmltYXRpb25EYXRhOiBhbmltYXRpb25EYXRhXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXMuc2V0KHtcbiAgICAgICAgICAgIGNvbnRlbnRIZWlnaHQ6IHJlcy5oZWlnaHQgKyAncHgnXG4gICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIF90aGlzLnNldCh7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uRGF0YTogYW5pbWF0aW9uRGF0YVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIDIwKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgaWYgKHRoaXMuZGF0YS5kaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBfdGhpcyRkYXRhID0gdGhpcy5kYXRhLFxuICAgICAgICAgIG5hbWUgPSBfdGhpcyRkYXRhLm5hbWUsXG4gICAgICAgICAgZXhwYW5kZWQgPSBfdGhpcyRkYXRhLmV4cGFuZGVkO1xuICAgICAgdmFyIGluZGV4ID0gdGhpcy5wYXJlbnQuZGF0YS5pdGVtcy5pbmRleE9mKHRoaXMpO1xuICAgICAgdmFyIGN1cnJlbnROYW1lID0gbmFtZSA9PSBudWxsID8gaW5kZXggOiBuYW1lO1xuICAgICAgdGhpcy5wYXJlbnQuc3dpdGNoKGN1cnJlbnROYW1lLCAhZXhwYW5kZWQpO1xuICAgIH0sXG4gICAgb25UcmFuc2l0aW9uRW5kOiBmdW5jdGlvbiBvblRyYW5zaXRpb25FbmQoKSB7XG4gICAgICBpZiAodGhpcy5kYXRhLmV4cGFuZGVkKSB7XG4gICAgICAgIHRoaXMuc2V0KHtcbiAgICAgICAgICBjb250ZW50SGVpZ2h0OiAnYXV0bydcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59KTsiXX0=