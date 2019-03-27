'use strict';

var _component = require('./../common/component.js');

var _color = require('./../common/color.js');

(0, _component.VantComponent)({
  props: {
    inactive: Boolean,
    percentage: Number,
    pivotText: String,
    pivotColor: String,
    showPivot: {
      type: Boolean,
      value: true
    },
    color: {
      type: String,
      value: _color.BLUE
    },
    textColor: {
      type: String,
      value: '#fff'
    }
  },
  data: {
    pivotWidth: 0,
    progressWidth: 0
  },
  watch: {
    pivotText: 'getWidth',
    showPivot: 'getWidth'
  },
  computed: {
    portionStyle: function portionStyle() {
      var width = (this.data.progressWidth - this.data.pivotWidth) * this.data.percentage / 100 + 'px';
      var background = this.getCurrentColor();
      return "width: " + width + "; background: " + background + "; ";
    },
    pivotStyle: function pivotStyle() {
      var color = this.data.textColor;
      var background = this.data.pivotColor || this.getCurrentColor();
      return "color: " + color + "; background: " + background;
    },
    text: function text() {
      return this.data.pivotText || this.data.percentage + '%';
    }
  },
  mounted: function mounted() {
    this.getWidth();
  },
  methods: {
    getCurrentColor: function getCurrentColor() {
      return this.data.inactive ? '#cacaca' : this.data.color;
    },
    getWidth: function getWidth() {
      var _this = this;

      this.getRect('.van-progress').then(function (rect) {
        _this.set({
          progressWidth: rect.width
        });
      });
      this.getRect('.van-progress__pivot').then(function (rect) {
        _this.set({
          pivotWidth: rect.width || 0
        });
      });
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwiaW5hY3RpdmUiLCJCb29sZWFuIiwicGVyY2VudGFnZSIsIk51bWJlciIsInBpdm90VGV4dCIsIlN0cmluZyIsInBpdm90Q29sb3IiLCJzaG93UGl2b3QiLCJ0eXBlIiwidmFsdWUiLCJjb2xvciIsIkJMVUUiLCJ0ZXh0Q29sb3IiLCJkYXRhIiwicGl2b3RXaWR0aCIsInByb2dyZXNzV2lkdGgiLCJ3YXRjaCIsImNvbXB1dGVkIiwicG9ydGlvblN0eWxlIiwid2lkdGgiLCJiYWNrZ3JvdW5kIiwiZ2V0Q3VycmVudENvbG9yIiwicGl2b3RTdHlsZSIsInRleHQiLCJtb3VudGVkIiwiZ2V0V2lkdGgiLCJtZXRob2RzIiwiX3RoaXMiLCJnZXRSZWN0IiwidGhlbiIsInJlY3QiLCJzZXQiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0EsOEJBQWM7QUFDWkEsU0FBTztBQUNMQyxjQUFVQyxPQURMO0FBRUxDLGdCQUFZQyxNQUZQO0FBR0xDLGVBQVdDLE1BSE47QUFJTEMsZ0JBQVlELE1BSlA7QUFLTEUsZUFBVztBQUNUQyxZQUFNUCxPQURHO0FBRVRRLGFBQU87QUFGRSxLQUxOO0FBU0xDLFdBQU87QUFDTEYsWUFBTUgsTUFERDtBQUVMSSxhQUFPRTtBQUZGLEtBVEY7QUFhTEMsZUFBVztBQUNUSixZQUFNSCxNQURHO0FBRVRJLGFBQU87QUFGRTtBQWJOLEdBREs7QUFtQlpJLFFBQU07QUFDSkMsZ0JBQVksQ0FEUjtBQUVKQyxtQkFBZTtBQUZYLEdBbkJNO0FBdUJaQyxTQUFPO0FBQ0xaLGVBQVcsVUFETjtBQUVMRyxlQUFXO0FBRk4sR0F2Qks7QUEyQlpVLFlBQVU7QUFDUkMsa0JBQWMsU0FBU0EsWUFBVCxHQUF3QjtBQUNwQyxVQUFJQyxRQUFRLENBQUMsS0FBS04sSUFBTCxDQUFVRSxhQUFWLEdBQTBCLEtBQUtGLElBQUwsQ0FBVUMsVUFBckMsSUFBbUQsS0FBS0QsSUFBTCxDQUFVWCxVQUE3RCxHQUEwRSxHQUExRSxHQUFnRixJQUE1RjtBQUNBLFVBQUlrQixhQUFhLEtBQUtDLGVBQUwsRUFBakI7QUFDQSxhQUFPLFlBQVlGLEtBQVosR0FBb0IsZ0JBQXBCLEdBQXVDQyxVQUF2QyxHQUFvRCxJQUEzRDtBQUNELEtBTE87QUFNUkUsZ0JBQVksU0FBU0EsVUFBVCxHQUFzQjtBQUNoQyxVQUFJWixRQUFRLEtBQUtHLElBQUwsQ0FBVUQsU0FBdEI7QUFDQSxVQUFJUSxhQUFhLEtBQUtQLElBQUwsQ0FBVVAsVUFBVixJQUF3QixLQUFLZSxlQUFMLEVBQXpDO0FBQ0EsYUFBTyxZQUFZWCxLQUFaLEdBQW9CLGdCQUFwQixHQUF1Q1UsVUFBOUM7QUFDRCxLQVZPO0FBV1JHLFVBQU0sU0FBU0EsSUFBVCxHQUFnQjtBQUNwQixhQUFPLEtBQUtWLElBQUwsQ0FBVVQsU0FBVixJQUF1QixLQUFLUyxJQUFMLENBQVVYLFVBQVYsR0FBdUIsR0FBckQ7QUFDRDtBQWJPLEdBM0JFO0FBMENac0IsV0FBUyxTQUFTQSxPQUFULEdBQW1CO0FBQzFCLFNBQUtDLFFBQUw7QUFDRCxHQTVDVztBQTZDWkMsV0FBUztBQUNQTCxxQkFBaUIsU0FBU0EsZUFBVCxHQUEyQjtBQUMxQyxhQUFPLEtBQUtSLElBQUwsQ0FBVWIsUUFBVixHQUFxQixTQUFyQixHQUFpQyxLQUFLYSxJQUFMLENBQVVILEtBQWxEO0FBQ0QsS0FITTtBQUlQZSxjQUFVLFNBQVNBLFFBQVQsR0FBb0I7QUFDNUIsVUFBSUUsUUFBUSxJQUFaOztBQUVBLFdBQUtDLE9BQUwsQ0FBYSxlQUFiLEVBQThCQyxJQUE5QixDQUFtQyxVQUFVQyxJQUFWLEVBQWdCO0FBQ2pESCxjQUFNSSxHQUFOLENBQVU7QUFDUmhCLHlCQUFlZSxLQUFLWDtBQURaLFNBQVY7QUFHRCxPQUpEO0FBS0EsV0FBS1MsT0FBTCxDQUFhLHNCQUFiLEVBQXFDQyxJQUFyQyxDQUEwQyxVQUFVQyxJQUFWLEVBQWdCO0FBQ3hESCxjQUFNSSxHQUFOLENBQVU7QUFDUmpCLHNCQUFZZ0IsS0FBS1gsS0FBTCxJQUFjO0FBRGxCLFNBQVY7QUFHRCxPQUpEO0FBS0Q7QUFqQk07QUE3Q0csQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcbmltcG9ydCB7IEJMVUUgfSBmcm9tICcuLi9jb21tb24vY29sb3InO1xuVmFudENvbXBvbmVudCh7XG4gIHByb3BzOiB7XG4gICAgaW5hY3RpdmU6IEJvb2xlYW4sXG4gICAgcGVyY2VudGFnZTogTnVtYmVyLFxuICAgIHBpdm90VGV4dDogU3RyaW5nLFxuICAgIHBpdm90Q29sb3I6IFN0cmluZyxcbiAgICBzaG93UGl2b3Q6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogdHJ1ZVxuICAgIH0sXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiBCTFVFXG4gICAgfSxcbiAgICB0ZXh0Q29sb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnI2ZmZidcbiAgICB9XG4gIH0sXG4gIGRhdGE6IHtcbiAgICBwaXZvdFdpZHRoOiAwLFxuICAgIHByb2dyZXNzV2lkdGg6IDBcbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBwaXZvdFRleHQ6ICdnZXRXaWR0aCcsXG4gICAgc2hvd1Bpdm90OiAnZ2V0V2lkdGgnXG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgcG9ydGlvblN0eWxlOiBmdW5jdGlvbiBwb3J0aW9uU3R5bGUoKSB7XG4gICAgICB2YXIgd2lkdGggPSAodGhpcy5kYXRhLnByb2dyZXNzV2lkdGggLSB0aGlzLmRhdGEucGl2b3RXaWR0aCkgKiB0aGlzLmRhdGEucGVyY2VudGFnZSAvIDEwMCArICdweCc7XG4gICAgICB2YXIgYmFja2dyb3VuZCA9IHRoaXMuZ2V0Q3VycmVudENvbG9yKCk7XG4gICAgICByZXR1cm4gXCJ3aWR0aDogXCIgKyB3aWR0aCArIFwiOyBiYWNrZ3JvdW5kOiBcIiArIGJhY2tncm91bmQgKyBcIjsgXCI7XG4gICAgfSxcbiAgICBwaXZvdFN0eWxlOiBmdW5jdGlvbiBwaXZvdFN0eWxlKCkge1xuICAgICAgdmFyIGNvbG9yID0gdGhpcy5kYXRhLnRleHRDb2xvcjtcbiAgICAgIHZhciBiYWNrZ3JvdW5kID0gdGhpcy5kYXRhLnBpdm90Q29sb3IgfHwgdGhpcy5nZXRDdXJyZW50Q29sb3IoKTtcbiAgICAgIHJldHVybiBcImNvbG9yOiBcIiArIGNvbG9yICsgXCI7IGJhY2tncm91bmQ6IFwiICsgYmFja2dyb3VuZDtcbiAgICB9LFxuICAgIHRleHQ6IGZ1bmN0aW9uIHRleHQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5kYXRhLnBpdm90VGV4dCB8fCB0aGlzLmRhdGEucGVyY2VudGFnZSArICclJztcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5nZXRXaWR0aCgpO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgZ2V0Q3VycmVudENvbG9yOiBmdW5jdGlvbiBnZXRDdXJyZW50Q29sb3IoKSB7XG4gICAgICByZXR1cm4gdGhpcy5kYXRhLmluYWN0aXZlID8gJyNjYWNhY2EnIDogdGhpcy5kYXRhLmNvbG9yO1xuICAgIH0sXG4gICAgZ2V0V2lkdGg6IGZ1bmN0aW9uIGdldFdpZHRoKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdGhpcy5nZXRSZWN0KCcudmFuLXByb2dyZXNzJykudGhlbihmdW5jdGlvbiAocmVjdCkge1xuICAgICAgICBfdGhpcy5zZXQoe1xuICAgICAgICAgIHByb2dyZXNzV2lkdGg6IHJlY3Qud2lkdGhcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZ2V0UmVjdCgnLnZhbi1wcm9ncmVzc19fcGl2b3QnKS50aGVuKGZ1bmN0aW9uIChyZWN0KSB7XG4gICAgICAgIF90aGlzLnNldCh7XG4gICAgICAgICAgcGl2b3RXaWR0aDogcmVjdC53aWR0aCB8fCAwXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59KTsiXX0=