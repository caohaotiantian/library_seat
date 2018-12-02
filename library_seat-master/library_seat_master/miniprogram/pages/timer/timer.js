// pages/timer/timer.js
/*获取系统的当前时间*/
function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes() + 10  //显示十分钟之后的时间作为预约截止时间
  if (minute >= 60) {  //相应的对分钟数大于60的处理
    minute = minute - 60;
    hour = hour + 1;
  }
  var second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}