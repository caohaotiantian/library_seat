// pages/choosearea/areaB/areaB.js
var information = getApp()
/** 
 * 需要一个目标日期，初始化时，先得出到当前时间还有剩余多少秒
 * 1.将秒数换成格式化输出为XX天XX小时XX分钟XX秒 XX
 * 2.提供一个时钟，每10ms运行一次，渲染时钟，再总ms数自减10
 * 3.剩余的秒次为零时，return，给出tips提示说，已经截止
 */

// 定义一个总秒数，以一分钟为例。TODO，传入一个时间点，转换成总秒数
// 定义一个总毫秒数，以一分钟为例。TODO，传入一个时间点，转换成总毫秒数
var micro_second = 900 * 1000;
var setInter = ''

/* 毫秒级倒计时 */
function count_down(that) {
  // 渲染倒计时时钟
  if (information.userCondition.condition != 2) { return }
  that.setData({
    clock: date_format(micro_second)
  });

  if (micro_second <= 0 && information.userCondition.condition != 3) {
    var x = information.userCondition.reserve;
    var posit = 'c' + x[2];
    var area = x[0];
    if (area == 'A') {
      information.AdeskCondition[x[1] - 1][posit] = "chair cx0"
      information.Acount--;
    }
    else if (area == 'B') {
      information.BdeskCondition[x[1] - 1][posit] = "chair cx0"
      information.Bcount--;
    }
    else if (area == 'C') {
      information.CdeskCondition[x[1] - 1][posit] = "chair cx0"
      information.Ccount--;
    }
    else if (area == '走廊') {
      information.HalldeskCondition[x[1] - 1][posit] = "chair cx0"
      information.Hallcount--;
    }
    information.userCondition.condition = 0;
    information.userCondition.credit--;
    information.userCondition.reserve = [];
    that.setData({
      deskinfo: information.BdeskCondition,
      userinfo: information.userCondition,
    })
    clearInterval(setInter)

    wx.showModal({
      title: '时间到',
      content: '由于您未在规定时间内抵达图书馆，座位已自动为您取消并扣除您1分的信誉积分',
      showCancel: false
    })

    // timeout则跳出递归
    return;
  }
  setTimeout(function () {
    // 放在最后--
    micro_second -= 1000;
    count_down(that);
  }, 1000)
}

// 时间格式化输出，如03:25:19 86。每1000ms都会调用一次
function date_format(micro_second) {
  // 秒数
  var second = Math.floor(micro_second / 1000);
  // 小时位
  var hr = Math.floor(second / 3600);
  // 分钟位
  var min = fill_zero_prefix(Math.floor((second - hr * 3600) / 60));
  // 秒位
  var sec = fill_zero_prefix((second - hr * 3600 - min * 60)); // equal to => var sec = second % 60;
  // 毫秒位，保留2位

  return hr + ":" + min + ":" + sec

}

// 位数不足补零
function fill_zero_prefix(num) {
  return num < 10 ? "0" + num : num
}

//时间重置
function resetTimer() {
  micro_second = 900 * 1000
}

//监测用户是否进入图书馆，若是则进入就座阶段，每两分钟返回一次位置
function monitorLoction(that) {
  setInter = setInterval(function () {
    var loca = [0, 0, 0]
    information.locaInfo(function (loca) {
      that.setData({
        'location.latitude': loca[0],
        'location.longitude': loca[1],
        'location.accuracy': loca[2]
      })
    })

    if (inLocation(that.data.location.latitude, that.data.location.longitude)) {
      clearInterval(setInter)
      that.inSeat()
    }
  }, 120 * 1000)
}

//检测用户是否还在图书馆，若否则进入离座阶段。每五分钟返回一次位置
function checkInLocation(that) {
  setInter = setInterval(function () {
    var loca = [0, 0, 0]
    information.locaInfo(function (loca) {
      that.setData({
        'location.latitude': loca[0],
        'location.longitude': loca[1],
        'location.accuracy': loca[2]
      })
    })

    if (!inLocation(that.data.location.latitude, that.data.location.longitude)) {
      clearInterval(setInter)
      that.autoOutSeat()
    }
  }, 600 * 1000)
}

