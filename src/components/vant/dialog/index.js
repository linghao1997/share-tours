'use strict';

var _component = require('./../common/component.js');

var _button = require('./../mixins/button.js');

var _openType = require('./../mixins/open-type.js');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(0, _component.VantComponent)({
  mixins: [_button.button, _openType.openType],
  props: {
    show: Boolean,
    title: String,
    message: String,
    useSlot: Boolean,
    asyncClose: Boolean,
    messageAlign: String,
    showCancelButton: Boolean,
    closeOnClickOverlay: Boolean,
    confirmButtonOpenType: String,
    zIndex: {
      type: Number,
      value: 2000
    },
    confirmButtonText: {
      type: String,
      value: '确认'
    },
    cancelButtonText: {
      type: String,
      value: '取消'
    },
    showConfirmButton: {
      type: Boolean,
      value: true
    },
    overlay: {
      type: Boolean,
      value: true
    },
    transition: {
      type: String,
      value: 'scale'
    }
  },
  data: {
    loading: {
      confirm: false,
      cancel: false
    }
  },
  watch: {
    show: function show(_show) {
      !_show && this.stopLoading();
    }
  },
  methods: {
    onConfirm: function onConfirm() {
      this.handleAction('confirm');
    },
    onCancel: function onCancel() {
      this.handleAction('cancel');
    },
    onClickOverlay: function onClickOverlay() {
      this.onClose('overlay');
    },
    handleAction: function handleAction(action) {
      if (this.data.asyncClose) {
        this.set(_defineProperty({}, "loading." + action, true));
      }

      this.onClose(action);
    },
    close: function close() {
      this.set({
        show: false
      });
    },
    stopLoading: function stopLoading() {
      this.set({
        loading: {
          confirm: false,
          cancel: false
        }
      });
    },
    onClose: function onClose(action) {
      if (!this.data.asyncClose) {
        this.close();
      }

      this.$emit('close', action); //把 dialog 实例传递出去，可以通过 stopLoading() 在外部关闭按钮的 loading

      this.$emit(action, {
        dialog: this
      });
      var callback = this.data[action === 'confirm' ? 'onConfirm' : 'onCancel'];

      if (callback) {
        callback(this);
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1peGlucyIsImJ1dHRvbiIsIm9wZW5UeXBlIiwicHJvcHMiLCJzaG93IiwiQm9vbGVhbiIsInRpdGxlIiwiU3RyaW5nIiwibWVzc2FnZSIsInVzZVNsb3QiLCJhc3luY0Nsb3NlIiwibWVzc2FnZUFsaWduIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNsb3NlT25DbGlja092ZXJsYXkiLCJjb25maXJtQnV0dG9uT3BlblR5cGUiLCJ6SW5kZXgiLCJ0eXBlIiwiTnVtYmVyIiwidmFsdWUiLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJzaG93Q29uZmlybUJ1dHRvbiIsIm92ZXJsYXkiLCJ0cmFuc2l0aW9uIiwiZGF0YSIsImxvYWRpbmciLCJjb25maXJtIiwiY2FuY2VsIiwid2F0Y2giLCJfc2hvdyIsInN0b3BMb2FkaW5nIiwibWV0aG9kcyIsIm9uQ29uZmlybSIsImhhbmRsZUFjdGlvbiIsIm9uQ2FuY2VsIiwib25DbGlja092ZXJsYXkiLCJvbkNsb3NlIiwiYWN0aW9uIiwic2V0IiwiY2xvc2UiLCIkZW1pdCIsImRpYWxvZyIsImNhbGxiYWNrIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBOzs7O0FBQ0EsOEJBQWM7QUFDWkEsVUFBUSxDQUFDQyxjQUFELEVBQVNDLGtCQUFULENBREk7QUFFWkMsU0FBTztBQUNMQyxVQUFNQyxPQUREO0FBRUxDLFdBQU9DLE1BRkY7QUFHTEMsYUFBU0QsTUFISjtBQUlMRSxhQUFTSixPQUpKO0FBS0xLLGdCQUFZTCxPQUxQO0FBTUxNLGtCQUFjSixNQU5UO0FBT0xLLHNCQUFrQlAsT0FQYjtBQVFMUSx5QkFBcUJSLE9BUmhCO0FBU0xTLDJCQUF1QlAsTUFUbEI7QUFVTFEsWUFBUTtBQUNOQyxZQUFNQyxNQURBO0FBRU5DLGFBQU87QUFGRCxLQVZIO0FBY0xDLHVCQUFtQjtBQUNqQkgsWUFBTVQsTUFEVztBQUVqQlcsYUFBTztBQUZVLEtBZGQ7QUFrQkxFLHNCQUFrQjtBQUNoQkosWUFBTVQsTUFEVTtBQUVoQlcsYUFBTztBQUZTLEtBbEJiO0FBc0JMRyx1QkFBbUI7QUFDakJMLFlBQU1YLE9BRFc7QUFFakJhLGFBQU87QUFGVSxLQXRCZDtBQTBCTEksYUFBUztBQUNQTixZQUFNWCxPQURDO0FBRVBhLGFBQU87QUFGQSxLQTFCSjtBQThCTEssZ0JBQVk7QUFDVlAsWUFBTVQsTUFESTtBQUVWVyxhQUFPO0FBRkc7QUE5QlAsR0FGSztBQXFDWk0sUUFBTTtBQUNKQyxhQUFTO0FBQ1BDLGVBQVMsS0FERjtBQUVQQyxjQUFRO0FBRkQ7QUFETCxHQXJDTTtBQTJDWkMsU0FBTztBQUNMeEIsVUFBTSxTQUFTQSxJQUFULENBQWN5QixLQUFkLEVBQXFCO0FBQ3pCLE9BQUNBLEtBQUQsSUFBVSxLQUFLQyxXQUFMLEVBQVY7QUFDRDtBQUhJLEdBM0NLO0FBZ0RaQyxXQUFTO0FBQ1BDLGVBQVcsU0FBU0EsU0FBVCxHQUFxQjtBQUM5QixXQUFLQyxZQUFMLENBQWtCLFNBQWxCO0FBQ0QsS0FITTtBQUlQQyxjQUFVLFNBQVNBLFFBQVQsR0FBb0I7QUFDNUIsV0FBS0QsWUFBTCxDQUFrQixRQUFsQjtBQUNELEtBTk07QUFPUEUsb0JBQWdCLFNBQVNBLGNBQVQsR0FBMEI7QUFDeEMsV0FBS0MsT0FBTCxDQUFhLFNBQWI7QUFDRCxLQVRNO0FBVVBILGtCQUFjLFNBQVNBLFlBQVQsQ0FBc0JJLE1BQXRCLEVBQThCO0FBQzFDLFVBQUksS0FBS2IsSUFBTCxDQUFVZCxVQUFkLEVBQTBCO0FBQ3hCLGFBQUs0QixHQUFMLHFCQUNHLGFBQWFELE1BRGhCLEVBQ3lCLElBRHpCO0FBR0Q7O0FBRUQsV0FBS0QsT0FBTCxDQUFhQyxNQUFiO0FBQ0QsS0FsQk07QUFtQlBFLFdBQU8sU0FBU0EsS0FBVCxHQUFpQjtBQUN0QixXQUFLRCxHQUFMLENBQVM7QUFDUGxDLGNBQU07QUFEQyxPQUFUO0FBR0QsS0F2Qk07QUF3QlAwQixpQkFBYSxTQUFTQSxXQUFULEdBQXVCO0FBQ2xDLFdBQUtRLEdBQUwsQ0FBUztBQUNQYixpQkFBUztBQUNQQyxtQkFBUyxLQURGO0FBRVBDLGtCQUFRO0FBRkQ7QUFERixPQUFUO0FBTUQsS0EvQk07QUFnQ1BTLGFBQVMsU0FBU0EsT0FBVCxDQUFpQkMsTUFBakIsRUFBeUI7QUFDaEMsVUFBSSxDQUFDLEtBQUtiLElBQUwsQ0FBVWQsVUFBZixFQUEyQjtBQUN6QixhQUFLNkIsS0FBTDtBQUNEOztBQUVELFdBQUtDLEtBQUwsQ0FBVyxPQUFYLEVBQW9CSCxNQUFwQixFQUxnQyxDQUtIOztBQUU3QixXQUFLRyxLQUFMLENBQVdILE1BQVgsRUFBbUI7QUFDakJJLGdCQUFRO0FBRFMsT0FBbkI7QUFHQSxVQUFJQyxXQUFXLEtBQUtsQixJQUFMLENBQVVhLFdBQVcsU0FBWCxHQUF1QixXQUF2QixHQUFxQyxVQUEvQyxDQUFmOztBQUVBLFVBQUlLLFFBQUosRUFBYztBQUNaQSxpQkFBUyxJQUFUO0FBQ0Q7QUFDRjtBQS9DTTtBQWhERyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuaW1wb3J0IHsgYnV0dG9uIH0gZnJvbSAnLi4vbWl4aW5zL2J1dHRvbic7XG5pbXBvcnQgeyBvcGVuVHlwZSB9IGZyb20gJy4uL21peGlucy9vcGVuLXR5cGUnO1xuVmFudENvbXBvbmVudCh7XG4gIG1peGluczogW2J1dHRvbiwgb3BlblR5cGVdLFxuICBwcm9wczoge1xuICAgIHNob3c6IEJvb2xlYW4sXG4gICAgdGl0bGU6IFN0cmluZyxcbiAgICBtZXNzYWdlOiBTdHJpbmcsXG4gICAgdXNlU2xvdDogQm9vbGVhbixcbiAgICBhc3luY0Nsb3NlOiBCb29sZWFuLFxuICAgIG1lc3NhZ2VBbGlnbjogU3RyaW5nLFxuICAgIHNob3dDYW5jZWxCdXR0b246IEJvb2xlYW4sXG4gICAgY2xvc2VPbkNsaWNrT3ZlcmxheTogQm9vbGVhbixcbiAgICBjb25maXJtQnV0dG9uT3BlblR5cGU6IFN0cmluZyxcbiAgICB6SW5kZXg6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIHZhbHVlOiAyMDAwXG4gICAgfSxcbiAgICBjb25maXJtQnV0dG9uVGV4dDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICfnoa7orqQnXG4gICAgfSxcbiAgICBjYW5jZWxCdXR0b25UZXh0OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJ+WPlua2iCdcbiAgICB9LFxuICAgIHNob3dDb25maXJtQnV0dG9uOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IHRydWVcbiAgICB9LFxuICAgIG92ZXJsYXk6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogdHJ1ZVxuICAgIH0sXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICdzY2FsZSdcbiAgICB9XG4gIH0sXG4gIGRhdGE6IHtcbiAgICBsb2FkaW5nOiB7XG4gICAgICBjb25maXJtOiBmYWxzZSxcbiAgICAgIGNhbmNlbDogZmFsc2VcbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgc2hvdzogZnVuY3Rpb24gc2hvdyhfc2hvdykge1xuICAgICAgIV9zaG93ICYmIHRoaXMuc3RvcExvYWRpbmcoKTtcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvbkNvbmZpcm06IGZ1bmN0aW9uIG9uQ29uZmlybSgpIHtcbiAgICAgIHRoaXMuaGFuZGxlQWN0aW9uKCdjb25maXJtJyk7XG4gICAgfSxcbiAgICBvbkNhbmNlbDogZnVuY3Rpb24gb25DYW5jZWwoKSB7XG4gICAgICB0aGlzLmhhbmRsZUFjdGlvbignY2FuY2VsJyk7XG4gICAgfSxcbiAgICBvbkNsaWNrT3ZlcmxheTogZnVuY3Rpb24gb25DbGlja092ZXJsYXkoKSB7XG4gICAgICB0aGlzLm9uQ2xvc2UoJ292ZXJsYXknKTtcbiAgICB9LFxuICAgIGhhbmRsZUFjdGlvbjogZnVuY3Rpb24gaGFuZGxlQWN0aW9uKGFjdGlvbikge1xuICAgICAgaWYgKHRoaXMuZGF0YS5hc3luY0Nsb3NlKSB7XG4gICAgICAgIHRoaXMuc2V0KHtcbiAgICAgICAgICBbXCJsb2FkaW5nLlwiICsgYWN0aW9uXTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5vbkNsb3NlKGFjdGlvbik7XG4gICAgfSxcbiAgICBjbG9zZTogZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgICB0aGlzLnNldCh7XG4gICAgICAgIHNob3c6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIHN0b3BMb2FkaW5nOiBmdW5jdGlvbiBzdG9wTG9hZGluZygpIHtcbiAgICAgIHRoaXMuc2V0KHtcbiAgICAgICAgbG9hZGluZzoge1xuICAgICAgICAgIGNvbmZpcm06IGZhbHNlLFxuICAgICAgICAgIGNhbmNlbDogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBvbkNsb3NlOiBmdW5jdGlvbiBvbkNsb3NlKGFjdGlvbikge1xuICAgICAgaWYgKCF0aGlzLmRhdGEuYXN5bmNDbG9zZSkge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuJGVtaXQoJ2Nsb3NlJywgYWN0aW9uKTsgLy/mioogZGlhbG9nIOWunuS+i+S8oOmAkuWHuuWOu++8jOWPr+S7pemAmui/hyBzdG9wTG9hZGluZygpIOWcqOWklumDqOWFs+mXreaMiemSrueahCBsb2FkaW5nXG5cbiAgICAgIHRoaXMuJGVtaXQoYWN0aW9uLCB7XG4gICAgICAgIGRpYWxvZzogdGhpc1xuICAgICAgfSk7XG4gICAgICB2YXIgY2FsbGJhY2sgPSB0aGlzLmRhdGFbYWN0aW9uID09PSAnY29uZmlybScgPyAnb25Db25maXJtJyA6ICdvbkNhbmNlbCddO1xuXG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2sodGhpcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59KTsiXX0=