'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  classes: ['title-class'],
  props: {
    title: String,
    fixed: Boolean,
    leftText: String,
    rightText: String,
    leftArrow: Boolean,
    border: {
      type: Boolean,
      value: true
    },
    zIndex: {
      type: Number,
      value: 1
    }
  },
  methods: {
    onClickLeft: function onClickLeft() {
      this.$emit('click-left');
    },
    onClickRight: function onClickRight() {
      this.$emit('click-right');
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNsYXNzZXMiLCJwcm9wcyIsInRpdGxlIiwiU3RyaW5nIiwiZml4ZWQiLCJCb29sZWFuIiwibGVmdFRleHQiLCJyaWdodFRleHQiLCJsZWZ0QXJyb3ciLCJib3JkZXIiLCJ0eXBlIiwidmFsdWUiLCJ6SW5kZXgiLCJOdW1iZXIiLCJtZXRob2RzIiwib25DbGlja0xlZnQiLCIkZW1pdCIsIm9uQ2xpY2tSaWdodCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSw4QkFBYztBQUNaQSxXQUFTLENBQUMsYUFBRCxDQURHO0FBRVpDLFNBQU87QUFDTEMsV0FBT0MsTUFERjtBQUVMQyxXQUFPQyxPQUZGO0FBR0xDLGNBQVVILE1BSEw7QUFJTEksZUFBV0osTUFKTjtBQUtMSyxlQUFXSCxPQUxOO0FBTUxJLFlBQVE7QUFDTkMsWUFBTUwsT0FEQTtBQUVOTSxhQUFPO0FBRkQsS0FOSDtBQVVMQyxZQUFRO0FBQ05GLFlBQU1HLE1BREE7QUFFTkYsYUFBTztBQUZEO0FBVkgsR0FGSztBQWlCWkcsV0FBUztBQUNQQyxpQkFBYSxTQUFTQSxXQUFULEdBQXVCO0FBQ2xDLFdBQUtDLEtBQUwsQ0FBVyxZQUFYO0FBQ0QsS0FITTtBQUlQQyxrQkFBYyxTQUFTQSxZQUFULEdBQXdCO0FBQ3BDLFdBQUtELEtBQUwsQ0FBVyxhQUFYO0FBQ0Q7QUFOTTtBQWpCRyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuVmFudENvbXBvbmVudCh7XG4gIGNsYXNzZXM6IFsndGl0bGUtY2xhc3MnXSxcbiAgcHJvcHM6IHtcbiAgICB0aXRsZTogU3RyaW5nLFxuICAgIGZpeGVkOiBCb29sZWFuLFxuICAgIGxlZnRUZXh0OiBTdHJpbmcsXG4gICAgcmlnaHRUZXh0OiBTdHJpbmcsXG4gICAgbGVmdEFycm93OiBCb29sZWFuLFxuICAgIGJvcmRlcjoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHZhbHVlOiB0cnVlXG4gICAgfSxcbiAgICB6SW5kZXg6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIHZhbHVlOiAxXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25DbGlja0xlZnQ6IGZ1bmN0aW9uIG9uQ2xpY2tMZWZ0KCkge1xuICAgICAgdGhpcy4kZW1pdCgnY2xpY2stbGVmdCcpO1xuICAgIH0sXG4gICAgb25DbGlja1JpZ2h0OiBmdW5jdGlvbiBvbkNsaWNrUmlnaHQoKSB7XG4gICAgICB0aGlzLiRlbWl0KCdjbGljay1yaWdodCcpO1xuICAgIH1cbiAgfVxufSk7Il19