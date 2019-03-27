'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };return _extends.apply(this, arguments);
}

var queue = [];

function getContext() {
  var pages = getCurrentPages();
  return pages[pages.length - 1];
}

var Dialog = function Dialog(options) {
  options = _extends({}, Dialog.currentOptions, options);
  return new Promise(function (resolve, reject) {
    var context = options.context || getContext();
    var dialog = context.selectComponent(options.selector);
    delete options.selector;

    if (dialog) {
      dialog.set(_extends({
        onCancel: reject,
        onConfirm: resolve
      }, options));
      queue.push(dialog);
    } else {
      console.warn('未找到 van-dialog 节点，请确认 selector 及 context 是否正确');
    }
  });
};

Dialog.defaultOptions = {
  show: true,
  title: '',
  message: '',
  zIndex: 100,
  overlay: true,
  asyncClose: false,
  messageAlign: '',
  transition: 'scale',
  selector: '#van-dialog',
  confirmButtonText: '确认',
  cancelButtonText: '取消',
  showConfirmButton: true,
  showCancelButton: false,
  closeOnClickOverlay: false,
  confirmButtonOpenType: ''
};
Dialog.alert = Dialog;

Dialog.confirm = function (options) {
  return Dialog(_extends({
    showCancelButton: true
  }, options));
};

Dialog.close = function () {
  queue.forEach(function (dialog) {
    dialog.close();
  });
  queue = [];
};

Dialog.stopLoading = function () {
  queue.forEach(function (dialog) {
    dialog.stopLoading();
  });
};

Dialog.setDefaultOptions = function (options) {
  Object.assign(Dialog.currentOptions, options);
};

Dialog.resetDefaultOptions = function () {
  Dialog.currentOptions = _extends({}, Dialog.defaultOptions);
};

