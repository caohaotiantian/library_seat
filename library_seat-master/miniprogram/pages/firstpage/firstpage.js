// pages/firstpage/firstpage.js
var information=getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    Adesk: "\n已被预约或正在使用座位数：" +information.Acount+"/总数",
    Bdesk:"\n已被预约或正在使用座位数："+information.Bcount+"/总数",
    Cdesk:"\n已被预约或正在使用座位数："+information.Ccount+"/总数",
    Halldesk:"\n已被预约或正在使用座位数："+information.Hallcount+"/总数"
  },

  gotoA: function (event) {  //跳转至选座
    wx.navigateTo({
      url: '/pages/choosearea/areaA/areaA',
    });
  },

  gotoB: function (event) {
    wx.navigateTo({
      url: '/pages/choosearea/areaB/areaB',
    });
  },

  gotoC: function (event) {
    wx.navigateTo({
      url: '/pages/choosearea/areaC/areaC',
    });
  },

  gotoHall: function (event) {
    wx.navigateTo({
      url: '/pages/choosearea/areaD/areaD',
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      reserve:information.userCondition.reserve,
      condition:information.userCondition.condition,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {  //下拉刷新
    var self = this;
    setTimeout(function() {
      self.setData({
      Adesk: "\n已被预约或正在使用座位数：" + information.Acount + "/总数",
      Bdesk: "\n已被预约或正在使用座位数：" + information.Bcount + "/总数",
      Cdesk: "\n已被预约或正在使用座位数：" + information.Ccount + "/总数",
      Halldesk: "\n已被预约或正在使用座位数：" + information.Hallcount + "/总数",
      reserve: information.userCondition.reserve,
      condition: information.userCondition.condition,
      })
      // 模拟请求数据，并渲染
     ;
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 200)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})