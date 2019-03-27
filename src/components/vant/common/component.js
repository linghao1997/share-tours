'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VantComponent = undefined;

var _basic = require('./../mixins/basic.js');

var _index = require('./../mixins/observer/index.js');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function mapKeys(source, target, map) {
  Object.keys(map).forEach(function (key) {
    if (source[key]) {
      target[map[key]] = source[key];
    }
  });
}

function VantComponent(vantOptions) {
  if (vantOptions === void 0) {
    vantOptions = {};
  }

  var options = {};
  mapKeys(vantOptions, options, {
    data: 'data',
    props: 'properties',
    mixins: 'behaviors',
    methods: 'methods',
    beforeCreate: 'created',
    created: 'attached',
    mounted: 'ready',
    relations: 'relations',
    destroyed: 'detached',
    classes: 'externalClasses'
  });
  var _vantOptions = vantOptions,
      relation = _vantOptions.relation;

  if (relation) {
    options.relations = Object.assign(options.relations || {}, _defineProperty({}, "../" + relation.name + "/index", relation));
  } // add default externalClasses


  options.externalClasses = options.externalClasses || [];
  options.externalClasses.push('custom-class'); // add default behaviors

  options.behaviors = options.behaviors || [];
  options.behaviors.push(_basic.basic); // map field to form-field behavior

  if (vantOptions.field) {
    options.behaviors.push('wx://form-field');
  } // add default options


  options.options = {
    multipleSlots: true,
    addGlobalClass: true
  };
  (0, _index.observe)(vantOptions, options);
  Component(options);
}

