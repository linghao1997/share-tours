'use strict';

var _component = require('./../common/component.js');

var _color = require('./../common/color.js');

(0, _component.VantComponent)({
  props: {
    icon: String,
    steps: Array,
    active: Number,
    direction: {
      type: String,
      value: 'horizontal'
    },
    activeColor: {
      type: String,
      value: _color.GREEN
    }
  },
  watch: {
    steps: 'formatSteps',
    active: 'formatSteps'
  },
  created: function created() {
    this.formatSteps();
  },
  methods: {
    formatSteps: function formatSteps() {
      var _this = this;

      var steps = this.data.steps;
      steps.forEach(function (step, index) {
        step.status = _this.getStatus(index);
      });
      this.set({
        steps: steps
      });
    },
    getStatus: function getStatus(index) {
      var active = this.data.active;

      if (index < active) {
        return 'finish';
      } else if (index === active) {
        return 'process';
      }

      return '';
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwiaWNvbiIsIlN0cmluZyIsInN0ZXBzIiwiQXJyYXkiLCJhY3RpdmUiLCJOdW1iZXIiLCJkaXJlY3Rpb24iLCJ0eXBlIiwidmFsdWUiLCJhY3RpdmVDb2xvciIsIkdSRUVOIiwid2F0Y2giLCJjcmVhdGVkIiwiZm9ybWF0U3RlcHMiLCJtZXRob2RzIiwiX3RoaXMiLCJkYXRhIiwiZm9yRWFjaCIsInN0ZXAiLCJpbmRleCIsInN0YXR1cyIsImdldFN0YXR1cyIsInNldCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQSw4QkFBYztBQUNaQSxTQUFPO0FBQ0xDLFVBQU1DLE1BREQ7QUFFTEMsV0FBT0MsS0FGRjtBQUdMQyxZQUFRQyxNQUhIO0FBSUxDLGVBQVc7QUFDVEMsWUFBTU4sTUFERztBQUVUTyxhQUFPO0FBRkUsS0FKTjtBQVFMQyxpQkFBYTtBQUNYRixZQUFNTixNQURLO0FBRVhPLGFBQU9FO0FBRkk7QUFSUixHQURLO0FBY1pDLFNBQU87QUFDTFQsV0FBTyxhQURGO0FBRUxFLFlBQVE7QUFGSCxHQWRLO0FBa0JaUSxXQUFTLFNBQVNBLE9BQVQsR0FBbUI7QUFDMUIsU0FBS0MsV0FBTDtBQUNELEdBcEJXO0FBcUJaQyxXQUFTO0FBQ1BELGlCQUFhLFNBQVNBLFdBQVQsR0FBdUI7QUFDbEMsVUFBSUUsUUFBUSxJQUFaOztBQUVBLFVBQUliLFFBQVEsS0FBS2MsSUFBTCxDQUFVZCxLQUF0QjtBQUNBQSxZQUFNZSxPQUFOLENBQWMsVUFBVUMsSUFBVixFQUFnQkMsS0FBaEIsRUFBdUI7QUFDbkNELGFBQUtFLE1BQUwsR0FBY0wsTUFBTU0sU0FBTixDQUFnQkYsS0FBaEIsQ0FBZDtBQUNELE9BRkQ7QUFHQSxXQUFLRyxHQUFMLENBQVM7QUFDUHBCLGVBQU9BO0FBREEsT0FBVDtBQUdELEtBWE07QUFZUG1CLGVBQVcsU0FBU0EsU0FBVCxDQUFtQkYsS0FBbkIsRUFBMEI7QUFDbkMsVUFBSWYsU0FBUyxLQUFLWSxJQUFMLENBQVVaLE1BQXZCOztBQUVBLFVBQUllLFFBQVFmLE1BQVosRUFBb0I7QUFDbEIsZUFBTyxRQUFQO0FBQ0QsT0FGRCxNQUVPLElBQUllLFVBQVVmLE1BQWQsRUFBc0I7QUFDM0IsZUFBTyxTQUFQO0FBQ0Q7O0FBRUQsYUFBTyxFQUFQO0FBQ0Q7QUF0Qk07QUFyQkcsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcbmltcG9ydCB7IEdSRUVOIH0gZnJvbSAnLi4vY29tbW9uL2NvbG9yJztcblZhbnRDb21wb25lbnQoe1xuICBwcm9wczoge1xuICAgIGljb246IFN0cmluZyxcbiAgICBzdGVwczogQXJyYXksXG4gICAgYWN0aXZlOiBOdW1iZXIsXG4gICAgZGlyZWN0aW9uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJ2hvcml6b250YWwnXG4gICAgfSxcbiAgICBhY3RpdmVDb2xvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6IEdSRUVOXG4gICAgfVxuICB9LFxuICB3YXRjaDoge1xuICAgIHN0ZXBzOiAnZm9ybWF0U3RlcHMnLFxuICAgIGFjdGl2ZTogJ2Zvcm1hdFN0ZXBzJ1xuICB9LFxuICBjcmVhdGVkOiBmdW5jdGlvbiBjcmVhdGVkKCkge1xuICAgIHRoaXMuZm9ybWF0U3RlcHMoKTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGZvcm1hdFN0ZXBzOiBmdW5jdGlvbiBmb3JtYXRTdGVwcygpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHZhciBzdGVwcyA9IHRoaXMuZGF0YS5zdGVwcztcbiAgICAgIHN0ZXBzLmZvckVhY2goZnVuY3Rpb24gKHN0ZXAsIGluZGV4KSB7XG4gICAgICAgIHN0ZXAuc3RhdHVzID0gX3RoaXMuZ2V0U3RhdHVzKGluZGV4KTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zZXQoe1xuICAgICAgICBzdGVwczogc3RlcHNcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZ2V0U3RhdHVzOiBmdW5jdGlvbiBnZXRTdGF0dXMoaW5kZXgpIHtcbiAgICAgIHZhciBhY3RpdmUgPSB0aGlzLmRhdGEuYWN0aXZlO1xuXG4gICAgICBpZiAoaW5kZXggPCBhY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuICdmaW5pc2gnO1xuICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gYWN0aXZlKSB7XG4gICAgICAgIHJldHVybiAncHJvY2Vzcyc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cbn0pOyJdfQ==