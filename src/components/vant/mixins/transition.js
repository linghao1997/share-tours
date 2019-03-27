'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var transition = exports.transition = function transition(showDefaultValue) {
  return Behavior({
    properties: {
      customStyle: String,
      show: {
        type: Boolean,
        value: showDefaultValue,
        observer: 'observeShow'
      },
      duration: {
        type: Number,
        value: 300
      }
    },
    data: {
      type: '',
      inited: false,
      display: false,
      supportAnimation: true
    },
    attached: function attached() {
      if (this.data.show) {
        this.show();
      }

      this.detectSupport();
    },
    methods: {
      detectSupport: function detectSupport() {
        var _this = this;

        wx.getSystemInfo({
          success: function success(info) {
            if (info && info.system && info.system.indexOf('iOS 8') === 0) {
              _this.set({
                supportAnimation: false
              });
            }
          }
        });
      },
      observeShow: function observeShow(value) {
        if (value) {
          this.show();
        } else {
          if (this.data.supportAnimation) {
            this.set({
              type: 'leave'
            });
          } else {
            this.set({
              display: false
            });
          }
        }
      },
      show: function show() {
        this.set({
          inited: true,
          display: true,
          type: 'enter'
        });
      },
      onAnimationEnd: function onAnimationEnd() {
        if (!this.data.show) {
          this.set({
            display: false
          });
        }
      }
    }
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zaXRpb24uanMiXSwibmFtZXMiOlsidHJhbnNpdGlvbiIsInNob3dEZWZhdWx0VmFsdWUiLCJCZWhhdmlvciIsInByb3BlcnRpZXMiLCJjdXN0b21TdHlsZSIsIlN0cmluZyIsInNob3ciLCJ0eXBlIiwiQm9vbGVhbiIsInZhbHVlIiwib2JzZXJ2ZXIiLCJkdXJhdGlvbiIsIk51bWJlciIsImRhdGEiLCJpbml0ZWQiLCJkaXNwbGF5Iiwic3VwcG9ydEFuaW1hdGlvbiIsImF0dGFjaGVkIiwiZGV0ZWN0U3VwcG9ydCIsIm1ldGhvZHMiLCJfdGhpcyIsInd4IiwiZ2V0U3lzdGVtSW5mbyIsInN1Y2Nlc3MiLCJpbmZvIiwic3lzdGVtIiwiaW5kZXhPZiIsInNldCIsIm9ic2VydmVTaG93Iiwib25BbmltYXRpb25FbmQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sSUFBSUEsa0NBQWEsU0FBU0EsVUFBVCxDQUFvQkMsZ0JBQXBCLEVBQXNDO0FBQzVELFNBQU9DLFNBQVM7QUFDZEMsZ0JBQVk7QUFDVkMsbUJBQWFDLE1BREg7QUFFVkMsWUFBTTtBQUNKQyxjQUFNQyxPQURGO0FBRUpDLGVBQU9SLGdCQUZIO0FBR0pTLGtCQUFVO0FBSE4sT0FGSTtBQU9WQyxnQkFBVTtBQUNSSixjQUFNSyxNQURFO0FBRVJILGVBQU87QUFGQztBQVBBLEtBREU7QUFhZEksVUFBTTtBQUNKTixZQUFNLEVBREY7QUFFSk8sY0FBUSxLQUZKO0FBR0pDLGVBQVMsS0FITDtBQUlKQyx3QkFBa0I7QUFKZCxLQWJRO0FBbUJkQyxjQUFVLFNBQVNBLFFBQVQsR0FBb0I7QUFDNUIsVUFBSSxLQUFLSixJQUFMLENBQVVQLElBQWQsRUFBb0I7QUFDbEIsYUFBS0EsSUFBTDtBQUNEOztBQUVELFdBQUtZLGFBQUw7QUFDRCxLQXpCYTtBQTBCZEMsYUFBUztBQUNQRCxxQkFBZSxTQUFTQSxhQUFULEdBQXlCO0FBQ3RDLFlBQUlFLFFBQVEsSUFBWjs7QUFFQUMsV0FBR0MsYUFBSCxDQUFpQjtBQUNmQyxtQkFBUyxTQUFTQSxPQUFULENBQWlCQyxJQUFqQixFQUF1QjtBQUM5QixnQkFBSUEsUUFBUUEsS0FBS0MsTUFBYixJQUF1QkQsS0FBS0MsTUFBTCxDQUFZQyxPQUFaLENBQW9CLE9BQXBCLE1BQWlDLENBQTVELEVBQStEO0FBQzdETixvQkFBTU8sR0FBTixDQUFVO0FBQ1JYLGtDQUFrQjtBQURWLGVBQVY7QUFHRDtBQUNGO0FBUGMsU0FBakI7QUFTRCxPQWJNO0FBY1BZLG1CQUFhLFNBQVNBLFdBQVQsQ0FBcUJuQixLQUFyQixFQUE0QjtBQUN2QyxZQUFJQSxLQUFKLEVBQVc7QUFDVCxlQUFLSCxJQUFMO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsY0FBSSxLQUFLTyxJQUFMLENBQVVHLGdCQUFkLEVBQWdDO0FBQzlCLGlCQUFLVyxHQUFMLENBQVM7QUFDUHBCLG9CQUFNO0FBREMsYUFBVDtBQUdELFdBSkQsTUFJTztBQUNMLGlCQUFLb0IsR0FBTCxDQUFTO0FBQ1BaLHVCQUFTO0FBREYsYUFBVDtBQUdEO0FBQ0Y7QUFDRixPQTVCTTtBQTZCUFQsWUFBTSxTQUFTQSxJQUFULEdBQWdCO0FBQ3BCLGFBQUtxQixHQUFMLENBQVM7QUFDUGIsa0JBQVEsSUFERDtBQUVQQyxtQkFBUyxJQUZGO0FBR1BSLGdCQUFNO0FBSEMsU0FBVDtBQUtELE9BbkNNO0FBb0NQc0Isc0JBQWdCLFNBQVNBLGNBQVQsR0FBMEI7QUFDeEMsWUFBSSxDQUFDLEtBQUtoQixJQUFMLENBQVVQLElBQWYsRUFBcUI7QUFDbkIsZUFBS3FCLEdBQUwsQ0FBUztBQUNQWixxQkFBUztBQURGLFdBQVQ7QUFHRDtBQUNGO0FBMUNNO0FBMUJLLEdBQVQsQ0FBUDtBQXVFRCxDQXhFTSIsImZpbGUiOiJ0cmFuc2l0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHZhciB0cmFuc2l0aW9uID0gZnVuY3Rpb24gdHJhbnNpdGlvbihzaG93RGVmYXVsdFZhbHVlKSB7XG4gIHJldHVybiBCZWhhdmlvcih7XG4gICAgcHJvcGVydGllczoge1xuICAgICAgY3VzdG9tU3R5bGU6IFN0cmluZyxcbiAgICAgIHNob3c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IHNob3dEZWZhdWx0VmFsdWUsXG4gICAgICAgIG9ic2VydmVyOiAnb2JzZXJ2ZVNob3cnXG4gICAgICB9LFxuICAgICAgZHVyYXRpb246IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogMzAwXG4gICAgICB9XG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICB0eXBlOiAnJyxcbiAgICAgIGluaXRlZDogZmFsc2UsXG4gICAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICAgIHN1cHBvcnRBbmltYXRpb246IHRydWVcbiAgICB9LFxuICAgIGF0dGFjaGVkOiBmdW5jdGlvbiBhdHRhY2hlZCgpIHtcbiAgICAgIGlmICh0aGlzLmRhdGEuc2hvdykge1xuICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kZXRlY3RTdXBwb3J0KCk7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICBkZXRlY3RTdXBwb3J0OiBmdW5jdGlvbiBkZXRlY3RTdXBwb3J0KCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIHd4LmdldFN5c3RlbUluZm8oe1xuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MoaW5mbykge1xuICAgICAgICAgICAgaWYgKGluZm8gJiYgaW5mby5zeXN0ZW0gJiYgaW5mby5zeXN0ZW0uaW5kZXhPZignaU9TIDgnKSA9PT0gMCkge1xuICAgICAgICAgICAgICBfdGhpcy5zZXQoe1xuICAgICAgICAgICAgICAgIHN1cHBvcnRBbmltYXRpb246IGZhbHNlXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgb2JzZXJ2ZVNob3c6IGZ1bmN0aW9uIG9ic2VydmVTaG93KHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0aGlzLmRhdGEuc3VwcG9ydEFuaW1hdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zZXQoe1xuICAgICAgICAgICAgICB0eXBlOiAnbGVhdmUnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXQoe1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc2hvdzogZnVuY3Rpb24gc2hvdygpIHtcbiAgICAgICAgdGhpcy5zZXQoe1xuICAgICAgICAgIGluaXRlZDogdHJ1ZSxcbiAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgIHR5cGU6ICdlbnRlcidcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgb25BbmltYXRpb25FbmQ6IGZ1bmN0aW9uIG9uQW5pbWF0aW9uRW5kKCkge1xuICAgICAgICBpZiAoIXRoaXMuZGF0YS5zaG93KSB7XG4gICAgICAgICAgdGhpcy5zZXQoe1xuICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG59OyJdfQ==