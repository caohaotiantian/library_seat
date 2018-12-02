//login.js
//用户登陆
function userLogin() {
  wx.checkSession({
    success: function () {
      //存在登陆态
      console.log('success')
    },
    fail: function () {
      //不存在登陆态
      console.log('fail')
      onLogin()
    }
  })
}

function onLogin() {
  wx.login({
    success: function (res) {
      if (res.code) {
        //发起网络请求
    
      }
    },
    fail: function (res) {

    }
  })

}

function getUserInfo() {
  wx.getUserInfo({
    success: function (res) {
      var userInfo = res.userInfo
      userInfoSetInSQL(userInfo)
    },
    fail: function () {
      userAccess()
    }
  })
}

function userInfoSetInSQL(userInfo) {
  wx.getStorage({
    key: 'third_Session',
    success: function (res) {
      wx.request({
        url: 'Our Server ApiUrl',
        data: {
          third_Session: res.data,
          nickName: userInfo.nickName,
          avatarUrl: userInfo.avatarUrl,
          gender: userInfo.gender,
          province: userInfo.province,
          city: userInfo.city,
          country: userInfo.country
        },
        success: function (res) {
          if (逻辑成功) {
            //SQL更新用户数据成功
          }
          else {
            //SQL更新用户数据失败
          }
        }
      })
    }
  })
}

module.exports = {
  userLogin: userLogin
}
