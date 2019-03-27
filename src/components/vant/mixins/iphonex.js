"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isIPhoneX = null;

function getIsIPhoneX() {
  return new Promise(function (resolve, reject) {
    if (isIPhoneX !== null) {
      resolve(isIPhoneX);
    } else {
      wx.getSystemInfo({
        success: function success(_ref) {
          var model = _ref.model,
              screenHeight = _ref.screenHeight;
          var iphoneX = /iphone x/i.test(model);
          var iphoneNew = /iPhone11/i.test(model) && screenHeight === 812;
          isIPhoneX = iphoneX || iphoneNew;
          resolve(isIPhoneX);
        },
        fail: reject
      });
    }
  });
}

var iphonex = exports.iphonex = Behavior({
  properties: {
    safeAreaInsetBottom: {
      type: Boolean,
      value: true
    }
  },
  created: function created() {
    var _this = this;

    getIsIPhoneX().then(function (isIPhoneX) {
      _this.set({
        isIPhoneX: isIPhoneX
      });
    });
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlwaG9uZXguanMiXSwibmFtZXMiOlsiaXNJUGhvbmVYIiwiZ2V0SXNJUGhvbmVYIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ3eCIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwiX3JlZiIsIm1vZGVsIiwic2NyZWVuSGVpZ2h0IiwiaXBob25lWCIsInRlc3QiLCJpcGhvbmVOZXciLCJmYWlsIiwiaXBob25leCIsIkJlaGF2aW9yIiwicHJvcGVydGllcyIsInNhZmVBcmVhSW5zZXRCb3R0b20iLCJ0eXBlIiwiQm9vbGVhbiIsInZhbHVlIiwiY3JlYXRlZCIsIl90aGlzIiwidGhlbiIsInNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFJQSxZQUFZLElBQWhCOztBQUVBLFNBQVNDLFlBQVQsR0FBd0I7QUFDdEIsU0FBTyxJQUFJQyxPQUFKLENBQVksVUFBVUMsT0FBVixFQUFtQkMsTUFBbkIsRUFBMkI7QUFDNUMsUUFBSUosY0FBYyxJQUFsQixFQUF3QjtBQUN0QkcsY0FBUUgsU0FBUjtBQUNELEtBRkQsTUFFTztBQUNMSyxTQUFHQyxhQUFILENBQWlCO0FBQ2ZDLGlCQUFTLFNBQVNBLE9BQVQsQ0FBaUJDLElBQWpCLEVBQXVCO0FBQzlCLGNBQUlDLFFBQVFELEtBQUtDLEtBQWpCO0FBQUEsY0FDSUMsZUFBZUYsS0FBS0UsWUFEeEI7QUFFQSxjQUFJQyxVQUFVLFlBQVlDLElBQVosQ0FBaUJILEtBQWpCLENBQWQ7QUFDQSxjQUFJSSxZQUFZLFlBQVlELElBQVosQ0FBaUJILEtBQWpCLEtBQTJCQyxpQkFBaUIsR0FBNUQ7QUFDQVYsc0JBQVlXLFdBQVdFLFNBQXZCO0FBQ0FWLGtCQUFRSCxTQUFSO0FBQ0QsU0FSYztBQVNmYyxjQUFNVjtBQVRTLE9BQWpCO0FBV0Q7QUFDRixHQWhCTSxDQUFQO0FBaUJEOztBQUVNLElBQUlXLDRCQUFVQyxTQUFTO0FBQzVCQyxjQUFZO0FBQ1ZDLHlCQUFxQjtBQUNuQkMsWUFBTUMsT0FEYTtBQUVuQkMsYUFBTztBQUZZO0FBRFgsR0FEZ0I7QUFPNUJDLFdBQVMsU0FBU0EsT0FBVCxHQUFtQjtBQUMxQixRQUFJQyxRQUFRLElBQVo7O0FBRUF0QixtQkFBZXVCLElBQWYsQ0FBb0IsVUFBVXhCLFNBQVYsRUFBcUI7QUFDdkN1QixZQUFNRSxHQUFOLENBQVU7QUFDUnpCLG1CQUFXQTtBQURILE9BQVY7QUFHRCxLQUpEO0FBS0Q7QUFmMkIsQ0FBVCxDQUFkIiwiZmlsZSI6ImlwaG9uZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaXNJUGhvbmVYID0gbnVsbDtcblxuZnVuY3Rpb24gZ2V0SXNJUGhvbmVYKCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGlmIChpc0lQaG9uZVggIT09IG51bGwpIHtcbiAgICAgIHJlc29sdmUoaXNJUGhvbmVYKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd3guZ2V0U3lzdGVtSW5mbyh7XG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MoX3JlZikge1xuICAgICAgICAgIHZhciBtb2RlbCA9IF9yZWYubW9kZWwsXG4gICAgICAgICAgICAgIHNjcmVlbkhlaWdodCA9IF9yZWYuc2NyZWVuSGVpZ2h0O1xuICAgICAgICAgIHZhciBpcGhvbmVYID0gL2lwaG9uZSB4L2kudGVzdChtb2RlbCk7XG4gICAgICAgICAgdmFyIGlwaG9uZU5ldyA9IC9pUGhvbmUxMS9pLnRlc3QobW9kZWwpICYmIHNjcmVlbkhlaWdodCA9PT0gODEyO1xuICAgICAgICAgIGlzSVBob25lWCA9IGlwaG9uZVggfHwgaXBob25lTmV3O1xuICAgICAgICAgIHJlc29sdmUoaXNJUGhvbmVYKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogcmVqZWN0XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgdmFyIGlwaG9uZXggPSBCZWhhdmlvcih7XG4gIHByb3BlcnRpZXM6IHtcbiAgICBzYWZlQXJlYUluc2V0Qm90dG9tOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IHRydWVcbiAgICB9XG4gIH0sXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uIGNyZWF0ZWQoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGdldElzSVBob25lWCgpLnRoZW4oZnVuY3Rpb24gKGlzSVBob25lWCkge1xuICAgICAgX3RoaXMuc2V0KHtcbiAgICAgICAgaXNJUGhvbmVYOiBpc0lQaG9uZVhcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59KTsiXX0=