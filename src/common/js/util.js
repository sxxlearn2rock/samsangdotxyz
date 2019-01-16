function paddingZero(num) {
  if (parseInt(num) < 10) {
    return '0' + num
  }
  return num
}

export default {
  // 将Date对象转换为'yyyy-MM-dd HH:mm:ss'格式的字符串
  dateFormat(date) {
    const year = date.getFullYear()
    const month = paddingZero(date.getMonth() + 1)
    const day = paddingZero(date.getDate())
    const hour = paddingZero(date.getHours())
    const minute = paddingZero(date.getMinutes())
    const second = paddingZero(date.getSeconds())
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`
  },

  // 将'yyyy-MM-dd HH:mm:ss'格式的字符串转为Date对象
  stringToDate(str){
      let tempStrs = str.split(" ");  //截取时间
      // 解析日期部分
      let dateStrs = tempStrs[0].split("-");
      let year = parseInt(dateStrs[0], 10);
      let month = parseInt(dateStrs[1], 10) - 1;
      let day = parseInt(dateStrs[2], 10);
      // 解析时间部分
      let timeStrs = tempStrs[1].split(":");
      let hour = parseInt(timeStrs [0], 10);
      let minute = parseInt(timeStrs[1], 10);
      let second = parseInt(timeStrs[2], 10);
      let date = new Date(year, month, day, hour, minute, second);
      return date;
  }
}