//检查位置是否在图书馆
function inLocation(latitude, longitude) {
  if (latitude >= 31.031825 && latitude <= 31.033341 && longitude >= 121.442379 && longitude <= 121.444742) {
    return true
  } else {
    return false
  }
}

var timer = require('../../timer/timer.js')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    clock: '',
    location: {
      latitude: 0,
      longitude: 0,
      accuracy: 0
    },
    bigger: true,
    x: 100,
    y: 100,
    scalemax: 7,
    deskinfo: [],
    userinfo: [],
    time: information.userCondition.time,//剩余时间
  },


  choose: function (event) { //用户点击座位
    if (information.userCondition.credit < 60) { //信誉小于60，发出警报
      wx.showModal({
        title: '警告',
        content: '你的信誉值小于60，不可选择座位！',
        showCancel: false,
      })
      return 0;
    } else if (information.userCondition.condition == 0 || information.userCondition.condition == 1) { //用户空闲或者正在选择
      var evinfo = event.target.dataset;
      if (evinfo.class == "chair cx0") { //座位空闲
        information.userCondition.reserve = ["B", parseInt(evinfo.pos.split('x')[1]), evinfo.id];
        //获取位置信息[A区，桌子号，椅子号]（“A”，数字，字符串）
        information.userCondition.condition = 1;
        //用户状态改为正在选择
      }
    }
    this.setData({
      deskinfo: information.BdeskCondition
    })
    var x = information.userCondition.reserve[1] - 1;
    var y = "c" + information.userCondition.reserve[2];
    this.data.deskinfo[x][y] = 'chair mine';
    this.setData({
      userinfo: information.userCondition, //重新渲染，使下部分提示框和确定按钮出现
      deskinfo: this.data.deskinfo
    })
  },

  determine: function (event) { //用户点击“确认预约”
    this.setData({
      time: information.userCondition.time = timer.formatTime(new Date())
    })
    var x = information.userCondition.reserve; //用户信息
    var posit = 'c' + x[2]; //座位号在座位信息表中的key
    var that = this;
    if (information.BdeskCondition[x[1] - 1][posit] == "chair cx0") {
      information.BdeskCondition[x[1] - 1][posit] = "chair cx1"; //改为不可选
      information.userCondition.condition = 2; //用户状态改变
      information.Bcount++; //B区座位被占用数改变
      wx.showModal({
        title: '完成',
        content: '预约成功,请在15分钟内就座',
        showCancel: false,
      })
      resetTimer()
      count_down(this)
      monitorLoction(this)
    }
    else { //未执行，可能在选择时被他人预约了
      information.userCondition.condition = 0;
      wx.showModal({
        title: '未完成',
        content: '该位置已被预约',
        showCancel: false,
      })
    }
    this.setData({
      userinfo: information.userCondition,
      deskinfo: information.BdeskCondition,
    })
    var x = information.userCondition.reserve[1] - 1;
    var y = "c" + information.userCondition.reserve[2];
    this.data.deskinfo[x][y] = 'chair mine';
    this.setData({
      deskinfo: this.data.deskinfo,
    })
  },

  cancelwarn: function (event) {
    var that = this;
    wx.showModal({
      title: '警告',
      content: '取消预约会减少信誉值1点，确定取消？',
      success(res) {
        if (res.confirm) {
          var x = information.userCondition.reserve;
          var posit = 'c' + x[2];
          var area = x[0];
          if (area == 'A') {
            information.AdeskCondition[x[1] - 1][posit] = "chair cx0"
            information.Acount--;
          }
          else if (area == 'B') {
            information.BdeskCondition[x[1] - 1][posit] = "chair cx0"
            information.Bcount--;
          }
          else if (area == 'C') {
            information.CdeskCondition[x[1] - 1][posit] = "chair cx0"
            information.Ccount--;
          }
          else if (area == '走廊') {
            information.HalldeskCondition[x[1] - 1][posit] = "chair cx0"
            information.Hallcount--;
          }
          information.userCondition.condition = 0;
          information.userCondition.credit--;
          information.userCondition.reserve = [];
          information.userCondition.time = -1;
          that.setData({
            deskinfo: information.BdeskCondition,
            userinfo: information.userCondition,
          })
          clearInterval(setInter)

          wx.showToast({
            title: '取消成功',
          })
        }
      },
    })
  },

  inSeat: function () {//用户开始就座，进入就座模式
    var that = this
    information.userCondition.condition = 3
    console.log(information.userCondition.condition)
    console.log('information.userCondition.condition')
    that.setData({
      userinfo: information.userCondition
    })

    checkInLocation(this)
  },

  autoOutSeat: function () {//用户离开图书馆后自动释放座位
    var that = this
    //释放座位
    var x = information.userCondition.reserve;
    var posit = 'c' + x[2];
    var area = x[0];
    if (area == 'A') {
      information.AdeskCondition[x[1] - 1][posit] = "chair cx0"
      information.Acount--;
    }
    else if (area == 'B') {
      information.BdeskCondition[x[1] - 1][posit] = "chair cx0"
      information.Bcount--;
    }
    else if (area == 'C') {
      information.CdeskCondition[x[1] - 1][posit] = "chair cx0"
      information.Ccount--;
    }
    else if (area == '走廊') {
      information.HalldeskCondition[x[1] - 1][posit] = "chair cx0"
      information.Hallcount--;
    }
    information.userCondition.condition = 0;
    information.userCondition.credit--;
    information.userCondition.reserve = [];
    that.setData({
      deskinfo: information.AdeskCondition,
      userinfo: information.userCondition,
    })
    clearInterval(setInter)
  },

  outSeat: function (event) {//用户离开座位，座位被释放
    var that = this
    wx.showModal({ //提示
      title: '提示',
      content: '确定要释放座位吗？',
      success(res) {
        if (res.confirm) { //确认释放
          var x = information.userCondition.reserve;
          var posit = 'c' + x[2];
          var area = x[0];
          if (area == 'A') {
            information.AdeskCondition[x[1] - 1][posit] = "chair cx0"
            information.Acount--;
          }
          else if (area == 'B') {
            information.BdeskCondition[x[1] - 1][posit] = "chair cx0"
            information.Bcount--;
          }
          else if (area == 'C') {
            information.CdeskCondition[x[1] - 1][posit] = "chair cx0"
            information.Ccount--;
          }
          else if (area == '走廊') {
            information.HalldeskCondition[x[1] - 1][posit] = "chair cx0"
            information.Hallcount--;
          }
          information.userCondition.condition = 0;
          information.userCondition.credit--;
          information.userCondition.reserve = [];
          that.setData({
            deskinfo: information.AdeskCondition,
            userinfo: information.userCondition,
          })
          clearInterval(setInter)

          wx.showModal({
            title: '完成',
            content: '释放成功',
            showCancel: false,
          })
        }
      },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {
    this.setData({
      deskinfo: information.BdeskCondition,
      userinfo: information.userCondition,
      time: information.userCondition.time,
    })
    if (information.userCondition.condition != 0 && information.userCondition.reserve[0] == 'B') {
      var x = information.userCondition.reserve[1] - 1;
      var y = "c" + information.userCondition.reserve[2];
      this.data.deskinfo[x][y] = 'chair mine';
      this.setData({
        deskinfo: this.data.deskinfo,
      })
    }
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
  onHide: function (options) {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function (options) {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    var self = this;
    setTimeout(function () {
      self.setData({
        userinfo: information.userCondition,
        deskinfo: information.BdeskCondition,
      })
        // 模拟请求数据，并渲染
        ;
      if (information.userCondition.condition != 0 && information.userCondition.reserve[0] == 'B') {
        var x = information.userCondition.reserve[1] - 1;
        var y = "c" + information.userCondition.reserve[2];
        self.data.deskinfo[x][y] = 'chair mine';
        self.setData({
          deskinfo: self.data.deskinfo,
        })
      }
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