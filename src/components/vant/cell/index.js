'use strict';

var _link = require('./../mixins/link.js');

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  classes: ['title-class', 'label-class', 'value-class', 'right-icon-class', 'hover-class'],
  mixins: [_link.link],
  props: {
    title: null,
    value: null,
    icon: String,
    size: String,
    label: String,
    center: Boolean,
    isLink: Boolean,
    required: Boolean,
    clickable: Boolean,
    titleWidth: String,
    customStyle: String,
    arrowDirection: String,
    border: {
      type: Boolean,
      value: true
    }
  },
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event.detail);
      this.jumpLink();
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNsYXNzZXMiLCJtaXhpbnMiLCJsaW5rIiwicHJvcHMiLCJ0aXRsZSIsInZhbHVlIiwiaWNvbiIsIlN0cmluZyIsInNpemUiLCJsYWJlbCIsImNlbnRlciIsIkJvb2xlYW4iLCJpc0xpbmsiLCJyZXF1aXJlZCIsImNsaWNrYWJsZSIsInRpdGxlV2lkdGgiLCJjdXN0b21TdHlsZSIsImFycm93RGlyZWN0aW9uIiwiYm9yZGVyIiwidHlwZSIsIm1ldGhvZHMiLCJvbkNsaWNrIiwiZXZlbnQiLCIkZW1pdCIsImRldGFpbCIsImp1bXBMaW5rIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBLDhCQUFjO0FBQ1pBLFdBQVMsQ0FBQyxhQUFELEVBQWdCLGFBQWhCLEVBQStCLGFBQS9CLEVBQThDLGtCQUE5QyxFQUFrRSxhQUFsRSxDQURHO0FBRVpDLFVBQVEsQ0FBQ0MsVUFBRCxDQUZJO0FBR1pDLFNBQU87QUFDTEMsV0FBTyxJQURGO0FBRUxDLFdBQU8sSUFGRjtBQUdMQyxVQUFNQyxNQUhEO0FBSUxDLFVBQU1ELE1BSkQ7QUFLTEUsV0FBT0YsTUFMRjtBQU1MRyxZQUFRQyxPQU5IO0FBT0xDLFlBQVFELE9BUEg7QUFRTEUsY0FBVUYsT0FSTDtBQVNMRyxlQUFXSCxPQVROO0FBVUxJLGdCQUFZUixNQVZQO0FBV0xTLGlCQUFhVCxNQVhSO0FBWUxVLG9CQUFnQlYsTUFaWDtBQWFMVyxZQUFRO0FBQ05DLFlBQU1SLE9BREE7QUFFTk4sYUFBTztBQUZEO0FBYkgsR0FISztBQXFCWmUsV0FBUztBQUNQQyxhQUFTLFNBQVNBLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCO0FBQy9CLFdBQUtDLEtBQUwsQ0FBVyxPQUFYLEVBQW9CRCxNQUFNRSxNQUExQjtBQUNBLFdBQUtDLFFBQUw7QUFDRDtBQUpNO0FBckJHLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsaW5rIH0gZnJvbSAnLi4vbWl4aW5zL2xpbmsnO1xuaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuVmFudENvbXBvbmVudCh7XG4gIGNsYXNzZXM6IFsndGl0bGUtY2xhc3MnLCAnbGFiZWwtY2xhc3MnLCAndmFsdWUtY2xhc3MnLCAncmlnaHQtaWNvbi1jbGFzcycsICdob3Zlci1jbGFzcyddLFxuICBtaXhpbnM6IFtsaW5rXSxcbiAgcHJvcHM6IHtcbiAgICB0aXRsZTogbnVsbCxcbiAgICB2YWx1ZTogbnVsbCxcbiAgICBpY29uOiBTdHJpbmcsXG4gICAgc2l6ZTogU3RyaW5nLFxuICAgIGxhYmVsOiBTdHJpbmcsXG4gICAgY2VudGVyOiBCb29sZWFuLFxuICAgIGlzTGluazogQm9vbGVhbixcbiAgICByZXF1aXJlZDogQm9vbGVhbixcbiAgICBjbGlja2FibGU6IEJvb2xlYW4sXG4gICAgdGl0bGVXaWR0aDogU3RyaW5nLFxuICAgIGN1c3RvbVN0eWxlOiBTdHJpbmcsXG4gICAgYXJyb3dEaXJlY3Rpb246IFN0cmluZyxcbiAgICBib3JkZXI6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrJywgZXZlbnQuZGV0YWlsKTtcbiAgICAgIHRoaXMuanVtcExpbmsoKTtcbiAgICB9XG4gIH1cbn0pOyJdfQ==