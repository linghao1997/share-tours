'use strict';

var _component = require('./../common/component.js');

var _iphonex = require('./../mixins/iphonex.js');

(0, _component.VantComponent)({
  mixins: [_iphonex.iphonex],
  classes: ['bar-class', 'price-class', 'button-class'],
  props: {
    tip: null,
    type: Number,
    price: null,
    label: String,
    loading: Boolean,
    disabled: Boolean,
    buttonText: String,
    currency: {
      type: String,
      value: '¥'
    },
    buttonType: {
      type: String,
      value: 'danger'
    }
  },
  computed: {
    hasPrice: function hasPrice() {
      return typeof this.data.price === 'number';
    },
    priceStr: function priceStr() {
      return (this.data.price / 100).toFixed(2);
    },
    tipStr: function tipStr() {
      var tip = this.data.tip;
      return typeof tip === 'string' ? tip : '';
    }
  },
  methods: {
    onSubmit: function onSubmit(event) {
      this.$emit('submit', event.detail);
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1peGlucyIsImlwaG9uZXgiLCJjbGFzc2VzIiwicHJvcHMiLCJ0aXAiLCJ0eXBlIiwiTnVtYmVyIiwicHJpY2UiLCJsYWJlbCIsIlN0cmluZyIsImxvYWRpbmciLCJCb29sZWFuIiwiZGlzYWJsZWQiLCJidXR0b25UZXh0IiwiY3VycmVuY3kiLCJ2YWx1ZSIsImJ1dHRvblR5cGUiLCJjb21wdXRlZCIsImhhc1ByaWNlIiwiZGF0YSIsInByaWNlU3RyIiwidG9GaXhlZCIsInRpcFN0ciIsIm1ldGhvZHMiLCJvblN1Ym1pdCIsImV2ZW50IiwiJGVtaXQiLCJkZXRhaWwiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0EsOEJBQWM7QUFDWkEsVUFBUSxDQUFDQyxnQkFBRCxDQURJO0FBRVpDLFdBQVMsQ0FBQyxXQUFELEVBQWMsYUFBZCxFQUE2QixjQUE3QixDQUZHO0FBR1pDLFNBQU87QUFDTEMsU0FBSyxJQURBO0FBRUxDLFVBQU1DLE1BRkQ7QUFHTEMsV0FBTyxJQUhGO0FBSUxDLFdBQU9DLE1BSkY7QUFLTEMsYUFBU0MsT0FMSjtBQU1MQyxjQUFVRCxPQU5MO0FBT0xFLGdCQUFZSixNQVBQO0FBUUxLLGNBQVU7QUFDUlQsWUFBTUksTUFERTtBQUVSTSxhQUFPO0FBRkMsS0FSTDtBQVlMQyxnQkFBWTtBQUNWWCxZQUFNSSxNQURJO0FBRVZNLGFBQU87QUFGRztBQVpQLEdBSEs7QUFvQlpFLFlBQVU7QUFDUkMsY0FBVSxTQUFTQSxRQUFULEdBQW9CO0FBQzVCLGFBQU8sT0FBTyxLQUFLQyxJQUFMLENBQVVaLEtBQWpCLEtBQTJCLFFBQWxDO0FBQ0QsS0FITztBQUlSYSxjQUFVLFNBQVNBLFFBQVQsR0FBb0I7QUFDNUIsYUFBTyxDQUFDLEtBQUtELElBQUwsQ0FBVVosS0FBVixHQUFrQixHQUFuQixFQUF3QmMsT0FBeEIsQ0FBZ0MsQ0FBaEMsQ0FBUDtBQUNELEtBTk87QUFPUkMsWUFBUSxTQUFTQSxNQUFULEdBQWtCO0FBQ3hCLFVBQUlsQixNQUFNLEtBQUtlLElBQUwsQ0FBVWYsR0FBcEI7QUFDQSxhQUFPLE9BQU9BLEdBQVAsS0FBZSxRQUFmLEdBQTBCQSxHQUExQixHQUFnQyxFQUF2QztBQUNEO0FBVk8sR0FwQkU7QUFnQ1ptQixXQUFTO0FBQ1BDLGNBQVUsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDakMsV0FBS0MsS0FBTCxDQUFXLFFBQVgsRUFBcUJELE1BQU1FLE1BQTNCO0FBQ0Q7QUFITTtBQWhDRyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuaW1wb3J0IHsgaXBob25leCB9IGZyb20gJy4uL21peGlucy9pcGhvbmV4JztcblZhbnRDb21wb25lbnQoe1xuICBtaXhpbnM6IFtpcGhvbmV4XSxcbiAgY2xhc3NlczogWydiYXItY2xhc3MnLCAncHJpY2UtY2xhc3MnLCAnYnV0dG9uLWNsYXNzJ10sXG4gIHByb3BzOiB7XG4gICAgdGlwOiBudWxsLFxuICAgIHR5cGU6IE51bWJlcixcbiAgICBwcmljZTogbnVsbCxcbiAgICBsYWJlbDogU3RyaW5nLFxuICAgIGxvYWRpbmc6IEJvb2xlYW4sXG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgYnV0dG9uVGV4dDogU3RyaW5nLFxuICAgIGN1cnJlbmN5OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJ8KlJ1xuICAgIH0sXG4gICAgYnV0dG9uVHlwZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICdkYW5nZXInXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGhhc1ByaWNlOiBmdW5jdGlvbiBoYXNQcmljZSgpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdGhpcy5kYXRhLnByaWNlID09PSAnbnVtYmVyJztcbiAgICB9LFxuICAgIHByaWNlU3RyOiBmdW5jdGlvbiBwcmljZVN0cigpIHtcbiAgICAgIHJldHVybiAodGhpcy5kYXRhLnByaWNlIC8gMTAwKS50b0ZpeGVkKDIpO1xuICAgIH0sXG4gICAgdGlwU3RyOiBmdW5jdGlvbiB0aXBTdHIoKSB7XG4gICAgICB2YXIgdGlwID0gdGhpcy5kYXRhLnRpcDtcbiAgICAgIHJldHVybiB0eXBlb2YgdGlwID09PSAnc3RyaW5nJyA/IHRpcCA6ICcnO1xuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG9uU3VibWl0OiBmdW5jdGlvbiBvblN1Ym1pdChldmVudCkge1xuICAgICAgdGhpcy4kZW1pdCgnc3VibWl0JywgZXZlbnQuZGV0YWlsKTtcbiAgICB9XG4gIH1cbn0pOyJdfQ==