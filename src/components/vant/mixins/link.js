'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var link = exports.link = Behavior({
  properties: {
    url: String,
    linkType: {
      type: String,
      value: 'navigateTo'
    }
  },
  methods: {
    jumpLink: function jumpLink(urlKey) {
      if (urlKey === void 0) {
        urlKey = 'url';
      }

      var url = this.data[urlKey];

      if (url) {
        wx[this.data.linkType]({
          url: url
        });
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpbmsuanMiXSwibmFtZXMiOlsibGluayIsIkJlaGF2aW9yIiwicHJvcGVydGllcyIsInVybCIsIlN0cmluZyIsImxpbmtUeXBlIiwidHlwZSIsInZhbHVlIiwibWV0aG9kcyIsImp1bXBMaW5rIiwidXJsS2V5IiwiZGF0YSIsInd4Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFPLElBQUlBLHNCQUFPQyxTQUFTO0FBQ3pCQyxjQUFZO0FBQ1ZDLFNBQUtDLE1BREs7QUFFVkMsY0FBVTtBQUNSQyxZQUFNRixNQURFO0FBRVJHLGFBQU87QUFGQztBQUZBLEdBRGE7QUFRekJDLFdBQVM7QUFDUEMsY0FBVSxTQUFTQSxRQUFULENBQWtCQyxNQUFsQixFQUEwQjtBQUNsQyxVQUFJQSxXQUFXLEtBQUssQ0FBcEIsRUFBdUI7QUFDckJBLGlCQUFTLEtBQVQ7QUFDRDs7QUFFRCxVQUFJUCxNQUFNLEtBQUtRLElBQUwsQ0FBVUQsTUFBVixDQUFWOztBQUVBLFVBQUlQLEdBQUosRUFBUztBQUNQUyxXQUFHLEtBQUtELElBQUwsQ0FBVU4sUUFBYixFQUF1QjtBQUNyQkYsZUFBS0E7QUFEZ0IsU0FBdkI7QUFHRDtBQUNGO0FBYk07QUFSZ0IsQ0FBVCxDQUFYIiwiZmlsZSI6ImxpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdmFyIGxpbmsgPSBCZWhhdmlvcih7XG4gIHByb3BlcnRpZXM6IHtcbiAgICB1cmw6IFN0cmluZyxcbiAgICBsaW5rVHlwZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICduYXZpZ2F0ZVRvJ1xuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGp1bXBMaW5rOiBmdW5jdGlvbiBqdW1wTGluayh1cmxLZXkpIHtcbiAgICAgIGlmICh1cmxLZXkgPT09IHZvaWQgMCkge1xuICAgICAgICB1cmxLZXkgPSAndXJsJztcbiAgICAgIH1cblxuICAgICAgdmFyIHVybCA9IHRoaXMuZGF0YVt1cmxLZXldO1xuXG4gICAgICBpZiAodXJsKSB7XG4gICAgICAgIHd4W3RoaXMuZGF0YS5saW5rVHlwZV0oe1xuICAgICAgICAgIHVybDogdXJsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSk7Il19