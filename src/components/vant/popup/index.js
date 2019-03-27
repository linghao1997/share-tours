'use strict';

var _component = require('./../common/component.js');

var _transition = require('./../mixins/transition.js');

var _iphonex = require('./../mixins/iphonex.js');

(0, _component.VantComponent)({
  mixins: [(0, _transition.transition)(false), _iphonex.iphonex],
  props: {
    transition: String,
    customStyle: String,
    overlayStyle: String,
    zIndex: {
      type: Number,
      value: 100
    },
    overlay: {
      type: Boolean,
      value: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      value: true
    },
    position: {
      type: String,
      value: 'center'
    }
  },
  methods: {
    onClickOverlay: function onClickOverlay() {
      this.$emit('click-overlay');

      if (this.data.closeOnClickOverlay) {
        this.$emit('close');
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1peGlucyIsImlwaG9uZXgiLCJwcm9wcyIsInRyYW5zaXRpb24iLCJTdHJpbmciLCJjdXN0b21TdHlsZSIsIm92ZXJsYXlTdHlsZSIsInpJbmRleCIsInR5cGUiLCJOdW1iZXIiLCJ2YWx1ZSIsIm92ZXJsYXkiLCJCb29sZWFuIiwiY2xvc2VPbkNsaWNrT3ZlcmxheSIsInBvc2l0aW9uIiwibWV0aG9kcyIsIm9uQ2xpY2tPdmVybGF5IiwiJGVtaXQiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBOztBQUNBLDhCQUFjO0FBQ1pBLFVBQVEsQ0FBQyw0QkFBVyxLQUFYLENBQUQsRUFBb0JDLGdCQUFwQixDQURJO0FBRVpDLFNBQU87QUFDTEMsZ0JBQVlDLE1BRFA7QUFFTEMsaUJBQWFELE1BRlI7QUFHTEUsa0JBQWNGLE1BSFQ7QUFJTEcsWUFBUTtBQUNOQyxZQUFNQyxNQURBO0FBRU5DLGFBQU87QUFGRCxLQUpIO0FBUUxDLGFBQVM7QUFDUEgsWUFBTUksT0FEQztBQUVQRixhQUFPO0FBRkEsS0FSSjtBQVlMRyx5QkFBcUI7QUFDbkJMLFlBQU1JLE9BRGE7QUFFbkJGLGFBQU87QUFGWSxLQVpoQjtBQWdCTEksY0FBVTtBQUNSTixZQUFNSixNQURFO0FBRVJNLGFBQU87QUFGQztBQWhCTCxHQUZLO0FBdUJaSyxXQUFTO0FBQ1BDLG9CQUFnQixTQUFTQSxjQUFULEdBQTBCO0FBQ3hDLFdBQUtDLEtBQUwsQ0FBVyxlQUFYOztBQUVBLFVBQUksS0FBS0MsSUFBTCxDQUFVTCxtQkFBZCxFQUFtQztBQUNqQyxhQUFLSSxLQUFMLENBQVcsT0FBWDtBQUNEO0FBQ0Y7QUFQTTtBQXZCRyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuaW1wb3J0IHsgdHJhbnNpdGlvbiB9IGZyb20gJy4uL21peGlucy90cmFuc2l0aW9uJztcbmltcG9ydCB7IGlwaG9uZXggfSBmcm9tICcuLi9taXhpbnMvaXBob25leCc7XG5WYW50Q29tcG9uZW50KHtcbiAgbWl4aW5zOiBbdHJhbnNpdGlvbihmYWxzZSksIGlwaG9uZXhdLFxuICBwcm9wczoge1xuICAgIHRyYW5zaXRpb246IFN0cmluZyxcbiAgICBjdXN0b21TdHlsZTogU3RyaW5nLFxuICAgIG92ZXJsYXlTdHlsZTogU3RyaW5nLFxuICAgIHpJbmRleDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgdmFsdWU6IDEwMFxuICAgIH0sXG4gICAgb3ZlcmxheToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHZhbHVlOiB0cnVlXG4gICAgfSxcbiAgICBjbG9zZU9uQ2xpY2tPdmVybGF5OiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IHRydWVcbiAgICB9LFxuICAgIHBvc2l0aW9uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJ2NlbnRlcidcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvbkNsaWNrT3ZlcmxheTogZnVuY3Rpb24gb25DbGlja092ZXJsYXkoKSB7XG4gICAgICB0aGlzLiRlbWl0KCdjbGljay1vdmVybGF5Jyk7XG5cbiAgICAgIGlmICh0aGlzLmRhdGEuY2xvc2VPbkNsaWNrT3ZlcmxheSkge1xuICAgICAgICB0aGlzLiRlbWl0KCdjbG9zZScpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSk7Il19