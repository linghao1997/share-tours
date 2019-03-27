'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  field: true,
  props: {
    value: null,
    title: String,
    border: Boolean,
    checked: Boolean,
    loading: Boolean,
    disabled: Boolean,
    activeColor: String,
    inactiveColor: String,
    size: {
      type: String,
      value: '24px'
    },
    activeValue: {
      type: null,
      value: true
    },
    inactiveValue: {
      type: null,
      value: false
    }
  },
  watch: {
    checked: function checked(value) {
      this.set({
        value: value
      });
    }
  },
  created: function created() {
    this.set({
      value: this.data.checked
    });
  },
  methods: {
    onChange: function onChange(event) {
      this.$emit('change', event.detail);
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwicHJvcHMiLCJ2YWx1ZSIsInRpdGxlIiwiU3RyaW5nIiwiYm9yZGVyIiwiQm9vbGVhbiIsImNoZWNrZWQiLCJsb2FkaW5nIiwiZGlzYWJsZWQiLCJhY3RpdmVDb2xvciIsImluYWN0aXZlQ29sb3IiLCJzaXplIiwidHlwZSIsImFjdGl2ZVZhbHVlIiwiaW5hY3RpdmVWYWx1ZSIsIndhdGNoIiwic2V0IiwiY3JlYXRlZCIsImRhdGEiLCJtZXRob2RzIiwib25DaGFuZ2UiLCJldmVudCIsIiRlbWl0IiwiZGV0YWlsIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLDhCQUFjO0FBQ1pBLFNBQU8sSUFESztBQUVaQyxTQUFPO0FBQ0xDLFdBQU8sSUFERjtBQUVMQyxXQUFPQyxNQUZGO0FBR0xDLFlBQVFDLE9BSEg7QUFJTEMsYUFBU0QsT0FKSjtBQUtMRSxhQUFTRixPQUxKO0FBTUxHLGNBQVVILE9BTkw7QUFPTEksaUJBQWFOLE1BUFI7QUFRTE8sbUJBQWVQLE1BUlY7QUFTTFEsVUFBTTtBQUNKQyxZQUFNVCxNQURGO0FBRUpGLGFBQU87QUFGSCxLQVREO0FBYUxZLGlCQUFhO0FBQ1hELFlBQU0sSUFESztBQUVYWCxhQUFPO0FBRkksS0FiUjtBQWlCTGEsbUJBQWU7QUFDYkYsWUFBTSxJQURPO0FBRWJYLGFBQU87QUFGTTtBQWpCVixHQUZLO0FBd0JaYyxTQUFPO0FBQ0xULGFBQVMsU0FBU0EsT0FBVCxDQUFpQkwsS0FBakIsRUFBd0I7QUFDL0IsV0FBS2UsR0FBTCxDQUFTO0FBQ1BmLGVBQU9BO0FBREEsT0FBVDtBQUdEO0FBTEksR0F4Qks7QUErQlpnQixXQUFTLFNBQVNBLE9BQVQsR0FBbUI7QUFDMUIsU0FBS0QsR0FBTCxDQUFTO0FBQ1BmLGFBQU8sS0FBS2lCLElBQUwsQ0FBVVo7QUFEVixLQUFUO0FBR0QsR0FuQ1c7QUFvQ1phLFdBQVM7QUFDUEMsY0FBVSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUNqQyxXQUFLQyxLQUFMLENBQVcsUUFBWCxFQUFxQkQsTUFBTUUsTUFBM0I7QUFDRDtBQUhNO0FBcENHLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5WYW50Q29tcG9uZW50KHtcbiAgZmllbGQ6IHRydWUsXG4gIHByb3BzOiB7XG4gICAgdmFsdWU6IG51bGwsXG4gICAgdGl0bGU6IFN0cmluZyxcbiAgICBib3JkZXI6IEJvb2xlYW4sXG4gICAgY2hlY2tlZDogQm9vbGVhbixcbiAgICBsb2FkaW5nOiBCb29sZWFuLFxuICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgIGFjdGl2ZUNvbG9yOiBTdHJpbmcsXG4gICAgaW5hY3RpdmVDb2xvcjogU3RyaW5nLFxuICAgIHNpemU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnMjRweCdcbiAgICB9LFxuICAgIGFjdGl2ZVZhbHVlOiB7XG4gICAgICB0eXBlOiBudWxsLFxuICAgICAgdmFsdWU6IHRydWVcbiAgICB9LFxuICAgIGluYWN0aXZlVmFsdWU6IHtcbiAgICAgIHR5cGU6IG51bGwsXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgY2hlY2tlZDogZnVuY3Rpb24gY2hlY2tlZCh2YWx1ZSkge1xuICAgICAgdGhpcy5zZXQoe1xuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgY3JlYXRlZDogZnVuY3Rpb24gY3JlYXRlZCgpIHtcbiAgICB0aGlzLnNldCh7XG4gICAgICB2YWx1ZTogdGhpcy5kYXRhLmNoZWNrZWRcbiAgICB9KTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShldmVudCkge1xuICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgZXZlbnQuZGV0YWlsKTtcbiAgICB9XG4gIH1cbn0pOyJdfQ==