'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  relation: {
    name: 'tabs',
    type: 'ancestor'
  },
  props: {
    dot: Boolean,
    info: null,
    title: String,
    disabled: Boolean,
    titleStyle: String
  },
  data: {
    width: null,
    inited: false,
    active: false,
    animated: false
  },
  watch: {
    title: 'update',
    disabled: 'update',
    dot: 'update',
    info: 'update',
    titleStyle: 'update'
  },
  methods: {
    update: function update() {
      var parent = this.getRelationNodes('../tabs/index')[0];

      if (parent) {
        parent.updateTabs();
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJwcm9wcyIsImRvdCIsIkJvb2xlYW4iLCJpbmZvIiwidGl0bGUiLCJTdHJpbmciLCJkaXNhYmxlZCIsInRpdGxlU3R5bGUiLCJkYXRhIiwid2lkdGgiLCJpbml0ZWQiLCJhY3RpdmUiLCJhbmltYXRlZCIsIndhdGNoIiwibWV0aG9kcyIsInVwZGF0ZSIsInBhcmVudCIsImdldFJlbGF0aW9uTm9kZXMiLCJ1cGRhdGVUYWJzIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLDhCQUFjO0FBQ1pBLFlBQVU7QUFDUkMsVUFBTSxNQURFO0FBRVJDLFVBQU07QUFGRSxHQURFO0FBS1pDLFNBQU87QUFDTEMsU0FBS0MsT0FEQTtBQUVMQyxVQUFNLElBRkQ7QUFHTEMsV0FBT0MsTUFIRjtBQUlMQyxjQUFVSixPQUpMO0FBS0xLLGdCQUFZRjtBQUxQLEdBTEs7QUFZWkcsUUFBTTtBQUNKQyxXQUFPLElBREg7QUFFSkMsWUFBUSxLQUZKO0FBR0pDLFlBQVEsS0FISjtBQUlKQyxjQUFVO0FBSk4sR0FaTTtBQWtCWkMsU0FBTztBQUNMVCxXQUFPLFFBREY7QUFFTEUsY0FBVSxRQUZMO0FBR0xMLFNBQUssUUFIQTtBQUlMRSxVQUFNLFFBSkQ7QUFLTEksZ0JBQVk7QUFMUCxHQWxCSztBQXlCWk8sV0FBUztBQUNQQyxZQUFRLFNBQVNBLE1BQVQsR0FBa0I7QUFDeEIsVUFBSUMsU0FBUyxLQUFLQyxnQkFBTCxDQUFzQixlQUF0QixFQUF1QyxDQUF2QyxDQUFiOztBQUVBLFVBQUlELE1BQUosRUFBWTtBQUNWQSxlQUFPRSxVQUFQO0FBQ0Q7QUFDRjtBQVBNO0FBekJHLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5WYW50Q29tcG9uZW50KHtcbiAgcmVsYXRpb246IHtcbiAgICBuYW1lOiAndGFicycsXG4gICAgdHlwZTogJ2FuY2VzdG9yJ1xuICB9LFxuICBwcm9wczoge1xuICAgIGRvdDogQm9vbGVhbixcbiAgICBpbmZvOiBudWxsLFxuICAgIHRpdGxlOiBTdHJpbmcsXG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgdGl0bGVTdHlsZTogU3RyaW5nXG4gIH0sXG4gIGRhdGE6IHtcbiAgICB3aWR0aDogbnVsbCxcbiAgICBpbml0ZWQ6IGZhbHNlLFxuICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgYW5pbWF0ZWQ6IGZhbHNlXG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgdGl0bGU6ICd1cGRhdGUnLFxuICAgIGRpc2FibGVkOiAndXBkYXRlJyxcbiAgICBkb3Q6ICd1cGRhdGUnLFxuICAgIGluZm86ICd1cGRhdGUnLFxuICAgIHRpdGxlU3R5bGU6ICd1cGRhdGUnXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgIHZhciBwYXJlbnQgPSB0aGlzLmdldFJlbGF0aW9uTm9kZXMoJy4uL3RhYnMvaW5kZXgnKVswXTtcblxuICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICBwYXJlbnQudXBkYXRlVGFicygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSk7Il19