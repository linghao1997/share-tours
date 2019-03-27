'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.observeProps = observeProps;
function observeProps(props) {
  if (!props) {
    return;
  }

  Object.keys(props).forEach(function (key) {
    var prop = props[key];

    if (prop === null || !('type' in prop)) {
      prop = {
        type: prop
      };
    }

    var _prop = prop,
        observer = _prop.observer;

    prop.observer = function () {
      if (observer) {
        if (typeof observer === 'string') {
          observer = this[observer];
        }

        observer.apply(this, arguments);
      }

      this.set();
    };

    props[key] = prop;
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3BzLmpzIl0sIm5hbWVzIjpbIm9ic2VydmVQcm9wcyIsInByb3BzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJwcm9wIiwidHlwZSIsIl9wcm9wIiwib2JzZXJ2ZXIiLCJhcHBseSIsImFyZ3VtZW50cyIsInNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFBZ0JBLFksR0FBQUEsWTtBQUFULFNBQVNBLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQ2xDLE1BQUksQ0FBQ0EsS0FBTCxFQUFZO0FBQ1Y7QUFDRDs7QUFFREMsU0FBT0MsSUFBUCxDQUFZRixLQUFaLEVBQW1CRyxPQUFuQixDQUEyQixVQUFVQyxHQUFWLEVBQWU7QUFDeEMsUUFBSUMsT0FBT0wsTUFBTUksR0FBTixDQUFYOztBQUVBLFFBQUlDLFNBQVMsSUFBVCxJQUFpQixFQUFFLFVBQVVBLElBQVosQ0FBckIsRUFBd0M7QUFDdENBLGFBQU87QUFDTEMsY0FBTUQ7QUFERCxPQUFQO0FBR0Q7O0FBRUQsUUFBSUUsUUFBUUYsSUFBWjtBQUFBLFFBQ0lHLFdBQVdELE1BQU1DLFFBRHJCOztBQUdBSCxTQUFLRyxRQUFMLEdBQWdCLFlBQVk7QUFDMUIsVUFBSUEsUUFBSixFQUFjO0FBQ1osWUFBSSxPQUFPQSxRQUFQLEtBQW9CLFFBQXhCLEVBQWtDO0FBQ2hDQSxxQkFBVyxLQUFLQSxRQUFMLENBQVg7QUFDRDs7QUFFREEsaUJBQVNDLEtBQVQsQ0FBZSxJQUFmLEVBQXFCQyxTQUFyQjtBQUNEOztBQUVELFdBQUtDLEdBQUw7QUFDRCxLQVZEOztBQVlBWCxVQUFNSSxHQUFOLElBQWFDLElBQWI7QUFDRCxHQXpCRDtBQTBCRCIsImZpbGUiOiJwcm9wcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBvYnNlcnZlUHJvcHMocHJvcHMpIHtcbiAgaWYgKCFwcm9wcykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIE9iamVjdC5rZXlzKHByb3BzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgcHJvcCA9IHByb3BzW2tleV07XG5cbiAgICBpZiAocHJvcCA9PT0gbnVsbCB8fCAhKCd0eXBlJyBpbiBwcm9wKSkge1xuICAgICAgcHJvcCA9IHtcbiAgICAgICAgdHlwZTogcHJvcFxuICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgX3Byb3AgPSBwcm9wLFxuICAgICAgICBvYnNlcnZlciA9IF9wcm9wLm9ic2VydmVyO1xuXG4gICAgcHJvcC5vYnNlcnZlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChvYnNlcnZlcikge1xuICAgICAgICBpZiAodHlwZW9mIG9ic2VydmVyID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIG9ic2VydmVyID0gdGhpc1tvYnNlcnZlcl07XG4gICAgICAgIH1cblxuICAgICAgICBvYnNlcnZlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldCgpO1xuICAgIH07XG5cbiAgICBwcm9wc1trZXldID0gcHJvcDtcbiAgfSk7XG59Il19