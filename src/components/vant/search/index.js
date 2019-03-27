'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  field: true,
  classes: ['field-class', 'input-class', 'cancel-class'],
  props: {
    focus: Boolean,
    error: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    inputAlign: String,
    showAction: Boolean,
    useActionSlot: Boolean,
    placeholder: String,
    placeholderStyle: String,
    background: {
      type: String,
      value: '#f2f2f2'
    },
    maxlength: {
      type: Number,
      value: -1
    }
  },
  methods: {
    onChange: function onChange(event) {
      this.set({
        value: event.detail
      });
      this.$emit('change', event.detail);
    },
    onCancel: function onCancel() {
      this.set({
        value: ''
      });
      this.$emit('cancel');
      this.$emit('change', '');
    },
    onSearch: function onSearch() {
      this.$emit('search', this.data.value);
    },
    onFocus: function onFocus() {
      this.$emit('focus');
    },
    onBlur: function onBlur() {
      this.$emit('blur');
    },
    onClear: function onClear() {
      this.$emit('clear');
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwiY2xhc3NlcyIsInByb3BzIiwiZm9jdXMiLCJCb29sZWFuIiwiZXJyb3IiLCJkaXNhYmxlZCIsInJlYWRvbmx5IiwiaW5wdXRBbGlnbiIsIlN0cmluZyIsInNob3dBY3Rpb24iLCJ1c2VBY3Rpb25TbG90IiwicGxhY2Vob2xkZXIiLCJwbGFjZWhvbGRlclN0eWxlIiwiYmFja2dyb3VuZCIsInR5cGUiLCJ2YWx1ZSIsIm1heGxlbmd0aCIsIk51bWJlciIsIm1ldGhvZHMiLCJvbkNoYW5nZSIsImV2ZW50Iiwic2V0IiwiZGV0YWlsIiwiJGVtaXQiLCJvbkNhbmNlbCIsIm9uU2VhcmNoIiwiZGF0YSIsIm9uRm9jdXMiLCJvbkJsdXIiLCJvbkNsZWFyIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLDhCQUFjO0FBQ1pBLFNBQU8sSUFESztBQUVaQyxXQUFTLENBQUMsYUFBRCxFQUFnQixhQUFoQixFQUErQixjQUEvQixDQUZHO0FBR1pDLFNBQU87QUFDTEMsV0FBT0MsT0FERjtBQUVMQyxXQUFPRCxPQUZGO0FBR0xFLGNBQVVGLE9BSEw7QUFJTEcsY0FBVUgsT0FKTDtBQUtMSSxnQkFBWUMsTUFMUDtBQU1MQyxnQkFBWU4sT0FOUDtBQU9MTyxtQkFBZVAsT0FQVjtBQVFMUSxpQkFBYUgsTUFSUjtBQVNMSSxzQkFBa0JKLE1BVGI7QUFVTEssZ0JBQVk7QUFDVkMsWUFBTU4sTUFESTtBQUVWTyxhQUFPO0FBRkcsS0FWUDtBQWNMQyxlQUFXO0FBQ1RGLFlBQU1HLE1BREc7QUFFVEYsYUFBTyxDQUFDO0FBRkM7QUFkTixHQUhLO0FBc0JaRyxXQUFTO0FBQ1BDLGNBQVUsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDakMsV0FBS0MsR0FBTCxDQUFTO0FBQ1BOLGVBQU9LLE1BQU1FO0FBRE4sT0FBVDtBQUdBLFdBQUtDLEtBQUwsQ0FBVyxRQUFYLEVBQXFCSCxNQUFNRSxNQUEzQjtBQUNELEtBTk07QUFPUEUsY0FBVSxTQUFTQSxRQUFULEdBQW9CO0FBQzVCLFdBQUtILEdBQUwsQ0FBUztBQUNQTixlQUFPO0FBREEsT0FBVDtBQUdBLFdBQUtRLEtBQUwsQ0FBVyxRQUFYO0FBQ0EsV0FBS0EsS0FBTCxDQUFXLFFBQVgsRUFBcUIsRUFBckI7QUFDRCxLQWJNO0FBY1BFLGNBQVUsU0FBU0EsUUFBVCxHQUFvQjtBQUM1QixXQUFLRixLQUFMLENBQVcsUUFBWCxFQUFxQixLQUFLRyxJQUFMLENBQVVYLEtBQS9CO0FBQ0QsS0FoQk07QUFpQlBZLGFBQVMsU0FBU0EsT0FBVCxHQUFtQjtBQUMxQixXQUFLSixLQUFMLENBQVcsT0FBWDtBQUNELEtBbkJNO0FBb0JQSyxZQUFRLFNBQVNBLE1BQVQsR0FBa0I7QUFDeEIsV0FBS0wsS0FBTCxDQUFXLE1BQVg7QUFDRCxLQXRCTTtBQXVCUE0sYUFBUyxTQUFTQSxPQUFULEdBQW1CO0FBQzFCLFdBQUtOLEtBQUwsQ0FBVyxPQUFYO0FBQ0Q7QUF6Qk07QUF0QkcsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcblZhbnRDb21wb25lbnQoe1xuICBmaWVsZDogdHJ1ZSxcbiAgY2xhc3NlczogWydmaWVsZC1jbGFzcycsICdpbnB1dC1jbGFzcycsICdjYW5jZWwtY2xhc3MnXSxcbiAgcHJvcHM6IHtcbiAgICBmb2N1czogQm9vbGVhbixcbiAgICBlcnJvcjogQm9vbGVhbixcbiAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICByZWFkb25seTogQm9vbGVhbixcbiAgICBpbnB1dEFsaWduOiBTdHJpbmcsXG4gICAgc2hvd0FjdGlvbjogQm9vbGVhbixcbiAgICB1c2VBY3Rpb25TbG90OiBCb29sZWFuLFxuICAgIHBsYWNlaG9sZGVyOiBTdHJpbmcsXG4gICAgcGxhY2Vob2xkZXJTdHlsZTogU3RyaW5nLFxuICAgIGJhY2tncm91bmQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnI2YyZjJmMidcbiAgICB9LFxuICAgIG1heGxlbmd0aDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgdmFsdWU6IC0xXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgICB0aGlzLnNldCh7XG4gICAgICAgIHZhbHVlOiBldmVudC5kZXRhaWxcbiAgICAgIH0pO1xuICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgZXZlbnQuZGV0YWlsKTtcbiAgICB9LFxuICAgIG9uQ2FuY2VsOiBmdW5jdGlvbiBvbkNhbmNlbCgpIHtcbiAgICAgIHRoaXMuc2V0KHtcbiAgICAgICAgdmFsdWU6ICcnXG4gICAgICB9KTtcbiAgICAgIHRoaXMuJGVtaXQoJ2NhbmNlbCcpO1xuICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgJycpO1xuICAgIH0sXG4gICAgb25TZWFyY2g6IGZ1bmN0aW9uIG9uU2VhcmNoKCkge1xuICAgICAgdGhpcy4kZW1pdCgnc2VhcmNoJywgdGhpcy5kYXRhLnZhbHVlKTtcbiAgICB9LFxuICAgIG9uRm9jdXM6IGZ1bmN0aW9uIG9uRm9jdXMoKSB7XG4gICAgICB0aGlzLiRlbWl0KCdmb2N1cycpO1xuICAgIH0sXG4gICAgb25CbHVyOiBmdW5jdGlvbiBvbkJsdXIoKSB7XG4gICAgICB0aGlzLiRlbWl0KCdibHVyJyk7XG4gICAgfSxcbiAgICBvbkNsZWFyOiBmdW5jdGlvbiBvbkNsZWFyKCkge1xuICAgICAgdGhpcy4kZW1pdCgnY2xlYXInKTtcbiAgICB9XG4gIH1cbn0pOyJdfQ==