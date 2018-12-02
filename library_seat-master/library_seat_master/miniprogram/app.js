//app.js
var QQMapWX = require('qqmap-wx-jssdk.js');
var qqmapsdk;
var Transfer = require('locaTransfer.js')
var Login = require('login.js')
App({
  
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }
    // 实例化API核心类
    qqmapsdk = new QQMapWX({
      key: 'MMEBZ-IOURX-HDY4Z-TUJDA-OLXAH-F4F5H'
    })
    //用户登录
    Login.userLogin()
  },

  //获取用户位置
  locaInfo: function (parameter) {
    var that = this
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        qqmapsdk.reverseGeocoder({
          location: {
            latitude: res.latitude,
            longitude: res.longitude
          },
          success: function (addressres) {
            console.log(addressres.status)
            console.log(addressres.message)
            console.log(addressres.result)
            that.location.latitude = res.latitude
            that.location.longitude = res.longitude
            that.location.accuracy = res.accuracy
            //进行地理位置坐标的转化
            var gcj02tobd09 = Transfer.gcj02tobd09(that.location.longitude, that.location.latitude);
            that.location.longitude = gcj02tobd09[0]
            that.location.latitude = gcj02tobd09[1]
            var loca = [that.location.latitude, that.location.longitude, that.location.accuracy]
            typeof parameter == "function" && parameter(loca)
          }
        })
      }
    })
  },

  AdeskCondition: [{
    c01: "chair cx0", //a区  desk01 chair01  十位(可预约,不可预约)=(0,1)
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "1号桌",
    deskid: "adx1",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "2号桌",
    deskid: "adx2",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "3号桌",
    deskid: "adx3",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "4号桌",
    deskid: "adx4",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "5号桌",
    deskid: "adx5",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "6号桌",
    deskid: "adx6",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "7号桌",
    deskid: "adx7",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "8号桌",
    deskid: "adx8",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "9号桌",
    deskid: "adx9",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "10号桌",
    deskid: "adx10",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "11号桌",
    deskid: "adx11",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "12号桌",
    deskid: "adx12",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "13号桌",
    deskid: "adx13",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "14号桌",
    deskid: "adx14",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "15号桌",
    deskid: "adx15",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "16号桌",
    deskid: "adx16",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "17号桌",
    deskid: "adx17",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "18号桌",
    deskid: "adx18",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "19号桌",
    deskid: "adx19",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "20号桌",
    deskid: "adx20",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "21号桌",
    deskid: "adx21",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "22号桌",
    deskid: "adx22",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "23号桌",
    deskid: "adx23",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "24号桌",
    deskid: "adx24",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "25号桌",
    deskid: "adx25",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "26号桌",
    deskid: "adx26",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "27号桌",
    deskid: "adx27",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "28号桌",
    deskid: "adx28",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "29号桌",
    deskid: "adx29",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "30号桌",
    deskid: "adx30",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "31号桌",
    deskid: "adx31",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "32号桌",
    deskid: "adx32",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "33号桌",
    deskid: "adx33",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "34号桌",
    deskid: "adx34",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "35号桌",
    deskid: "adx35",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "36号桌",
    deskid: "adx36",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "37号桌",
    deskid: "adx37",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "38号桌",
    deskid: "adx38",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "39号桌",
    deskid: "adx39",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "40号桌",
    deskid: "adx40",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "41号桌",
    deskid: "adx41",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "42号桌",
    deskid: "adx42",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "43号桌",
    deskid: "adx43",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "44号桌",
    deskid: "adx44",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "45号桌",
    deskid: "adx45",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "46号桌",
    deskid: "adx46",
    desktype: "columnfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "47号桌",
    deskid: "adx47",
    desktype: "columnfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "48号桌",
    deskid: "adx48",
    desktype: "columnfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "49号桌",
    deskid: "adx49",
    desktype: "columnfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "50号桌",
    deskid: "adx50",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "51号桌",
    deskid: "adx51",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "52号桌",
    deskid: "adx52",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "53号桌",
    deskid: "adx53",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "54号桌",
    deskid: "adx54",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "55号桌",
    deskid: "adx55",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "56号桌",
    deskid: "adx56",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "57号桌",
    deskid: "adx57",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "58号桌",
    deskid: "adx58",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "59号桌",
    deskid: "adx59",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "60号桌",
    deskid: "adx60",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "61号桌",
    deskid: "adx61",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "62号桌",
    deskid: "adx62",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "63号桌",
    deskid: "adx63",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    c05: "chair cx0",
    c06: "chair cx0",
    desk: "64号桌",
    deskid: "adx64",
    desktype: "rowsix normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    c05: "chair cx0",
    c06: "chair cx0",
    desk: "65号桌",
    deskid: "adx65",
    desktype: "rowsix normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "66号桌",
    deskid: "adx66",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "67号桌",
    deskid: "adx67",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "68号桌",
    deskid: "adx68",
    desktype: "rowfour normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "69号桌",
    deskid: "adx69",
    desktype: "rowfour normal"
  }
  ],

  BdeskCondition: [
    {
      c01: "chair cx0", //b区  desk01 chair01  十位(可预约,不可预约)=(0,1)  个位(普通座,插位座)=(0,1)
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "1号桌",
      deskid: "bdx1",
      desktype: "rowsix elec"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "2号桌",
      deskid: "bdx2",
      desktype: "rowsix elec"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "3号桌",
      deskid: "bdx3",
      desktype: "rowsix elec"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "4号桌",
      deskid: "bdx4",
      desktype: "rowsix elec"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "5号桌",
      deskid: "bdx5",
      desktype: "rowsix normal"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "6号桌",
      deskid: "bdx6",
      desktype: "rowsix normal"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "7号桌",
      deskid: "bdx7",
      desktype: "rowsix normal"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "8号桌",
      deskid: "bdx8",
      desktype: "rowsix normal"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "9号桌",
      deskid: "bdx9",
      desktype: "rowsix normal"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "10号桌",
      deskid: "bdx10",
      desktype: "rowsix elec"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "11号桌",
      deskid: "bdx11",
      desktype: "rowsix elec"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "12号桌",
      deskid: "bdx12",
      desktype: "rowsix normal"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "13号桌",
      deskid: "bdx13",
      desktype: "rowsix normal"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "14号桌",
      deskid: "bdx14",
      desktype: "rowsix elec"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "15号桌",
      deskid: "bdx15",
      desktype: "rowsix elec"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "16号桌",
      deskid: "bdx16",
      desktype: "rowsix normal"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "17号桌",
      deskid: "bdx17",
      desktype: "rowsix normal"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "18号桌",
      deskid: "bdx18",
      desktype: "rowsix elec"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "19号桌",
      deskid: "bdx19",
      desktype: "rowsix elec"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "20号桌",
      deskid: "bdx20",
      desktype: "rowsix elec"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "21号桌",
      deskid: "bdx21",
      desktype: "rowsix elec"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "22号桌",
      deskid: "bdx22",
      desktype: "rowsix normal"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "23号桌",
      deskid: "bdx23",
      desktype: "rowsix normal"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "24号桌",
      deskid: "bdx24",
      desktype: "rowsix elec"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "25号桌",
      deskid: "bdx25",
      desktype: "rowsix elec"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "26号桌",
      deskid: "bdx26",
      desktype: "rowsix elec"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "27号桌",
      deskid: "bdx27",
      desktype: "rowsix elec"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "28号桌",
      deskid: "bdx28",
      desktype: "rowsix normal"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "29号桌",
      deskid: "bdx29",
      desktype: "rowsix normal"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "30号桌",
      deskid: "bdx30",
      desktype: "rowsix elec"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "31号桌",
      deskid: "bdx31",
      desktype: "rowsix elec"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "32号桌",
      deskid: "bdx32",
      desktype: "rowsix elec"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "33号桌",
      deskid: "bdx33",
      desktype: "rowsix elec"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "34号桌",
      deskid: "bdx34",
      desktype: "rowsix normal"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "35号桌",
      deskid: "bdx35",
      desktype: "rowsix normal"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "36号桌",
      deskid: "bdx36",
      desktype: "rowsix elec"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "37号桌",
      deskid: "bdx37",
      desktype: "rowsix elec"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "38号桌",
      deskid: "bdx38",
      desktype: "rowsix elec"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "39号桌",
      deskid: "bdx39",
      desktype: "rowsix elec"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "40号桌",
      deskid: "bdx40",
      desktype: "rowsix normal"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "41号桌",
      deskid: "bdx41",
      desktype: "rowsix normal"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "42号桌",
      deskid: "bdx42",
      desktype: "rowsix elec"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "43号桌",
      deskid: "bdx43",
      desktype: "rowsix elec"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "44号桌",
      deskid: "bdx44",
      desktype: "rowsix elec"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "45号桌",
      deskid: "bdx45",
      desktype: "rowsix elec"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "46号桌",
      deskid: "bdx46",
      desktype: "rowsix normal"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "47号桌",
      deskid: "bdx47",
      desktype: "rowsix normal"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "48号桌",
      deskid: "bdx48",
      desktype: "rowsix normal"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "49号桌",
      deskid: "bdx49",
      desktype: "rowsix normal"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "50号桌",
      deskid: "bdx50",
      desktype: "rowsix elec"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "51号桌",
      deskid: "bdx51",
      desktype: "rowsix elec"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "52号桌",
      deskid: "bdx52",
      desktype: "rowsix normal"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "53号桌",
      deskid: "bdx53",
      desktype: "rowsix normal"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "54号桌",
      deskid: "bdx54",
      desktype: "rowsix normal"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "55号桌",
      deskid: "bdx55",
      desktype: "rowsix elec"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "56号桌",
      deskid: "bdx56",
      desktype: "rowsix normal"
    },
    {
      c01: "chair cx0",
      c02: "chair cx0",
      c03: "chair cx0",
      c04: "chair cx0",
      c05: "chair cx0",
      c06: "chair cx0",
      desk: "57号桌",
      deskid: "bdx57",
      desktype: "rowsix normal"
    }
  ],

  CdeskCondition: [{
    c01: "chair cx0", //c区  desk01 chair01  十位(可预约,不可预约)=(0,1)  个位(普通座,插位座)=(0,1)
    c02: "chair cx0",
    desk: "1号",
    deskid: "cdx1",
    desktype: "rowtwo normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "2号",
    deskid: "cdx2",
    desktype: "rowtwo normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "3号",
    deskid: "cdx3",
    desktype: "rowtwo normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "4号",
    deskid: "cdx4",
    desktype: "rowtwo normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "5号",
    deskid: "cdx5",
    desktype: "rowtwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "6号",
    deskid: "cdx6",
    desktype: "rowtwo normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "7号",
    deskid: "cdx7",
    desktype: "rowtwo normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "8号",
    deskid: "cdx8",
    desktype: "rowtwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "9号",
    deskid: "cdx9",
    desktype: "rowtwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "10号",
    deskid: "cdx10",
    desktype: "rowtwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "11号",
    deskid: "cdx11",
    desktype: "rowtwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "12号",
    deskid: "cdx12",
    desktype: "rowtwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "13号",
    deskid: "cdx13",
    desktype: "rowtwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "14号",
    deskid: "cdx14",
    desktype: "rowtwo normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "15号",
    deskid: "cdx15",
    desktype: "rowtwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "16号",
    deskid: "cdx16",
    desktype: "rowtwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "17号",
    deskid: "cdx17",
    desktype: "rowtwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "18号",
    deskid: "cdx18",
    desktype: "rowtwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "19号",
    deskid: "cdx19",
    desktype: "rowtwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "20号",
    deskid: "cdx20",
    desktype: "rowtwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "21号",
    deskid: "cdx21",
    desktype: "rowtwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "22号",
    deskid: "cdx22",
    desktype: "rowtwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "23号",
    deskid: "cdx23",
    desktype: "rowtwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "24号",
    deskid: "cdx24",
    desktype: "rowtwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "25号",
    deskid: "cdx25",
    desktype: "rowtwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "26号",
    deskid: "cdx26",
    desktype: "rowtwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "27号",
    deskid: "cdx27",
    desktype: "rowtwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "28号",
    deskid: "cdx28",
    desktype: "rowtwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "29号",
    deskid: "cdx29",
    desktype: "rowtwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "30号",
    deskid: "cdx30",
    desktype: "rowtwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "31号",
    deskid: "cdx31",
    desktype: "rowtwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "32号",
    deskid: "cdx32",
    desktype: "rowtwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "33号",
    deskid: "cdx33",
    desktype: "rowtwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "34号",
    deskid: "cdx34",
    desktype: "rowtwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "35号",
    deskid: "cdx35",
    desktype: "rowtwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "36号",
    deskid: "cdx36",
    desktype: "rowtwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "37号",
    deskid: "cdx37",
    desktype: "rowtwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "38号",
    deskid: "cdx38",
    desktype: "rowtwo normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "39号",
    deskid: "cdx39",
    desktype: "columntwo normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "40号",
    deskid: "cdx40",
    desktype: "columntwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "41号",
    deskid: "cdx41",
    desktype: "columntwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "42号",
    deskid: "cdx42",
    desktype: "columntwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "43号",
    deskid: "cdx43",
    desktype: "columntwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "44号",
    deskid: "cdx44",
    desktype: "columntwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "45号",
    deskid: "cdx45",
    desktype: "columntwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "46号",
    deskid: "cdx46",
    desktype: "columntwo normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "47号",
    deskid: "cdx47",
    desktype: "columntwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "48号",
    deskid: "cdx48",
    desktype: "rowtwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "49号",
    deskid: "cdx49",
    desktype: "rowtwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "50号",
    deskid: "cdx50",
    desktype: "rowtwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "51号",
    deskid: "cdx51",
    desktype: "rowtwo normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "52号",
    deskid: "cdx52",
    desktype: "columntwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "53号",
    deskid: "cdx53",
    desktype: "columntwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "54号",
    deskid: "cdx54",
    desktype: "columntwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "55号",
    deskid: "cdx55",
    desktype: "columntwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "56号",
    deskid: "cdx56",
    desktype: "columntwo normal"
  },
  {
    c01: "chair cx0",
    desk: "57号",
    deskid: "cdx57",
    desktype: "columnone elec"
  }, {
    c01: "chair cx0",
    desk: "58号",
    deskid: "cdx58",
    desktype: "columnone elec"
  }, {
    c01: "chair cx0",
    desk: "59号",
    deskid: "cdx59",
    desktype: "columnone elec"
  }, {
    c01: "chair cx0",
    desk: "60号",
    deskid: "cdx60",
    desktype: "columnone elec"
  }, {
    c01: "chair cx0",
    desk: "61号",
    deskid: "cdx61",
    desktype: "columnone elec"
  }, {
    c01: "chair cx0",
    desk: "62号",
    deskid: "cdx62",
    desktype: "columnone elec"
  }, {
    c01: "chair cx0",
    desk: "63号",
    deskid: "cdx63",
    desktype: "columnone elec"
  },
  {
    c01: "chair cx0",
    desk: "64号",
    deskid: "cdx64",
    desktype: "rowone elec"
  },
  {
    c01: "chair cx0",
    desk: "65号",
    deskid: "cdx65",
    desktype: "rowone elec"
  }, {
    c01: "chair cx0",
    desk: "66号",
    deskid: "cdx66",
    desktype: "rowone elec"
  }, {
    c01: "chair cx0",
    desk: "67号",
    deskid: "cdx67",
    desktype: "rowone elec"
  },
  {
    c01: "chair cx0",
    desk: "68号",
    deskid: "cdx68",
    desktype: "columnone elec"
  },
  {
    c01: "chair cx0",
    desk: "69号",
    deskid: "cdx69",
    desktype: "columnone elec"
  }, {
    c01: "chair cx0",
    desk: "70号",
    deskid: "cdx70",
    desktype: "columnone elec"
  }, {
    c01: "chair cx0",
    desk: "71号",
    deskid: "cdx71",
    desktype: "columnone elec"
  }, {
    c01: "chair cx0",
    desk: "72号",
    deskid: "cdx72",
    desktype: "columnone elec"
  }, {
    c01: "chair cx0",
    desk: "73号",
    deskid: "cdx73",
    desktype: "columnone elec"
  }, {
    c01: "chair cx0",
    desk: "74号",
    deskid: "cdx74",
    desktype: "columnone elec"
  },
  {
    c01: "chair cx0",
    desk: "75号",
    deskid: "cdx75",
    desktype: "rowone elec"
  }, {
    c01: "chair cx0",
    desk: "76号",
    deskid: "cdx76",
    desktype: "rowone elec"
  }, {
    c01: "chair cx0",
    desk: "77号",
    deskid: "cdx77",
    desktype: "rowone elec"
  }, {
    c01: "chair cx0",
    desk: "78号",
    deskid: "cdx78",
    desktype: "rowone elec"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "79号",
    deskid: "cdx79",
    desktype: "columntwo normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "80号",
    deskid: "cdx80",
    desktype: "columntwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "81号",
    deskid: "cdx81",
    desktype: "columntwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "82号",
    deskid: "cdx82",
    desktype: "columntwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "83号",
    deskid: "cdx83",
    desktype: "columntwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "84号",
    deskid: "cdx84",
    desktype: "rowtwo normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "85号",
    deskid: "cdx85",
    desktype: "rowtwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "86号",
    deskid: "cdx86",
    desktype: "rowtwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "87号",
    deskid: "cdx87",
    desktype: "rowtwo normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "88号",
    deskid: "cdx88",
    desktype: "columntwo normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "89号",
    deskid: "cdx89",
    desktype: "columntwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "90号",
    deskid: "cdx90",
    desktype: "columntwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "91号",
    deskid: "cdx91",
    desktype: "columntwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "92号",
    deskid: "cdx92",
    desktype: "columntwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "93号",
    deskid: "cdx93",
    desktype: "columntwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "94号",
    deskid: "cdx94",
    desktype: "columntwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "95号",
    deskid: "cdx95",
    desktype: "columntwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "96号",
    deskid: "cdx96",
    desktype: "columntwo normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "97号",
    deskid: "cdx97",
    desktype: "rowtwo normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "98号",
    deskid: "cdx98",
    desktype: "rowtwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "99号",
    deskid: "cdx99",
    desktype: "rowtwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "100号",
    deskid: "cdx100",
    desktype: "rowtwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "101号",
    deskid: "cdx101",
    desktype: "rowtwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "102号",
    deskid: "cdx102",
    desktype: "rowtwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "103号",
    deskid: "cdx103",
    desktype: "rowtwo normal"
  }, {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "104号",
    deskid: "cdx104",
    desktype: "rowtwo normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "105号",
    deskid: "cdx105",
    desktype: "columntwo normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "106号",
    deskid: "cdx106",
    desktype: "columntwo normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "107号",
    deskid: "cdx107",
    desktype: "columntwo normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "108号",
    deskid: "cdx108",
    desktype: "columntwo normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "109号",
    deskid: "cdx109",
    desktype: "columntwo normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "110号",
    deskid: "cdx110",
    desktype: "columntwo normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "111号",
    deskid: "cdx111",
    desktype: "columntwo normal"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    desk: "112号",
    deskid: "cdx112",
    desktype: "columntwo normal"
  }],

  HalldeskCondition: [{
    c01: "chair cx0", //走廊  desk01 chair01  十位(可预约,不可预约)=(0,1)  个位(普通座,插位座)=(0,1)
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "1号桌",
    deskid: "hdx1",
    desktype: "columnfour elec"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "2号桌",
    deskid: "hdx2",
    desktype: "columnfour elec"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "3号桌",
    deskid: "hdx3",
    desktype: "columnfour elec"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "4号桌",
    deskid: "hdx4",
    desktype: "columnfour elec"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "5号桌",
    deskid: "hdx5",
    desktype: "columnfour elec"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "6号桌",
    deskid: "hdx6",
    desktype: "columnfour elec"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "7号桌",
    deskid: "hdx7",
    desktype: "columnfour elec"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "8号桌",
    deskid: "hdx8",
    desktype: "columnfour elec"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "9号桌",
    deskid: "hdx9",
    desktype: "columnfour elec"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "10号桌",
    deskid: "hdx10",
    desktype: "columnfour elec"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "11号桌",
    deskid: "hdx11",
    desktype: "columnfour elec"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "12号桌",
    deskid: "hdx12",
    desktype: "columnfour elec"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "13号桌",
    deskid: "hdx13",
    desktype: "columnfour elec"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "14号桌",
    deskid: "hdx14",
    desktype: "columnfour elec"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "15号桌",
    deskid: "hdx15",
    desktype: "columnfour elec"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "16号桌",
    deskid: "hdx16",
    desktype: "columnfour elec"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "17号桌",
    deskid: "hdx17",
    desktype: "columnfour elec"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "18号桌",
    deskid: "hdx18",
    desktype: "columnfour elec"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "19号桌",
    deskid: "hdx19",
    desktype: "columnfour elec"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "20号桌",
    deskid: "hdx20",
    desktype: "rowfour elec"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "21号桌",
    deskid: "hdx21",
    desktype: "rowfour elec"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "22号桌",
    deskid: "hdx22",
    desktype: "rowfour elec"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "23号桌",
    deskid: "hdx23",
    desktype: "rowfour elec"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "24号桌",
    deskid: "hdx24",
    desktype: "rowfour elec"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "25号桌",
    deskid: "hdx25",
    desktype: "rowfour elec"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "26号桌",
    deskid: "hdx26",
    desktype: "rowfour elec"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "27号桌",
    deskid: "hdx27",
    desktype: "rowfour elec"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "28号桌",
    deskid: "hdx28",
    desktype: "columnfour elec"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "29号桌",
    deskid: "hdx29",
    desktype: "columnfour elec"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "30号桌",
    deskid: "hdx30",
    desktype: "columnfour elec"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "31号桌",
    deskid: "hdx31",
    desktype: "columnfour elec"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "32号桌",
    deskid: "hdx32",
    desktype: "columnfour elec"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "33号桌",
    deskid: "hdx33",
    desktype: "columnfour elec"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "34号桌",
    deskid: "hdx34",
    desktype: "columnfour elec"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "35号桌",
    deskid: "hdx35",
    desktype: "columnfour elec"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "36号桌",
    deskid: "hdx36",
    desktype: "columnfour elec"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "37号桌",
    deskid: "hdx37",
    desktype: "columnfour elec"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "38号桌",
    deskid: "hdx38",
    desktype: "columnfour elec"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "39号桌",
    deskid: "hdx39",
    desktype: "columnfour elec"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "40号桌",
    deskid: "hdx40",
    desktype: "columnfour elec"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "41号桌",
    deskid: "hdx41",
    desktype: "columnfour elec"
  },
  {
    c01: "chair cx0",
    c02: "chair cx0",
    c03: "chair cx0",
    c04: "chair cx0",
    desk: "42号桌",
    deskid: "hdx42",
    desktype: "columnfour elec"
  }],
  Acount: 0,             //各区域被占用座位数
  Bcount: 0,
  Ccount: 0,
  Hallcount: 0,

  location: {
    latitude: 0,
    longitude: 0,
    accuracy: 0
  },

  userCondition: {
    reserve: [],        //正在选择或预约的座位 [区域，桌号，椅号]
    condition: 0,       //空闲：0  正在选择：1  预约中：2
    credit: 100,        //信用值
    time: 0,             //剩余时间
  }
})
