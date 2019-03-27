'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.observe = observe;

var _behavior = require('./behavior.js');

var _props = require('./props.js');

function observe(vantOptions, options) {
  var watch = vantOptions.watch,
      computed = vantOptions.computed;
  options.behaviors.push(_behavior.behavior);

  if (watch) {
    var props = options.properties || {};
    Object.keys(watch).forEach(function (key) {
      if (key in props) {
        var prop = props[key];

        if (prop === null || !('type' in prop)) {
          prop = {
            type: prop
          };
        }

        prop.observer = watch[key];
        props[key] = prop;
      }
    });
    options.properties = props;
  }

  if (computed) {
    options.methods = options.methods || {};

    options.methods.$options = function () {
      return vantOptions;
    };

    if (options.properties) {
      (0, _props.observeProps)(options.properties);
    }
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm9ic2VydmUiLCJ2YW50T3B0aW9ucyIsIm9wdGlvbnMiLCJ3YXRjaCIsImNvbXB1dGVkIiwiYmVoYXZpb3JzIiwicHVzaCIsImJlaGF2aW9yIiwicHJvcHMiLCJwcm9wZXJ0aWVzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJwcm9wIiwidHlwZSIsIm9ic2VydmVyIiwibWV0aG9kcyIsIiRvcHRpb25zIl0sIm1hcHBpbmdzIjoiOzs7OztRQUVnQkEsTyxHQUFBQSxPOztBQUZoQjs7QUFDQTs7QUFDTyxTQUFTQSxPQUFULENBQWlCQyxXQUFqQixFQUE4QkMsT0FBOUIsRUFBdUM7QUFDNUMsTUFBSUMsUUFBUUYsWUFBWUUsS0FBeEI7QUFBQSxNQUNJQyxXQUFXSCxZQUFZRyxRQUQzQjtBQUVBRixVQUFRRyxTQUFSLENBQWtCQyxJQUFsQixDQUF1QkMsa0JBQXZCOztBQUVBLE1BQUlKLEtBQUosRUFBVztBQUNULFFBQUlLLFFBQVFOLFFBQVFPLFVBQVIsSUFBc0IsRUFBbEM7QUFDQUMsV0FBT0MsSUFBUCxDQUFZUixLQUFaLEVBQW1CUyxPQUFuQixDQUEyQixVQUFVQyxHQUFWLEVBQWU7QUFDeEMsVUFBSUEsT0FBT0wsS0FBWCxFQUFrQjtBQUNoQixZQUFJTSxPQUFPTixNQUFNSyxHQUFOLENBQVg7O0FBRUEsWUFBSUMsU0FBUyxJQUFULElBQWlCLEVBQUUsVUFBVUEsSUFBWixDQUFyQixFQUF3QztBQUN0Q0EsaUJBQU87QUFDTEMsa0JBQU1EO0FBREQsV0FBUDtBQUdEOztBQUVEQSxhQUFLRSxRQUFMLEdBQWdCYixNQUFNVSxHQUFOLENBQWhCO0FBQ0FMLGNBQU1LLEdBQU4sSUFBYUMsSUFBYjtBQUNEO0FBQ0YsS0FiRDtBQWNBWixZQUFRTyxVQUFSLEdBQXFCRCxLQUFyQjtBQUNEOztBQUVELE1BQUlKLFFBQUosRUFBYztBQUNaRixZQUFRZSxPQUFSLEdBQWtCZixRQUFRZSxPQUFSLElBQW1CLEVBQXJDOztBQUVBZixZQUFRZSxPQUFSLENBQWdCQyxRQUFoQixHQUEyQixZQUFZO0FBQ3JDLGFBQU9qQixXQUFQO0FBQ0QsS0FGRDs7QUFJQSxRQUFJQyxRQUFRTyxVQUFaLEVBQXdCO0FBQ3RCLCtCQUFhUCxRQUFRTyxVQUFyQjtBQUNEO0FBQ0Y7QUFDRiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJlaGF2aW9yIH0gZnJvbSAnLi9iZWhhdmlvcic7XG5pbXBvcnQgeyBvYnNlcnZlUHJvcHMgfSBmcm9tICcuL3Byb3BzJztcbmV4cG9ydCBmdW5jdGlvbiBvYnNlcnZlKHZhbnRPcHRpb25zLCBvcHRpb25zKSB7XG4gIHZhciB3YXRjaCA9IHZhbnRPcHRpb25zLndhdGNoLFxuICAgICAgY29tcHV0ZWQgPSB2YW50T3B0aW9ucy5jb21wdXRlZDtcbiAgb3B0aW9ucy5iZWhhdmlvcnMucHVzaChiZWhhdmlvcik7XG5cbiAgaWYgKHdhdGNoKSB7XG4gICAgdmFyIHByb3BzID0gb3B0aW9ucy5wcm9wZXJ0aWVzIHx8IHt9O1xuICAgIE9iamVjdC5rZXlzKHdhdGNoKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGlmIChrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgdmFyIHByb3AgPSBwcm9wc1trZXldO1xuXG4gICAgICAgIGlmIChwcm9wID09PSBudWxsIHx8ICEoJ3R5cGUnIGluIHByb3ApKSB7XG4gICAgICAgICAgcHJvcCA9IHtcbiAgICAgICAgICAgIHR5cGU6IHByb3BcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvcC5vYnNlcnZlciA9IHdhdGNoW2tleV07XG4gICAgICAgIHByb3BzW2tleV0gPSBwcm9wO1xuICAgICAgfVxuICAgIH0pO1xuICAgIG9wdGlvbnMucHJvcGVydGllcyA9IHByb3BzO1xuICB9XG5cbiAgaWYgKGNvbXB1dGVkKSB7XG4gICAgb3B0aW9ucy5tZXRob2RzID0gb3B0aW9ucy5tZXRob2RzIHx8IHt9O1xuXG4gICAgb3B0aW9ucy5tZXRob2RzLiRvcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHZhbnRPcHRpb25zO1xuICAgIH07XG5cbiAgICBpZiAob3B0aW9ucy5wcm9wZXJ0aWVzKSB7XG4gICAgICBvYnNlcnZlUHJvcHMob3B0aW9ucy5wcm9wZXJ0aWVzKTtcbiAgICB9XG4gIH1cbn0iXX0=