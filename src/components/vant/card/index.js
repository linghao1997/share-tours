'use strict';

var _link = require('./../mixins/link.js');

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  classes: ['num-class', 'desc-class', 'thumb-class', 'title-class', 'price-class', 'origin-price-class'],
  mixins: [_link.link],
  props: {
    tag: String,
    num: String,
    desc: String,
    thumb: String,
    title: String,
    price: String,
    centered: Boolean,
    lazyLoad: Boolean,
    thumbLink: String,
    originPrice: String,
    thumbMode: {
      type: String,
      value: 'aspectFit'
    },
    currency: {
      type: String,
      value: '¥'
    }
  },
  methods: {
    onClickThumb: function onClickThumb() {
      this.jumpLink('thumbLink');
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNsYXNzZXMiLCJtaXhpbnMiLCJsaW5rIiwicHJvcHMiLCJ0YWciLCJTdHJpbmciLCJudW0iLCJkZXNjIiwidGh1bWIiLCJ0aXRsZSIsInByaWNlIiwiY2VudGVyZWQiLCJCb29sZWFuIiwibGF6eUxvYWQiLCJ0aHVtYkxpbmsiLCJvcmlnaW5QcmljZSIsInRodW1iTW9kZSIsInR5cGUiLCJ2YWx1ZSIsImN1cnJlbmN5IiwibWV0aG9kcyIsIm9uQ2xpY2tUaHVtYiIsImp1bXBMaW5rIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBLDhCQUFjO0FBQ1pBLFdBQVMsQ0FBQyxXQUFELEVBQWMsWUFBZCxFQUE0QixhQUE1QixFQUEyQyxhQUEzQyxFQUEwRCxhQUExRCxFQUF5RSxvQkFBekUsQ0FERztBQUVaQyxVQUFRLENBQUNDLFVBQUQsQ0FGSTtBQUdaQyxTQUFPO0FBQ0xDLFNBQUtDLE1BREE7QUFFTEMsU0FBS0QsTUFGQTtBQUdMRSxVQUFNRixNQUhEO0FBSUxHLFdBQU9ILE1BSkY7QUFLTEksV0FBT0osTUFMRjtBQU1MSyxXQUFPTCxNQU5GO0FBT0xNLGNBQVVDLE9BUEw7QUFRTEMsY0FBVUQsT0FSTDtBQVNMRSxlQUFXVCxNQVROO0FBVUxVLGlCQUFhVixNQVZSO0FBV0xXLGVBQVc7QUFDVEMsWUFBTVosTUFERztBQUVUYSxhQUFPO0FBRkUsS0FYTjtBQWVMQyxjQUFVO0FBQ1JGLFlBQU1aLE1BREU7QUFFUmEsYUFBTztBQUZDO0FBZkwsR0FISztBQXVCWkUsV0FBUztBQUNQQyxrQkFBYyxTQUFTQSxZQUFULEdBQXdCO0FBQ3BDLFdBQUtDLFFBQUwsQ0FBYyxXQUFkO0FBQ0Q7QUFITTtBQXZCRyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbGluayB9IGZyb20gJy4uL21peGlucy9saW5rJztcbmltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcblZhbnRDb21wb25lbnQoe1xuICBjbGFzc2VzOiBbJ251bS1jbGFzcycsICdkZXNjLWNsYXNzJywgJ3RodW1iLWNsYXNzJywgJ3RpdGxlLWNsYXNzJywgJ3ByaWNlLWNsYXNzJywgJ29yaWdpbi1wcmljZS1jbGFzcyddLFxuICBtaXhpbnM6IFtsaW5rXSxcbiAgcHJvcHM6IHtcbiAgICB0YWc6IFN0cmluZyxcbiAgICBudW06IFN0cmluZyxcbiAgICBkZXNjOiBTdHJpbmcsXG4gICAgdGh1bWI6IFN0cmluZyxcbiAgICB0aXRsZTogU3RyaW5nLFxuICAgIHByaWNlOiBTdHJpbmcsXG4gICAgY2VudGVyZWQ6IEJvb2xlYW4sXG4gICAgbGF6eUxvYWQ6IEJvb2xlYW4sXG4gICAgdGh1bWJMaW5rOiBTdHJpbmcsXG4gICAgb3JpZ2luUHJpY2U6IFN0cmluZyxcbiAgICB0aHVtYk1vZGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnYXNwZWN0Rml0J1xuICAgIH0sXG4gICAgY3VycmVuY3k6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnwqUnXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25DbGlja1RodW1iOiBmdW5jdGlvbiBvbkNsaWNrVGh1bWIoKSB7XG4gICAgICB0aGlzLmp1bXBMaW5rKCd0aHVtYkxpbmsnKTtcbiAgICB9XG4gIH1cbn0pOyJdfQ==