Dialog.resetDefaultOptions();
exports.default = Dialog;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWxvZy5qcyJdLCJuYW1lcyI6WyJfZXh0ZW5kcyIsIk9iamVjdCIsImFzc2lnbiIsInRhcmdldCIsImkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzb3VyY2UiLCJrZXkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJhcHBseSIsInF1ZXVlIiwiZ2V0Q29udGV4dCIsInBhZ2VzIiwiZ2V0Q3VycmVudFBhZ2VzIiwiRGlhbG9nIiwib3B0aW9ucyIsImN1cnJlbnRPcHRpb25zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJjb250ZXh0IiwiZGlhbG9nIiwic2VsZWN0Q29tcG9uZW50Iiwic2VsZWN0b3IiLCJzZXQiLCJvbkNhbmNlbCIsIm9uQ29uZmlybSIsInB1c2giLCJjb25zb2xlIiwid2FybiIsImRlZmF1bHRPcHRpb25zIiwic2hvdyIsInRpdGxlIiwibWVzc2FnZSIsInpJbmRleCIsIm92ZXJsYXkiLCJhc3luY0Nsb3NlIiwibWVzc2FnZUFsaWduIiwidHJhbnNpdGlvbiIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsInNob3dDb25maXJtQnV0dG9uIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNsb3NlT25DbGlja092ZXJsYXkiLCJjb25maXJtQnV0dG9uT3BlblR5cGUiLCJhbGVydCIsImNvbmZpcm0iLCJjbG9zZSIsImZvckVhY2giLCJzdG9wTG9hZGluZyIsInNldERlZmF1bHRPcHRpb25zIiwicmVzZXREZWZhdWx0T3B0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxTQUFTQSxRQUFULEdBQW9CO0FBQUVBLGFBQVdDLE9BQU9DLE1BQVAsSUFBaUIsVUFBVUMsTUFBVixFQUFrQjtBQUFFLFNBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJQyxVQUFVQyxNQUE5QixFQUFzQ0YsR0FBdEMsRUFBMkM7QUFBRSxVQUFJRyxTQUFTRixVQUFVRCxDQUFWLENBQWIsQ0FBMkIsS0FBSyxJ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ZXJDLE0iLCJmaWxlIjoiZGlhbG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxudmFyIHF1ZXVlID0gW107XG5cbmZ1bmN0aW9uIGdldENvbnRleHQoKSB7XG4gIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xuICByZXR1cm4gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV07XG59XG5cbnZhciBEaWFsb2cgPSBmdW5jdGlvbiBEaWFsb2cob3B0aW9ucykge1xuICBvcHRpb25zID0gX2V4dGVuZHMoe30sIERpYWxvZy5jdXJyZW50T3B0aW9ucywgb3B0aW9ucyk7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIGNvbnRleHQgPSBvcHRpb25zLmNvbnRleHQgfHwgZ2V0Q29udGV4dCgpO1xuICAgIHZhciBkaWFsb2cgPSBjb250ZXh0LnNlbGVjdENvbXBvbmVudChvcHRpb25zLnNlbGVjdG9yKTtcbiAgICBkZWxldGUgb3B0aW9ucy5zZWxlY3RvcjtcblxuICAgIGlmIChkaWFsb2cpIHtcbiAgICAgIGRpYWxvZy5zZXQoX2V4dGVuZHMoe1xuICAgICAgICBvbkNhbmNlbDogcmVqZWN0LFxuICAgICAgICBvbkNvbmZpcm06IHJlc29sdmVcbiAgICAgIH0sIG9wdGlvbnMpKTtcbiAgICAgIHF1ZXVlLnB1c2goZGlhbG9nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKCfmnKrmib7liLAgdmFuLWRpYWxvZyDoioLngrnvvIzor7fnoa7orqQgc2VsZWN0b3Ig5Y+KIGNvbnRleHQg5piv5ZCm5q2j56GuJyk7XG4gICAgfVxuICB9KTtcbn07XG5cbkRpYWxvZy5kZWZhdWx0T3B0aW9ucyA9IHtcbiAgc2hvdzogdHJ1ZSxcbiAgdGl0bGU6ICcnLFxuICBtZXNzYWdlOiAnJyxcbiAgekluZGV4OiAxMDAsXG4gIG92ZXJsYXk6IHRydWUsXG4gIGFzeW5jQ2xvc2U6IGZhbHNlLFxuICBtZXNzYWdlQWxpZ246ICcnLFxuICB0cmFuc2l0aW9uOiAnc2NhbGUnLFxuICBzZWxlY3RvcjogJyN2YW4tZGlhbG9nJyxcbiAgY29uZmlybUJ1dHRvblRleHQ6ICfnoa7orqQnLFxuICBjYW5jZWxCdXR0b25UZXh0OiAn5Y+W5raIJyxcbiAgc2hvd0NvbmZpcm1CdXR0b246IHRydWUsXG4gIHNob3dDYW5jZWxCdXR0b246IGZhbHNlLFxuICBjbG9zZU9uQ2xpY2tPdmVybGF5OiBmYWxzZSxcbiAgY29uZmlybUJ1dHRvbk9wZW5UeXBlOiAnJ1xufTtcbkRpYWxvZy5hbGVydCA9IERpYWxvZztcblxuRGlhbG9nLmNvbmZpcm0gPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICByZXR1cm4gRGlhbG9nKF9leHRlbmRzKHtcbiAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlXG4gIH0sIG9wdGlvbnMpKTtcbn07XG5cbkRpYWxvZy5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgcXVldWUuZm9yRWFjaChmdW5jdGlvbiAoZGlhbG9nKSB7XG4gICAgZGlhbG9nLmNsb3NlKCk7XG4gIH0pO1xuICBxdWV1ZSA9IFtdO1xufTtcblxuRGlhbG9nLnN0b3BMb2FkaW5nID0gZnVuY3Rpb24gKCkge1xuICBxdWV1ZS5mb3JFYWNoKGZ1bmN0aW9uIChkaWFsb2cpIHtcbiAgICBkaWFsb2cuc3RvcExvYWRpbmcoKTtcbiAgfSk7XG59O1xuXG5EaWFsb2cuc2V0RGVmYXVsdE9wdGlvbnMgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICBPYmplY3QuYXNzaWduKERpYWxvZy5jdXJyZW50T3B0aW9ucywgb3B0aW9ucyk7XG59O1xuXG5EaWFsb2cucmVzZXREZWZhdWx0T3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgRGlhbG9nLmN1cnJlbnRPcHRpb25zID0gX2V4dGVuZHMoe30sIERpYWxvZy5kZWZhdWx0T3B0aW9ucyk7XG59O1xuXG5EaWFsb2cucmVzZXREZWZhdWx0T3B0aW9ucygpO1xuZXhwb3J0IGRlZmF1bHQgRGlhbG9nOyJdfQ==