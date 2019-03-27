'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  relation: {
    name: 'row',
    type: 'ancestor'
  },
  props: {
    span: Number,
    offset: Number
  },
  data: {
    style: ''
  },
  methods: {
    setGutter: function setGutter(gutter) {
      var padding = gutter / 2 + "px";
      var style = gutter ? "padding-left: " + padding + "; padding-right: " + padding + ";" : '';

      if (style !== this.data.style) {
        this.set({
          style: style
        });
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJwcm9wcyIsInNwYW4iLCJOdW1iZXIiLCJvZmZzZXQiLCJkYXRhIiwic3R5bGUiLCJtZXRob2RzIiwic2V0R3V0dGVyIiwiZ3V0dGVyIiwicGFkZGluZyIsInNldCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSw4QkFBYztBQUNaQSxZQUFVO0FBQ1JDLFVBQU0sS0FERTtBQUVSQyxVQUFNO0FBRkUsR0FERTtBQUtaQyxTQUFPO0FBQ0xDLFVBQU1DLE1BREQ7QUFFTEMsWUFBUUQ7QUFGSCxHQUxLO0FBU1pFLFFBQU07QUFDSkMsV0FBTztBQURILEdBVE07QUFZWkMsV0FBUztBQUNQQyxlQUFXLFNBQVNBLFNBQVQsQ0FBbUJDLE1BQW5CLEVBQTJCO0FBQ3BDLFVBQUlDLFVBQVVELFNBQVMsQ0FBVCxHQUFhLElBQTNCO0FBQ0EsVUFBSUgsUUFBUUcsU0FBUyxtQkFBbUJDLE9BQW5CLEdBQTZCLG1CQUE3QixHQUFtREEsT0FBbkQsR0FBNkQsR0FBdEUsR0FBNEUsRUFBeEY7O0FBRUEsVUFBSUosVUFBVSxLQUFLRCxJQUFMLENBQVVDLEtBQXhCLEVBQStCO0FBQzdCLGFBQUtLLEdBQUwsQ0FBUztBQUNQTCxpQkFBT0E7QUFEQSxTQUFUO0FBR0Q7QUFDRjtBQVZNO0FBWkcsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcblZhbnRDb21wb25lbnQoe1xuICByZWxhdGlvbjoge1xuICAgIG5hbWU6ICdyb3cnLFxuICAgIHR5cGU6ICdhbmNlc3RvcidcbiAgfSxcbiAgcHJvcHM6IHtcbiAgICBzcGFuOiBOdW1iZXIsXG4gICAgb2Zmc2V0OiBOdW1iZXJcbiAgfSxcbiAgZGF0YToge1xuICAgIHN0eWxlOiAnJ1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgc2V0R3V0dGVyOiBmdW5jdGlvbiBzZXRHdXR0ZXIoZ3V0dGVyKSB7XG4gICAgICB2YXIgcGFkZGluZyA9IGd1dHRlciAvIDIgKyBcInB4XCI7XG4gICAgICB2YXIgc3R5bGUgPSBndXR0ZXIgPyBcInBhZGRpbmctbGVmdDogXCIgKyBwYWRkaW5nICsgXCI7IHBhZGRpbmctcmlnaHQ6IFwiICsgcGFkZGluZyArIFwiO1wiIDogJyc7XG5cbiAgICAgIGlmIChzdHlsZSAhPT0gdGhpcy5kYXRhLnN0eWxlKSB7XG4gICAgICAgIHRoaXMuc2V0KHtcbiAgICAgICAgICBzdHlsZTogc3R5bGVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59KTsiXX0=