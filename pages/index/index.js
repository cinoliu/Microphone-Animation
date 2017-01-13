//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    spreakingAnimation: {},//放大动画
  },
  onLoad: function () {
  },
  //点击开始说话
  startSpeak: function () {
    var _this = this;
    var timer = setInterval(function () {
      console.log("开始说话.....")
      speaking.call(_this);
    }, 200);
  },
})
function speaking() {
  console.log("动画.....")
  var _this = this;
  var animation = wx.createAnimation({
    duration: 1000
  })
  animation.opacity(0).scale(3, 3).step();//修改透明度,放大
  this.setData({
    spreakingAnimation: animation.export()
  })
}