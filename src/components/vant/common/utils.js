'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function isDef(value) {
  return value !== undefined && value !== null;
}

function isObj(x) {
  var type = typeof x === 'undefined' ? 'undefined' : _typeof(x);
  return x !== null && (type === 'object' || type === 'function');
}

function isNumber(value) {
  return (/^\d+$/.test(value)
  );
}

function range(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

exports.isObj = isObj;
exports.isDef = isDef;
exports.isNumber = isNumber;
exports.range = range;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzLmpzIl0sIm5hbWVzIjpbImlzRGVmIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJpc09iaiIsIngiLCJ0eXBlIiwiaXNOdW1iZXIiLCJ0ZXN0IiwicmFuZ2UiLCJudW0iLCJtaW4iLCJtYXgiLCJNYXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUNwQixTQUFPQSxVQUFVQyxTQUFWLElBQXVCRCxVQUFVLElBQXhDO0FBQ0Q7O0FBRUQsU0FBU0UsS0FBVCxDQUFlQyxDQUFmLEVBQWtCO0FBQ2hCLE1BQUlDLGNBQWNELENBQWQseUNBQWNBLENBQWQsQ0FBSjtBQUNBLFNBQU9BLE1BQU0sSUFBTixLQUFlQyxTQUFTLFFBQVQsSUFBcUJBLFNBQVMsVUFBN0MsQ0FBUDtBQUNEOztBQUVELFNBQVNDLFFBQVQsQ0FBa0JMLEtBQWxCLEVBQXlCO0FBQ3ZCLFNBQU8sU0FBUU0sSUFBUixDQUFhTixLQUFiO0FBQVA7QUFDRDs7QUFFRCxTQUFTTyxLQUFULENBQWVDLEdBQWYsRUFBb0JDLEdBQXBCLEVBQXlCQyxHQUF6QixFQUE4QjtBQUM1QixTQUFPQyxLQUFLRixHQUFMLENBQVNFLEtBQUtELEdBQUwsQ0FBU0YsR0FBVCxFQUFjQyxHQUFkLENBQVQsRUFBNkJDLEdBQTdCLENBQVA7QUFDRDs7UUFFUVIsSyxHQUFBQSxLO1FBQU9ILEssR0FBQUEsSztRQUFPTSxRLEdBQUFBLFE7UUFBVUUsSyxHQUFBQSxLIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gaXNEZWYodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGw7XG59XG5cbmZ1bmN0aW9uIGlzT2JqKHgpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgeDtcbiAgcmV0dXJuIHggIT09IG51bGwgJiYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpO1xufVxuXG5mdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xuICByZXR1cm4gL15cXGQrJC8udGVzdCh2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHJhbmdlKG51bSwgbWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG51bSwgbWluKSwgbWF4KTtcbn1cblxuZXhwb3J0IHsgaXNPYmosIGlzRGVmLCBpc051bWJlciwgcmFuZ2UgfTsiXX0=