exports.VantComponent = VantComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJtYXBLZXlzIiwic291cmNlIiwidGFyZ2V0IiwibWFwIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJWYW50Q29tcG9uZW50IiwidmFudE9wdGlvbnMiLCJvcHRpb25zIiwiZGF0YSIsInByb3BzIiwibWl4aW5zIiwibWV0aG9kcyIsImJlZm9yZUNyZWF0ZSIsImNyZWF0ZWQiLCJtb3VudGVkIiwicmVsYXRpb25zIiwiZGVzdHJveWVkIiwiY2xhc3NlcyIsIl92YW50T3B0aW9ucyIsInJlbGF0aW9uIiwiYXNzaWduIiwibmFtZSIsImV4dGVybmFsQ2xhc3NlcyIsInB1c2giLCJiZWhhdmlvcnMiLCJiYXNpYyIsImZpZWxkIiwibXVsdGlwbGVTbG90cyIsImFkZEdsb2JhbENsYXNzIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFQSxTQUFTQSxPQUFULENBQWlCQyxNQUFqQixFQUF5QkMsTUFBekIsRUFBaUNDLEdBQWpDLEVBQXNDO0FBQ3BDQyxTQUFPQyxJQUFQLENBQVlGLEdBQVosRUFBaUJHLE9BQWpCLENBQXlCLFVBQVVDLEdBQVYsRUFBZTtBQUN0QyxRQUFJTixPQUFPTSxHQUFQLENBQUosRUFBaUI7QUFDZkwsYUFBT0MsSUFBSUksR0FBSixDQUFQLElBQW1CTixPQUFPTSxHQUFQLENBQW5CO0FBQ0Q7QUFDRixHQUpEO0FBS0Q7O0FBRUQsU0FBU0MsYUFBVCxDQUF1QkMsV0FBdkIsRUFBb0M7QUFDbEMsTUFBSUEsZ0JBQWdCLEtBQUssQ0FBekIsRUFBNEI7QUFDMUJBLGtCQUFjLEVBQWQ7QUFDRDs7QUFFRCxNQUFJQyxVQUFVLEVBQWQ7QUFDQVYsVUFBUVMsV0FBUixFQUFxQkMsT0FBckIsRUFBOEI7QUFDNUJDLFVBQU0sTUFEc0I7QUFFNUJDLFdBQU8sWUFGcUI7QUFHNUJDLFlBQVEsV0FIb0I7QUFJNUJDLGFBQVMsU0FKbUI7QUFLNUJDLGtCQUFjLFNBTGM7QUFNNUJDLGFBQVMsVUFObUI7QUFPNUJDLGFBQVMsT0FQbUI7QUFRNUJDLGVBQVcsV0FSaUI7QUFTNUJDLGVBQVcsVUFUaUI7QUFVNUJDLGFBQVM7QUFWbUIsR0FBOUI7QUFZQSxNQUFJQyxlQUFlWixXQUFuQjtBQUFBLE1BQ0lhLFdBQVdELGFBQWFDLFFBRDVCOztBQUdBLE1BQUlBLFFBQUosRUFBYztBQUNaWixZQUFRUSxTQUFSLEdBQW9CZCxPQUFPbUIsTUFBUCxDQUFjYixRQUFRUSxTQUFSLElBQXFCLEVBQW5DLHNCQUNqQixRQUFRSSxTQUFTRSxJQUFqQixHQUF3QixRQURQLEVBQ2tCRixRQURsQixFQUFwQjtBQUdELEdBekJpQyxDQXlCaEM7OztBQUdGWixVQUFRZSxlQUFSLEdBQTBCZixRQUFRZSxlQUFSLElBQTJCLEVBQXJEO0FBQ0FmLFVBQVFlLGVBQVIsQ0FBd0JDLElBQXhCLENBQTZCLGNBQTdCLEVBN0JrQyxDQTZCWTs7QUFFOUNoQixVQUFRaUIsU0FBUixHQUFvQmpCLFFBQVFpQixTQUFSLElBQXFCLEVBQXpDO0FBQ0FqQixVQUFRaUIsU0FBUixDQUFrQkQsSUFBbEIsQ0FBdUJFLFlBQXZCLEVBaENrQyxDQWdDSDs7QUFFL0IsTUFBSW5CLFlBQVlvQixLQUFoQixFQUF1QjtBQUNyQm5CLFlBQVFpQixTQUFSLENBQWtCRCxJQUFsQixDQUF1QixpQkFBdkI7QUFDRCxHQXBDaUMsQ0FvQ2hDOzs7QUFHRmhCLFVBQVFBLE9BQVIsR0FBa0I7QUFDaEJvQixtQkFBZSxJQURDO0FBRWhCQyxvQkFBZ0I7QUFGQSxHQUFsQjtBQUlBLHNCQUFRdEIsV0FBUixFQUFxQkMsT0FBckI7QUFDQXNCLFlBQVV0QixPQUFWO0FBQ0Q7O1FBRVFGLGEsR0FBQUEsYSIsImZpbGUiOiJjb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBiYXNpYyB9IGZyb20gJy4uL21peGlucy9iYXNpYyc7XG5pbXBvcnQgeyBvYnNlcnZlIH0gZnJvbSAnLi4vbWl4aW5zL29ic2VydmVyL2luZGV4JztcblxuZnVuY3Rpb24gbWFwS2V5cyhzb3VyY2UsIHRhcmdldCwgbWFwKSB7XG4gIE9iamVjdC5rZXlzKG1hcCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKHNvdXJjZVtrZXldKSB7XG4gICAgICB0YXJnZXRbbWFwW2tleV1dID0gc291cmNlW2tleV07XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gVmFudENvbXBvbmVudCh2YW50T3B0aW9ucykge1xuICBpZiAodmFudE9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIHZhbnRPcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgb3B0aW9ucyA9IHt9O1xuICBtYXBLZXlzKHZhbnRPcHRpb25zLCBvcHRpb25zLCB7XG4gICAgZGF0YTogJ2RhdGEnLFxuICAgIHByb3BzOiAncHJvcGVydGllcycsXG4gICAgbWl4aW5zOiAnYmVoYXZpb3JzJyxcbiAgICBtZXRob2RzOiAnbWV0aG9kcycsXG4gICAgYmVmb3JlQ3JlYXRlOiAnY3JlYXRlZCcsXG4gICAgY3JlYXRlZDogJ2F0dGFjaGVkJyxcbiAgICBtb3VudGVkOiAncmVhZHknLFxuICAgIHJlbGF0aW9uczogJ3JlbGF0aW9ucycsXG4gICAgZGVzdHJveWVkOiAnZGV0YWNoZWQnLFxuICAgIGNsYXNzZXM6ICdleHRlcm5hbENsYXNzZXMnXG4gIH0pO1xuICB2YXIgX3ZhbnRPcHRpb25zID0gdmFudE9wdGlvbnMsXG4gICAgICByZWxhdGlvbiA9IF92YW50T3B0aW9ucy5yZWxhdGlvbjtcblxuICBpZiAocmVsYXRpb24pIHtcbiAgICBvcHRpb25zLnJlbGF0aW9ucyA9IE9iamVjdC5hc3NpZ24ob3B0aW9ucy5yZWxhdGlvbnMgfHwge30sIHtcbiAgICAgIFtcIi4uL1wiICsgcmVsYXRpb24ubmFtZSArIFwiL2luZGV4XCJdOiByZWxhdGlvblxuICAgIH0pO1xuICB9IC8vIGFkZCBkZWZhdWx0IGV4dGVybmFsQ2xhc3Nlc1xuXG5cbiAgb3B0aW9ucy5leHRlcm5hbENsYXNzZXMgPSBvcHRpb25zLmV4dGVybmFsQ2xhc3NlcyB8fCBbXTtcbiAgb3B0aW9ucy5leHRlcm5hbENsYXNzZXMucHVzaCgnY3VzdG9tLWNsYXNzJyk7IC8vIGFkZCBkZWZhdWx0IGJlaGF2aW9yc1xuXG4gIG9wdGlvbnMuYmVoYXZpb3JzID0gb3B0aW9ucy5iZWhhdmlvcnMgfHwgW107XG4gIG9wdGlvbnMuYmVoYXZpb3JzLnB1c2goYmFzaWMpOyAvLyBtYXAgZmllbGQgdG8gZm9ybS1maWVsZCBiZWhhdmlvclxuXG4gIGlmICh2YW50T3B0aW9ucy5maWVsZCkge1xuICAgIG9wdGlvbnMuYmVoYXZpb3JzLnB1c2goJ3d4Oi8vZm9ybS1maWVsZCcpO1xuICB9IC8vIGFkZCBkZWZhdWx0IG9wdGlvbnNcblxuXG4gIG9wdGlvbnMub3B0aW9ucyA9IHtcbiAgICBtdWx0aXBsZVNsb3RzOiB0cnVlLFxuICAgIGFkZEdsb2JhbENsYXNzOiB0cnVlXG4gIH07XG4gIG9ic2VydmUodmFudE9wdGlvbnMsIG9wdGlvbnMpO1xuICBDb21wb25lbnQob3B0aW9ucyk7XG59XG5cbmV4cG9ydCB7IFZhbnRDb21wb25lbnQgfTsiXX0=