'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  relation: {
    type: 'ancestor',
    name: 'badge-group'
  },
  props: {
    info: null,
    title: String
  },
  methods: {
    onClick: function onClick() {
      var group = this.getRelationNodes('../badge-group/index')[0];

      if (group) {
        group.setActive(this);
      }
    },
    setActive: function setActive(active) {
      this.set({
        active: active
      });
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInJlbGF0aW9uIiwidHlwZSIsIm5hbWUiLCJwcm9wcyIsImluZm8iLCJ0aXRsZSIsIlN0cmluZyIsIm1ldGhvZHMiLCJvbkNsaWNrIiwiZ3JvdXAiLCJnZXRSZWxhdGlvbk5vZGVzIiwic2V0QWN0aXZlIiwiYWN0aXZlIiwic2V0Il0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLDhCQUFjO0FBQ1pBLFlBQVU7QUFDUkMsVUFBTSxVQURFO0FBRVJDLFVBQU07QUFGRSxHQURFO0FBS1pDLFNBQU87QUFDTEMsVUFBTSxJQUREO0FBRUxDLFdBQU9DO0FBRkYsR0FMSztBQVNaQyxXQUFTO0FBQ1BDLGFBQVMsU0FBU0EsT0FBVCxHQUFtQjtBQUMxQixVQUFJQyxRQUFRLEtBQUtDLGdCQUFMLENBQXNCLHNCQUF0QixFQUE4QyxDQUE5QyxDQUFaOztBQUVBLFVBQUlELEtBQUosRUFBVztBQUNUQSxjQUFNRSxTQUFOLENBQWdCLElBQWhCO0FBQ0Q7QUFDRixLQVBNO0FBUVBBLGVBQVcsU0FBU0EsU0FBVCxDQUFtQkMsTUFBbkIsRUFBMkI7QUFDcEMsV0FBS0MsR0FBTCxDQUFTO0FBQ1BELGdCQUFRQTtBQURELE9BQVQ7QUFHRDtBQVpNO0FBVEcsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcblZhbnRDb21wb25lbnQoe1xuICByZWxhdGlvbjoge1xuICAgIHR5cGU6ICdhbmNlc3RvcicsXG4gICAgbmFtZTogJ2JhZGdlLWdyb3VwJ1xuICB9LFxuICBwcm9wczoge1xuICAgIGluZm86IG51bGwsXG4gICAgdGl0bGU6IFN0cmluZ1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgIHZhciBncm91cCA9IHRoaXMuZ2V0UmVsYXRpb25Ob2RlcygnLi4vYmFkZ2UtZ3JvdXAvaW5kZXgnKVswXTtcblxuICAgICAgaWYgKGdyb3VwKSB7XG4gICAgICAgIGdyb3VwLnNldEFjdGl2ZSh0aGlzKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHNldEFjdGl2ZTogZnVuY3Rpb24gc2V0QWN0aXZlKGFjdGl2ZSkge1xuICAgICAgdGhpcy5zZXQoe1xuICAgICAgICBhY3RpdmU6IGFjdGl2ZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59KTsiXX0=