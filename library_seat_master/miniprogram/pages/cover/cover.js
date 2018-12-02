// pages/cover/cover.js
Page({

  onTapJump: function (event) {
    wx.navigateTo({
      url: "../firstpage/firstpage",
      success: function () {
        console.log("jump success")
      },
      fail: function () {
        console.log("jump failed")
      },
      complete: function () {
        console.log("jump complete")
      }
    });
  },

  onTapJumpwode: function (event) {
    wx.navigateTo({
      url: "/pages/me/me",
      success: function () {
        console.log("jump success")
      },
      fail: function () {
        console.log("jump failed")
      },
      complete: function () {
        console.log("jump complete")
      }
    });
  },

  onTapJumpguanyu: function (event) {
    wx.navigateTo({
      url: "/pages/guanyu/guanyu",
      success: function () {
        console.log("jump success")
      },
      fail: function () {
        console.log("jump failed")
      },
      complete: function () {
        console.log("jump complete")
      }
    });
  }

})