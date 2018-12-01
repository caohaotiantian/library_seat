// miniprogram/pages/main/main.js
var appInfo = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
      text:'Hellow,world!',
      array:[
        {id:"A",special:'0'},
        {id:"B",special:'1'},
        {id:"C",special:'2'},
        {id:"D",special:'3'}
      ],
      obj:{text:10},
      location:{
        latitude:0,
        longitude:0,
        accuracy:0
      },
      length:10
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var loca = [0, 0, 0]
    appInfo.locaInfo(function(loca){
      that.setData({
        'location.latitude': loca[0],
        'location.longitude': loca[1],
        'location.accuracy': loca[2]
      })
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
  onPullDownRefresh: function () {

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

  },

  //事件处理
  click:function(){
    this.setData({
      text:"How are you!"
    })
  },

  switch:function(e){
    const length=this.data.array.length
    for (let i=0; i<length; i++){
      const x = Math.floor(Math.random()*length)
      const y = Math.floor(Math.random()*length)
      const temp = this.data.array[x]
      this.data.array[x] = this.data.array[y]
      this.data.array[y] = temp
    }
    this.setData({
      array:this.data.array
    })
  },

  addToFront:function(e){
    const length = this.data.array.length
    this.data.array=[{id:length,special:''+length}].concat(this.data.array)
    this.setData({
      array:this.data.array 
    })
  },

  changeObject:function(){
    var x = 100
    this.setData({
      'obj.text':x
    })
  },

})