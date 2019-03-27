'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  relation: {
    name: 'col',
    type: 'descendant',
    linked: function linked(target) {
      if (this.data.gutter) {
        target.setGutter(this.data.gutter);
      }
    }
  },
  props: {
    gutter: Number
  },
  watch: {
    gutter: 'setGutter'
  },
  mounted: function mounted() {
    if (this.data.gutter) {
      this.setGutter();
    }
  },
  methods: {
    setGutter: function setGutter() {
      var _this = this;

      var gutter = this.data.gutter;
      var margin = "-" + Number(gutter) / 2 + "px";
      var style = gutter ? "margin-right: " + margin + "; margin-left: " + margin + ";" : '';
      this.set({
        style: style
      });
      this.getRelationNodes('../col/index').forEach(function (col) {
        col.setGutter(_this.data.gutter);
      });
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJsaW5rZWQiLCJ0YXJnZXQiLCJkYXRhIiwiZ3V0dGVyIiwic2V0R3V0dGVyIiwicHJvcHMiLCJOdW1iZXIiLCJ3YXRjaCIsIm1vdW50ZWQiLCJtZXRob2RzIiwiX3RoaXMiLCJtYXJnaW4iLCJzdHlsZSIsInNldCIsImdldFJlbGF0aW9uTm9kZXMiLCJmb3JFYWNoIiwiY29sIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLDhCQUFjO0FBQ1pBLFlBQVU7QUFDUkMsVUFBTSxLQURFO0FBRVJDLFVBQU0sWUFGRTtBQUdSQyxZQUFRLFNBQVNBLE1BQVQsQ0FBZ0JDLE1BQWhCLEVBQXdCO0FBQzlCLFVBQUksS0FBS0MsSUFBTCxDQUFVQyxNQUFkLEVBQXNCO0FBQ3BCRixlQUFPRyxTQUFQLENBQWlCLEtBQUtGLElBQUwsQ0FBVUMsTUFBM0I7QUFDRDtBQUNGO0FBUE8sR0FERTtBQVVaRSxTQUFPO0FBQ0xGLFlBQVFHO0FBREgsR0FWSztBQWFaQyxTQUFPO0FBQ0xKLFlBQVE7QUFESCxHQWJLO0FBZ0JaSyxXQUFTLFNBQVNBLE9BQVQsR0FBbUI7QUFDMUIsUUFBSSxLQUFLTixJQUFMLENBQVVDLE1BQWQsRUFBc0I7QUFDcEIsV0FBS0MsU0FBTDtBQUNEO0FBQ0YsR0FwQlc7QUFxQlpLLFdBQVM7QUFDUEwsZUFBVyxTQUFTQSxTQUFULEdBQXFCO0FBQzlCLFVBQUlNLFFBQVEsSUFBWjs7QUFFQSxVQUFJUCxTQUFTLEtBQUtELElBQUwsQ0FBVUMsTUFBdkI7QUFDQSxVQUFJUSxTQUFTLE1BQU1MLE9BQU9ILE1BQVAsSUFBaUIsQ0FBdkIsR0FBMkIsSUFBeEM7QUFDQSxVQUFJUyxRQUFRVCxTQUFTLG1CQUFtQlEsTUFBbkIsR0FBNEIsaUJBQTVCLEdBQWdEQSxNQUFoRCxHQUF5RCxHQUFsRSxHQUF3RSxFQUFwRjtBQUNBLFdBQUtFLEdBQUwsQ0FBUztBQUNQRCxlQUFPQTtBQURBLE9BQVQ7QUFHQSxXQUFLRSxnQkFBTCxDQUFzQixjQUF0QixFQUFzQ0MsT0FBdEMsQ0FBOEMsVUFBVUMsR0FBVixFQUFlO0FBQzNEQSxZQUFJWixTQUFKLENBQWNNLE1BQU1SLElBQU4sQ0FBV0MsTUFBekI7QUFDRCxPQUZEO0FBR0Q7QUFiTTtBQXJCRyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuVmFudENvbXBvbmVudCh7XG4gIHJlbGF0aW9uOiB7XG4gICAgbmFtZTogJ2NvbCcsXG4gICAgdHlwZTogJ2Rlc2NlbmRhbnQnLFxuICAgIGxpbmtlZDogZnVuY3Rpb24gbGlua2VkKHRhcmdldCkge1xuICAgICAgaWYgKHRoaXMuZGF0YS5ndXR0ZXIpIHtcbiAgICAgICAgdGFyZ2V0LnNldEd1dHRlcih0aGlzLmRhdGEuZ3V0dGVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHByb3BzOiB7XG4gICAgZ3V0dGVyOiBOdW1iZXJcbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBndXR0ZXI6ICdzZXRHdXR0ZXInXG4gIH0sXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uIG1vdW50ZWQoKSB7XG4gICAgaWYgKHRoaXMuZGF0YS5ndXR0ZXIpIHtcbiAgICAgIHRoaXMuc2V0R3V0dGVyKCk7XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgc2V0R3V0dGVyOiBmdW5jdGlvbiBzZXRHdXR0ZXIoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB2YXIgZ3V0dGVyID0gdGhpcy5kYXRhLmd1dHRlcjtcbiAgICAgIHZhciBtYXJnaW4gPSBcIi1cIiArIE51bWJlcihndXR0ZXIpIC8gMiArIFwicHhcIjtcbiAgICAgIHZhciBzdHlsZSA9IGd1dHRlciA/IFwibWFyZ2luLXJpZ2h0OiBcIiArIG1hcmdpbiArIFwiOyBtYXJnaW4tbGVmdDogXCIgKyBtYXJnaW4gKyBcIjtcIiA6ICcnO1xuICAgICAgdGhpcy5zZXQoe1xuICAgICAgICBzdHlsZTogc3R5bGVcbiAgICAgIH0pO1xuICAgICAgdGhpcy5nZXRSZWxhdGlvbk5vZGVzKCcuLi9jb2wvaW5kZXgnKS5mb3JFYWNoKGZ1bmN0aW9uIChjb2wpIHtcbiAgICAgICAgY29sLnNldEd1dHRlcihfdGhpcy5kYXRhLmd1dHRlcik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn0pOyJdfQ==