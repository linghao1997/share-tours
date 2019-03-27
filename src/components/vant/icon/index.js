'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  props: {
    info: null,
    name: String,
    size: String,
    color: String,
    customStyle: String,
    classPrefix: {
      type: String,
      value: 'van-icon'
    }
  },
  methods: {
    onClick: function onClick() {
      this.$emit('click');
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwiaW5mbyIsIm5hbWUiLCJTdHJpbmciLCJzaXplIiwiY29sb3IiLCJjdXN0b21TdHlsZSIsImNsYXNzUHJlZml4IiwidHlwZSIsInZhbHVlIiwibWV0aG9kcyIsIm9uQ2xpY2siLCIkZW1pdCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSw4QkFBYztBQUNaQSxTQUFPO0FBQ0xDLFVBQU0sSUFERDtBQUVMQyxVQUFNQyxNQUZEO0FBR0xDLFVBQU1ELE1BSEQ7QUFJTEUsV0FBT0YsTUFKRjtBQUtMRyxpQkFBYUgsTUFMUjtBQU1MSSxpQkFBYTtBQUNYQyxZQUFNTCxNQURLO0FBRVhNLGFBQU87QUFGSTtBQU5SLEdBREs7QUFZWkMsV0FBUztBQUNQQyxhQUFTLFNBQVNBLE9BQVQsR0FBbUI7QUFDMUIsV0FBS0MsS0FBTCxDQUFXLE9BQVg7QUFDRDtBQUhNO0FBWkcsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcblZhbnRDb21wb25lbnQoe1xuICBwcm9wczoge1xuICAgIGluZm86IG51bGwsXG4gICAgbmFtZTogU3RyaW5nLFxuICAgIHNpemU6IFN0cmluZyxcbiAgICBjb2xvcjogU3RyaW5nLFxuICAgIGN1c3RvbVN0eWxlOiBTdHJpbmcsXG4gICAgY2xhc3NQcmVmaXg6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAndmFuLWljb24nXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrJyk7XG4gICAgfVxuICB9XG59KTsiXX0=